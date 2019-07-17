import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import API from "../../../api";
import axios from 'axios';
import Spinner from '../../Spinner/Spinner';
import './Post.scss';
import UserContext from '../../../context/users/UserContext';
import { AuthStore } from '../../../helpers';

const myApi = new API()
myApi.createEntity({ name: 'posts' });

class PostList extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
            offset: 0,
        }
    }

    handleClick(e, post) {
        post.status = 1;
        myApi.endpoints.posts.update(post).then(({ data }) => {
            this.setState({
                posts: this.state.posts.map((postItem) => {
                    if (postItem.id === data.id) {
                        return data;
                    }
                    return postItem;
                })
            })
        }).catch(error => {
            console.log("error", error);
        });
    }

    loadCommentsFromServer() {
        axios.all([
            myApi.endpoints.posts.getSpecific({ id: 'count' }),
            myApi.endpoints.posts.getSpecific({ id: `16/${this.state.offset}` })
        ]).then(axios.spread((count, posts) => {
            this.setState({
                pageCount: count.data / 15,
                posts: posts.data
            });
        })).catch(error => {
            console.log(error);
        });
    }

    componentDidMount() {
        this.loadCommentsFromServer();
    }

    handlePageClick = data => {

        let selected = data.selected;
        let offset = Math.ceil(selected * 15);

        this.setState({ offset: offset }, () => {
            this.loadCommentsFromServer();
        });
    };

    render() {
        if (!(this.state.posts && this.state.posts.length > 0)) {
            return <Spinner />
        }
        let authUser = AuthStore.getUser();

        return <>
            <div id="posts-back" className="container">
                <h3 className="mx-auto mt-5 mb-3 text-center">Liste des articles</h3>
                <Table striped bordered hover variant="dark" size="sm">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th className="pl-3">Titre</th>
                            <th className="text-center">Views</th>
                            {(authUser && authUser.roles === 'admin') && <th className="text-center">Statut</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((post, index) => {
                            return (
                                <tr key={index}>
                                    <td className="text-center">{post.id}</td>
                                    <td className="pl-3"><a href={`/article/${post.slug}`}>{post.title}</a></td>
                                    <td className="text-center">{post.views}</td>
                                    {(authUser && authUser.roles === 'admin') && <td className="text-center">
                                        {(post.status === "1") ?
                                            "Approuvé" :
                                            <button type="button" onClick={(e) => this.handleClick(e, post)} className="btn btn-success" id={post.id}>
                                                Approuver
                                        </button>}
                                    </td>}
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                <div className="react-paginate">
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                        disabledClassName={'disable'}
                    />
                </div>
            </div>
        </>;
    }
}
PostList.contextType = UserContext;

export default PostList;

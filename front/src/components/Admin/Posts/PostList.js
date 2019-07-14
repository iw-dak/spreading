import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import API from "../../../api";
import axios from 'axios';

const myApi = new API()
myApi.createEntity({ name: 'posts' });

class PostList extends Component {

    constructor() {
        super();
        this.state = {
            posts: [],
            offset: 0
        }
    }

    handleClick(e, post) {
        post.status = 1;
        myApi.endpoints.posts.update(post).then(({ data }) => {
            this.forceUpdate();
            window.location.reload();
        }).catch(error => {
            console.log("error", error);
        })
        console.log('post button', post);
    }

    loadCommentsFromServer() {
        axios.all([
            myApi.endpoints.posts.getAll(),
            myApi.endpoints.posts.getSpecific({ id: `16/${this.state.offset}` })
        ]).then(axios.spread((posts, filteredPosts) => {
            let status = "";
            let postList = filteredPosts.data.map((post, index) => {
                if (post.status === "1")
                    status = "Approuvé";
                else
                    status =
                        <button type="button" onClick={(e) => this.handleClick(e, post)} className="btn btn-success" id={post.id}>
                            Approuver
                        </button>;
                return (
                    <tr key={index}>
                        <td className="text-center">{post.id}</td>
                        <td>{post.title}</td>
                        <td className="text-center">{post.views}</td>
                        <td className="text-center">{status}</td>
                    </tr>
                )
            })
            this.setState({
                posts: postList,
                pageCount: Math.ceil(Object.keys(posts.data).length / 15),
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
        return <>
            <div className="container">
                <h3 className="mx-auto mt-4 mb-4">Liste des articles</h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th className="text-center">Views</th>
                            <th className="text-center">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts}
                    </tbody>
                </Table>
                <div className="react-paginate">
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </div>
        </>;
    }
}

export default PostList;

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

    deleteItem = (e, post) => {
        e.preventDefault();
        myApi.endpoints.posts.delete({ id: post.id }).then((response) => {
            alert("Article supprimé...");
            window.location.reload();
        }).catch(error => {
            alert("Une erreur s'est produite lors de la  suppression de cet article");
        });
    }

    render() {
        if (!(this.state.posts && this.state.posts.length > 0)) {
            return <Spinner />
        }
        let authUser = AuthStore.getUser();

        return <>
            <div id="posts-back" className="container">

                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <h3 className="sp-back-title">Liste des articles</h3>
                    </div>
                </div>

                <div className="table-div">
                    <div className="post-action">
                        <a href={`${process.env.REACT_APP_URL}/admin/posts/add`} className="btn btn-outline-secondary"><i className="mr-2 fas fa-plus-circle"></i>Ajouter un article</a>
                    </div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Titre</th>
                                <th className="text-center">Vue</th>
                                <th className="text-center">Contenu externe ?</th>
                                {(authUser && authUser.roles === 'admin') && <th className="text-center">Statut</th>}
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.posts.map((post, index) => {
                                return (

                                    <tr key={index}>
                                        <td className="text-center">{post.id}</td>
                                        <td><a href={`/article/${post.slug}`}>{post.title}</a></td>
                                        <td className="text-center">{post.views}</td>
                                        <td className="text-center">{post.is_external === "1" ? "Oui" : "Non"}</td>
                                        {(authUser && authUser.roles === 'admin') && <td className="text-center">
                                            {(post.status === "1") ?
                                                "Approuvé" :
                                                <button type="button" onClick={(e) => this.handleClick(e, post)} className="btn btn-success" id={post.id}>
                                                    Approuver
                                        </button>}
                                        </td>}
                                        <td className="text-center">
                                            <div className="d-flex justify-content-center">
                                                {(authUser.id === post.user.id || authUser.roles === 'admin') && <a className="btn btn-secondary btn-sm" href={`${process.env.REACT_APP_URL}/admin/posts/edit/${post.slug}`}>Modifier</a>}

                                                {authUser.roles === 'admin' && <a href="#post-delete" onClick={(e) => {
                                                    e.preventDefault();
                                                    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?'))
                                                        this.deleteItem(e, post)
                                                }} className="btn btn-danger btn-sm ml-2">Supprimer</a>}
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>

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

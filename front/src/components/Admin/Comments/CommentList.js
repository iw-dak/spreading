import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import API from "../../../api";
import axios from 'axios';
import './Comment.scss';
import Spinner from '../../Spinner/Spinner';

const myApi = new API()
myApi.createEntity({ name: 'comments' });

class CommentList extends Component {

    constructor() {
        super();
        this.state = {
            comments: [],
            offset: 0,
        }
    }

    handleClick(e, comment) {
        comment.status = 1;
        myApi.endpoints.comments.update(comment).then(({ data }) => {
            this.setState({
                comments: this.state.comments.map((commentItem) => {
                    if (commentItem.id === data.id) {
                        return data;
                    }
                    return commentItem;
                })
            })
        }).catch(error => {
            console.log("error", error);
        });
    }

    loadCommentsFromServer() {
        axios.all([
            myApi.endpoints.comments.getSpecific({ id: 'count' }),
            myApi.endpoints.comments.getSpecific({ id: `16/${this.state.offset}` })
        ]).then(axios.spread((count, comments) => {
            this.setState({
                pageCount: count.data / 15,
                comments: comments.data
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
        if (!(this.state.comments && this.state.comments.length > 0)) {
            return <Spinner />
        }
        return <>
            <div id="comments-back" className="container">
                <h3 className="mx-auto mt-4 mb-4">Liste des commentaires</h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th className="text-center">#</th>
                            <th>Contenu</th>
                            <th className="text-center">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.comments.map((comment, index) => {
                            return (
                                <tr key={index}>
                                    <td className="text-center comment">{comment.id}</td>
                                    <td>{comment.content.length > 100 ?
                                        <a href={`/admin/comments/${comment.id}`}> {comment.content.substring(0, 100)}... </a> :
                                        comment.content}
                                    </td>
                                    <td className="text-center">
                                        {(comment.status === "1") ?
                                            "Approuvé" :
                                            <button type="button" onClick={(e) => this.handleClick(e, comment)} className="btn btn-success" id={comment.id}>
                                                Approuver
                                        </button>}
                                    </td>
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

export default CommentList;

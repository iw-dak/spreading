import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import API from "../../../api";
import axios from 'axios';

const myApi = new API()
myApi.createEntity({ name: 'comments' });

class CommentList extends Component {

    constructor() {
        super();
        this.state = {
            comments: [],
            offset: 0
        }
    }

    handleClick(e, comment) {
        comment.status = 1;
        myApi.endpoints.comments.update(comment).then(({ data }) => {
            this.forceUpdate();
            window.location.reload();
        }).catch(error => {
            console.log("error", error);
        })
    }

    loadCommentsFromServer() {
        axios.all([
            myApi.endpoints.comments.getAll(),
            myApi.endpoints.comments.getSpecific({ id: `16/${this.state.offset}` })
        ]).then(axios.spread((comments, filteredcomments) => {
            let status = "";
            let commentList = filteredcomments.data.map((comment, index) => {
                if (comment.status === "1")
                    status = "Approuvé";
                else
                    status =
                        <button type="button" onClick={(e) => this.handleClick(e, comment)} className="btn btn-success" id={comment.id}>
                            Approuver
                        </button>;
                return (
                    <tr key={index}>
                        <td className="text-center">{comment.id}</td>
                        <td>{comment.content}</td>
                        <td className="text-center">{status}</td>
                    </tr>
                )
            })
            this.setState({
                comments: commentList,
                pageCount: Math.ceil(Object.keys(comments.data).length / 15),
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
                <h3 className="mx-auto mt-4 mb-4">Liste des commentaires</h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Contenu</th>
                            <th className="text-center">Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.comments}
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

export default CommentList;

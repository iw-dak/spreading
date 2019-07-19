import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import FlashMassage from 'react-flash-message';
import API from "../../../api";
import axios from 'axios';
import Spinner from '../../Spinner/Spinner';
// import './Auth.scss';

const myApi = new API()
myApi.createEntity({ name: 'tags' });

class TagList extends Component {
    constructor() {
        super();
        this.state = {
            tags: [],
            offset: 0,
            activeModal: false,
            name: '',
            slug: '',
            alertModal: '',
            alertDeleted: ''
        }
    }

    handleChange = e => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    add(e) {
        e.preventDefault();
        const fields = { name: this.state.name, slug: this.state.slug };
        myApi.endpoints.tags.create(fields).then(({ data }) => {
            this.setState({
                alertModal: 'Le tag a bien été ajouté',
                tags: this.state.tags.map(tag => {
                    if (tag.id === data.id) {
                        return data;
                    }
                    return tag;
                })
            })
        }).catch(error => {
            console.log("error", error);
        });
    }

    remove(e, tag) {
        myApi.endpoints.tags.delete({ id: tag.id }).then(({ data }) => {
            alert("Le tag a bien été supprimé.");
            window.location.reload();
        }).catch(error => {
            console.log("error", error);
        });
    }

    loadCommentsFromServer() {
        axios.all([
            myApi.endpoints.tags.getSpecific({ id: 'count' }),
            myApi.endpoints.tags.getSpecific({ id: `16/${this.state.offset}` })
        ]).then(axios.spread((count, tags) => {
            this.setState({
                pageCount: count.data / 15,
                tags: tags.data
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
        if (!(this.state.tags && this.state.tags.length > 0)) {
            return <Spinner />
        }

        return <>
            <div className="container">
                <h3 className="sp-back-title">Liste des tags</h3>

                <div className="table-div">
                    <div className="d-flex justify-content-end mb-3">
                        <button className="btn btn-outline-secondary" data-target="#myModal" data-toggle="modal">
                            <i className="mr-2 fas fa-plus-circle"></i>
                            Ajouter
            </button>
                    </div>
                    <Table striped bordered hover variant="dark" >
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th className="text-center">Label</th>
                                <th className="text-center">Tag utilisé ?</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tags.map((tag, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-center">{tag.id}</td>
                                        <td className="text-center">{tag.name}</td>
                                        <td className="text-center">
                                            {(tag.posts) ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times-circle"></i>}
                                        </td>
                                        <td className="text-center">
                                            {(tag.posts.length > 0) ?
                                                <button type="button" className="btn btn-danger disabled" id={tag.id}>Supprimer</button> :
                                                <button type="button" onClick={(e) => { if (window.confirm('Êtes-vous sûr de vouloir supprimer ce tag ?')) this.remove(e, tag) }} className="btn btn-danger" id={tag.id}>
                                                    Supprimer
                        </button>}
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

                {/* Modal to add new tag */}
                <div className={`modal ${!this.state.activeModal} ?? hide`} id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Ajout d'un nouveau tag </h5>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={(e) => this.add(e)}>
                                    <div className="form-group">
                                        {(this.state.alertModal !== '') &&
                                            <FlashMassage duration={5000} persistOnHover={true}>
                                                <div className="alert alert-info text-center">
                                                    {this.state.alertModal}
                                                </div>
                                            </FlashMassage>}
                                        <label htmlFor="exampleInputEmail1">Tag</label>
                                        <input type="text" className="form-control" aria-describedby="tag" placeholder="Label du tag" name="name" onChange={this.handleChange} />
                                        <br />
                                        <input type="text" className="form-control" aria-describedby="tag" placeholder="Slug du tag" name="slug" onChange={this.handleChange} />
                                    </div>
                                    <button className="btn btn-outline-info">Ajouter</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>;

    }
}

export default TagList;

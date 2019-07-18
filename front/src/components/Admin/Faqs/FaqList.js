import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
import FlashMassage from 'react-flash-message';
import API from "../../../api";
import axios from 'axios';
import Spinner from '../../Spinner/Spinner';
// import './Auth.scss';

const myApi = new API()
myApi.createEntity({ name: 'faqs' });

class FaqList extends Component {
    constructor() {
        super();
        this.state = {
            faqs: [],
            offset: 0,
            question: '',
            answer: '',
            alertModal: '',
            alertDeleted: ''
        }
    }

    handleChange = e => {
        let target = e.target;
        if(target.name === 'question'){
            this.setState({
                ["question"]: target.value
            });
        }else {
            this.setState({
                ["answer"]: target.value
            });
        }
    }


    add(e) {
        e.preventDefault();
        const fields = { question: this.state.question, answer: this.state.answer};
        console.log(fields);
        myApi.endpoints.faqs.create(fields).then(({ data }) => {
            this.setState({
                alertModal: 'La faq a bien été ajouté'
            })
        }).catch(error => {
            console.log("error", error);
        });
    }

    remove(e, faq) {
        myApi.endpoints.faqs.delete({ id: faq.id }).then(({ data }) => {
            this.setState({
                alertDeleted: 'Le faq a bien été supprimé.'
            })
        }).catch(error => {
            console.log("error", error);
        });
    }

    loadFaqs() {
            myApi.endpoints.faqs.getAll().then(({data}) => {
                this.setState({
                    faqs: data
                });
            }).catch(error => {
                console.log("fetchAllFAQs", error.message);
            })
        }


    componentDidMount() {
        this.loadFaqs();
    }

    handlePageClick = data => {

        let selected = data.selected;
        let offset = Math.ceil(selected * 15);

        this.setState({ offset: offset }, () => {
            this.loadFaqs();
        });
    };


    render() {
        if (!(this.state.faqs && this.state.faqs.length > 0)) {
            return <Spinner />
        }

        return <>
    <div className="container">
            <h3 className="sp-back-title">Liste des Faqs</h3>
        {(this.state.alertDeleted !== '') &&
        <FlashMassage duration={5000} persistOnHover={true}>
            <div className="alert alert-success text-center">
            {this.state.alertDeleted}
            </div>
            </FlashMassage>}
            <div className="table-div">
            <div className="d-flex justify-content-end mb-3">

            </div>

            <Table striped bordered hover variant="dark" size="sm">
            <thead>
            <tr>
            <th className="text-center">#</th>
            <th className="text-center">Question</th>
            <th className="text-center">Answers</th>
        <th className="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            {this.state.faqs.map((faq, index) => {
                    return (
                        <tr key={index}>
                        <td className="text-center">{faq.id}</td>
                        <td className="text-center">{faq.question}</td>
                        <td className="text-center">
                    {faq.answer}
                </td>
                    <td className="text-center">
                        <button type="button" onClick={(e) => this.remove(e, faq)} className="btn btn-danger" id={faq.id}>
                        Supprimer
                        </button>
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
            <label htmlFor="exampleInputEmail1">FAQ</label>
            <input type="text" className="form-control" aria-describedby="tag" placeholder="Label de la question" name="question" onChange={this.handleChange} />
        <br />
        <input type="text" className="form-control" aria-describedby="tag" placeholder="Label du reponse" name="answer" onChange={this.handleChange} />
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

        export default FaqList;

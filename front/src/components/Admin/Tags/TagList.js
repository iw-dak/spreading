import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Table from 'react-bootstrap/Table';
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
      activeModal: false
    }
  }

  handleClick(e, tag) {
    tag.status = 1;
    myApi.endpoints.tags.update(tag).then(({ data }) => {
      this.setState({
        tags: this.state.tags.map((tagItem) => {
          if (tagItem.id === data.id) {
            return data;
          }
          return tagItem;
        })
      })
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
        <h3 className="mx-auto mt-4 mb-4">Liste des tags</h3>
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-outline-primary" data-target="#myModal" data-toggle="modal">
            <i class="mr-2 fas fa-plus-circle"></i>
            Ajouter
        </button>
        </div>
        <Table striped bordered hover variant="dark" size="sm">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Label</th>
              <th className="text-center">Utilisé</th>
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
                    <button type="button" onClick={(e) => this.remove(e, tag)} className={`btn btn-danger ${!tag.posts} && disabled`} id={tag.id}>
                      Supprimer
                      </button>
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

        {/* Modal to add new tag */}
        <div className={`modal ${!this.state.activeModal} ?? hide`} id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Ajout d'un nouveau tag </h5>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Tag</label>
                    <input type="text" class="form-control" aria-describedby="tag" placeholder="Label du tag" name="tag" />
                  </div>
                  <input className="btn btn-outline-info" type="submit" />
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

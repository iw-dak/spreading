
import React, { Component } from 'react';
import API from "../../../api";
import FlashMassage from 'react-flash-message';
import UserContext from '../../../context/users/UserContext';
import { AuthStore } from '../../../helpers';

const myApi = new API()
myApi.createEntity({ name: 'comments' });

class Comment extends Component {

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);

    this.state = {
      comment: [],
      post: [],
      user: [],
      message: false
    }
  }

  goBack() {
    this.props.history.goBack();
  }

  componentDidMount() {
    let url = this.props.location.pathname.split("/");

    myApi.endpoints.comments.getSpecific({ id: url[3] }).then(({ data }) => {
      this.setState({
        comment: data,
        post: data.post,
        user: data.user
      });
    }).catch(error => {
      console.log("fetchLatests", error.message);
    })
  }

  handleClick(comment) {
    comment.status = 1;
    let newPost = [];

    myApi.endpoints.comments.update(comment).then(({ data }) => {
      if (this.state.comment.id === data.id)
        newPost = data;
      else
        newPost = this.state.comment;
      this.setState({
        comment: newPost,
        post: newPost.post,
        user: newPost.user,
        message: true
      })
    }).catch(error => {
      console.log("error", error);
    });
  }

  render() {
    let authUser = AuthStore.getUser();
    return <>
      <div id="comment-back" className="container">
        {this.state.message &&
          <FlashMassage duration={5000} persistOnHover={true}>
            <p className="p-approved mx-auto alert alert-success text-center mt-3 p-3"><strong>Le commentaire a été approuvé !</strong></p>
          </FlashMassage>}

        <div className="mx-auto view-comment">
          <button className="btn" onClick={this.goBack}>
            <i className="mr-1 fas fa-arrow-circle-left"></i>
            Retour
          </button>
          <div className="article-fig pt-5 pb-2">
            <h4 className="mx-3 ">Consulter l'article</h4>
            <p className="mx-4">{this.state.post.title}</p>
            <a href={`/article/${this.state.post.slug}`} className="mx-4">http://localhost:3000/{this.state.post.slug}</a>
          </div><br /><br />
          <figure className="comment-fig mx-4 pt-2">
            <img src="https://lorempixel.com/570/400?t=1563300889815" alt="" />
            <figcaption className="pl-2" >Commentaire laissé par {this.state.user.firstname} <br />{this.state.comment.created_at}</figcaption>
          </figure>
          <hr className="mx-4" />
          <p className="mx-4">
            "{this.state.comment.content}"
          </p><br />
          {(authUser && authUser.roles === 'admin') &&
            (this.state.comment.status === "0") &&
            <div className="d-flex justify-content-end">
              <button type="button" onClick={() => this.handleClick(this.state.comment)} className="btn btn-success mx-4" >Approuver</button>
            </div>
          }
        </div>
      </div>
    </>;

  }
}

Comment.contextType = UserContext;

export default Comment;

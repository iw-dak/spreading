
import React, { Component } from 'react';
import './Home.scss';
import API from "../../../api";
import axios from 'axios';
import UserContext from '../../../context/users/UserContext';
import { formatDate } from '../../../helpers';

const myApi = new API()
myApi.createEntity({ name: 'posts' });
myApi.createEntity({ name: 'comments' });
myApi.createEntity({ name: 'users' });

class HomeBackoffice extends Component {

  constructor() {
    super();
    this.state = {
      postsToApprove: 0,
      totalUsers: 0,
      commentsToApprove: 0,
      latestPosts: [],
      latestComments: []
    }
  }

  getData() {
    axios.all([
      myApi.endpoints.posts.getSpecific({ id: 'to_approve' }),
      myApi.endpoints.users.getSpecific({ id: 'count' }),
      myApi.endpoints.comments.getSpecific({ id: 'to_approve' }),
      myApi.endpoints.posts.getSpecific({ id: 'latests' }),
      myApi.endpoints.comments.getSpecific({ id: 'latests' })
    ]).then(axios.spread((postsToApprove, totalUsers, commentsToApprove, latestPosts, latestComments) => {
      this.setState({
        postsToApprove: postsToApprove.data,
        totalUsers: totalUsers.data,
        commentsToApprove: commentsToApprove.data,
        latestPosts: latestPosts.data,
        latestComments: latestComments.data
      });
    })).catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return <>
      <div id="home-back" className="container">
        <h3 className="mx-auto mt-4 mb-4">Bienvenue sur votre dashboard</h3>
        <section className="main-section d-flex justify-content-between">
          <div className="div-shadow main-data">
            <span>
              <i className="fas fa-newspaper fa-3x mb-2"></i>
            </span>
            <h5>
              <a href="/admin/posts">{this.state.postsToApprove} articles</a>
            </h5>
          </div>
          <div className="div-shadow main-data">
            <span>
              <i className="far fa-user fa-3x mb-2"></i>
            </span>
            <h5>
              <a href="/admin/users">{this.state.totalUsers} utilisateurs</a>
            </h5>
          </div>
          <div className="div-shadow main-data">
            <span>
              <i className="fas fa-eye fa-3x mb-2"></i>
            </span>
            <h5>
              <a href="/admin/#">200 visiteurs</a>
            </h5>
          </div>
          <div className="div-shadow main-data">
            <span>
              <i className="fas fa-comments fa-3x mb-2"></i>
            </span>
            <h5>
              <a href="/admin/comments">{this.state.commentsToApprove} commentaires</a>
            </h5>
          </div>
        </section>
        <section className="main-section d-flex justify-content-between">
          <div className="div-shadow p-3 latest-data mx-3">
            <h5 className="ml-1">Les derniers articles postés</h5>
            {this.state.latestPosts.map((post, index) => {
              return (
                <figure className=" mx-4 pt-2" key={index}>
                  <img src="https://lorempixel.com/570/400?t=1563300889815" alt="latest posts" />
                  <figcaption className="pl-2" >
                    Le framework Symfony<br />
                    {(post.content.length > 100) ?
                      <a href={`/article/${post.slug}`}> {post.content.substring(0, 100)}... </a> :
                      post.content}
                  </figcaption>
                </figure>
              )
            })}
          </div>
          <div className="div-shadow p-3 latest-data mx-3">
            <h5 className="ml-1">Les derniers commentaires ajoutés</h5>
            {this.state.latestComments.map((comment, index) => {
              return (
                <figure className=" mx-4 pt-2" key={index}>
                  <img src="https://lorempixel.com/570/400?t=1563300889815" alt="latest comments" />
                  <figcaption className="pl-2" >
                    Posté par {comment.user.firstname}, le <strong>{formatDate(comment.created_at)}</strong><br />
                    {(comment.content.length > 100) ?
                      <a href={`/admin/comments/${comment.id}`}> {comment.content.substring(0, 100)}... </a> :
                      comment.content}
                  </figcaption>
                </figure>
              )
            })}
          </div>
        </section>
      </div>
    </>;
  }
}

HomeBackoffice.contextType = UserContext;

export default HomeBackoffice;

import React, { Component } from 'react';
import './Back.scss';
import Table from 'react-bootstrap/Table'

class PostList extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
        }
    }

    handleClick(e, post) {
        fetch("http://localhost:8000/posts/" + post.id, {
            mode: 'cors',
            method: 'put',
            body: JSON.stringify(post)
        }).then(data => {
            // this.setState({ "posts": posts });
            console.log(data);
        })
        console.log('post button', post.id);
    }

    componentDidMount() {
        fetch("http://localhost:8000/posts", {
            mode: 'cors'
        }).then(results => {
            return results.json();
        }).then(data => {
            this.setState({ data });
            let status = "";
            let posts = data.map((post, index) => {
                if (post.status === "1")
                    status = "Approuvé";
                else
                    status =
                        <button type="button" onClick={(e) => this.handleClick(e, post)} className="btn btn-success" id={post.id}>
                            Approuver
                        </button>;
                return (
                    <tr key={index}>
                        <td className="text-center">{index}</td>
                        <td>{post.title}</td>
                        <td className="text-center">{post.views}</td>
                        <td className="text-center">{status}</td>
                    </tr>
                )
            })
            this.setState({ "posts": posts }, function () {

            });
        })
    }

    render() {
        return <>
            <div className="container">
                <h3>Liste des articles</h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th className="text-center">Views</th>
                            <th className="text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts}
                    </tbody>
                </Table>
            </div>
        </>;
    }
}

export default PostList;

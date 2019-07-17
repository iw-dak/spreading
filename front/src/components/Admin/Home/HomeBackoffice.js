
import React, { Component } from 'react';
import './Home.scss';

class HomeBackoffice extends Component {
  render() {
    return <>
      <div id="home-back" className="container">
        <h3 className="mx-auto mt-4 mb-4">Welcome to the backoffice</h3>
        <section className="main-section d-flex justify-content-between">
          <div className="div-shadow main-data">
            <i className="fas fa-newspaper fa-3x mb-2"></i>
            <h5>1000 articles</h5>
          </div>
          <div className="div-shadow main-data">
            <i className="far fa-user fa-3x mb-2"></i>
            <h5>150 utilisateurs</h5>
          </div>
          <div className="div-shadow main-data">
            <i className="fas fa-newspaper fa-3x mb-2"></i>
            <h5>100 utilisateurs</h5>
          </div>
        </section>
        <section>

        </section>
      </div>
    </>;
  }
}

export default HomeBackoffice;

import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {

  render() {

    return <>
      <div id="back-footer">
        <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">© 2019 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> Spreading</a>
          </div>
        </footer>
      </div>
    </>;
  }
}

export default Footer;

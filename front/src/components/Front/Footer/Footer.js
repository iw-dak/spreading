import React from 'react';

const Footer = ({ data }) => <>
    <div className="Footer container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="container footer-menu-wrapper">
                    <div className="row w-100">
                        <div className="col-3">
                            <h3>Languages</h3>
                            <ul className="footer-menu-item-group">
                                {data.languages.map((menu, key) => <li key={key}><a href={menu.link}>{menu.name}</a></li>)}
                            </ul>
                        </div>

                        <div className="col-3">
                            <h3>Frameworks</h3>
                            <ul className="footer-menu-item-group">
                                {data.frameworks.map((menu, key) => <li key={key}><a href={menu.link}>{menu.name}</a></li>)}
                            </ul>
                        </div>

                        <div className="col-3">
                            <h3>Informations</h3>
                            <ul className="footer-menu-item-group">
                                {data.informations.map((menu, key) => <li key={key}><a href={menu.link}>{menu.name}</a></li>)}
                            </ul>
                        </div>

                        <div className="col-3">
                            <h3>Compte</h3>
                            <ul className="footer-menu-item-group">
                                {data.accounts.map((menu, key) => <li key={key}><a href={menu.link}>{menu.name}</a></li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-column align-items-center">
                            <a className="sf-logo" href="/">
                                <span className="sitename">Spreading</span>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 footer-menu-description">
                            <p>© 2019 Spreading. All rights reserved. Use of this site constitutes acceptance of our User Agreement and Privacy Policy. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with prior written permission of Featured.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
export default Footer;

import React from 'react';

const HeaderMenu = ({ menus }) => <>
    <ul className="header-menu d-flex flex-column flex-md-row align-items-sm-center  justify-content-center">
        {menus.map((menu, key) => <li className="menu-item" key={key}><a href={menu.link}>{menu.name}</a></li>)}
    </ul>
</>

export default HeaderMenu;

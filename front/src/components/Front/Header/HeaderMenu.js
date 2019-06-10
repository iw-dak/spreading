import React from 'react';

const HeaderMenu = ({ menus }) => <>
    <ul>
        {menus.map((menu, key) => <li key={key}><a href={menu.link}>{menu.name}</a></li>)}
    </ul>
</>
export default HeaderMenu;

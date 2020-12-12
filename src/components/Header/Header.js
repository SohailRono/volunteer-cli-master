
import React from 'react';
import Menu from '../Header/Menu';
import Search from '../Header/Search';


const Header = () => {
    return (
        <div className="banner">
         <Menu></Menu>
         <Search></Search>
        </div>
    );
};

export default Header;
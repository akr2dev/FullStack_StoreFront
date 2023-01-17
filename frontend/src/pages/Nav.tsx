import React from 'react';
import {Link} from 'react-router-dom';

const Nav: React.FunctionComponent = () => {
    return (
        <nav>
            <ul>
                <li className={"nav-item"}>
                    <Link to={"/products"}>All Products</Link>
                </li>
                <li className={"nav-item"}>
                    <Link to={"/login"}>Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
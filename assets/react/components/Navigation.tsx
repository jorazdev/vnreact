import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/Navigation.css'

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/" className={(nav) => nav.isActive ? 'active': ''}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={(nav) => nav.isActive ? 'active': ''}>
                        About
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
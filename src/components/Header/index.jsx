import React from 'react'

import logo from '../../assets/logo.png'
import './style.css'


const Header = () => {
    return (
        <header className="header mdl-layout">
            <div className="mdl-grid">
                <div className="mdl-cell--12-col">
                    <img alt="Logo"
                        src={logo}
                        className="header__logo" />
                </div>
            </div>
        </header>
    );
}

export default Header
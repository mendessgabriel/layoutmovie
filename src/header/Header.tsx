import React from 'react';
import './Header.css';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

function Header(itemBold: number, setHeaderItemBold: (value: number) => void) {

    const clickedItem = (number: number) => {
        setHeaderItemBold(number);
    }

    return (
        <header className="header">
            <Link onClick={() => clickedItem(0)} className="logo" to="/" />
            <div className="flex">
                <nav className="header-nav">
                    <div>
                        <Link onClick={() => clickedItem(0)} className={itemBold === 0 ? 'bold' : ''} to="/">Inicio</Link>
                    </div>
                    <div>
                        <Link onClick={() => clickedItem(1)} className={itemBold === 1 ? 'bold' : ''} to="/Anteriores">Anteriores</Link>
                    </div>
                    <div>
                        <Link onClick={() => clickedItem(2)} className={itemBold === 2 ? 'bold' : ''} to="/Proximas">Proximas</Link>
                    </div>
                    <div>
                        <Link onClick={() => clickedItem(3)} className={itemBold === 3 ? 'bold' : ''} to="/ListaDesejos">Lista de desejos</Link>
                    </div>
                </nav>
                <input className="search-bar" type="text" placeholder="Search" />
            </div>
        </header>
    );
}

export default Header;

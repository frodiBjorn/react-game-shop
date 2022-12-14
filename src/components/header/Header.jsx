import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CartBlock } from './../CartBlock/CartBlock';


export const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Link to="/react-game-shop" className="header__store-title">
                    Game Store
                </Link>
            </div>
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock />
            </div>
        </div>
    );
};

import React, { useCallback, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { CartMenu } from "./../CartMenu/CartMenu";
import "./CartBlock.css";
import { calcTotalPrice } from "./../utils";
import { ItemsInCart } from "./../ItemsInCart/ItemsInCart";
import { useNavigate } from "react-router-dom";

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate();

    const hadleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate("/react-game-shop/order");
    },[navigate]);
    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length} />
            <AiOutlineShoppingCart
                size={30}
                className="cart-block__icon"
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice > 0 ? (
                <span className="cart-block__total-price">
                    {totalPrice} руб.
                </span>
            ) : null}
            {isCartMenuVisible && (
                <CartMenu items={items} onClick={hadleClick} />
            )}
        </div>
    );
};

export default CartBlock;

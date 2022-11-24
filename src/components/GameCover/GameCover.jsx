import React from "react";
import "./GameCover.css";

export const GameCover = ({ image = "" }) => {
    return (
        <div
            className="game-cover"
            style={{ backgroundImage: `url(/react-game-shop/${image})` }}
        ></div>
    );
};

export default GameCover;

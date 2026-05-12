import React from 'react';
import {shuffle} from "./utils/shuffle.ts";
import MemoryGame from "./MemoryGame.tsx";
import type {IMemoryGame} from "./utils/interface.ts";



const MemoryBoard = ({images}: IMemoryGame) => {
    const gameImages = shuffle([...images, ...images])
    return (
        <MemoryGame images={gameImages}/>
    );
};

export default MemoryBoard;
import React from 'react';
import { useState } from 'react';
import Checkbox from './buttons/Checkbox.js'
import MoveButton from './buttons/MoveButton.js'
import Item from './Item.js'

export default function ToggleItem(props) {
    const [index, setIndex] = useState(0);
    const items = props.items;
    
    const moveItem = (moveBy) => { 
        setIndex((index) => (index + moveBy + items.length) % items.length);
    };

    return (
        <React.Fragment>
            <Checkbox></Checkbox>
            <MoveButton text="Previous" onClick={() => moveItem(-1)}></MoveButton>
            <Item item={items[index]}></Item>
            <MoveButton text="Next" onClick={() => moveItem(1)}></MoveButton>
        </React.Fragment>
    )
}

// can checkbox to disable or enable

// < > buttons

// random button

//
  
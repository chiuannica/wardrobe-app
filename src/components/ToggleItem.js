import React from 'react';
import { useState } from 'react';
import Checkbox from './buttons/Checkbox.js'
import MoveButton from './buttons/MoveButton.js'
import Item from './Item.js'

export default function ToggleItem(props) {
    const [index, setIndex] = useState(0);
    const items = props.items;



    const listItems = props.items.map((index, item) =>
        <Item key={index} item={item}></Item>
    );

    return (
        <React.Fragment>
            <ul>{listItems}</ul>
            <Checkbox></Checkbox>
            <MoveButton type="Next"></MoveButton>
            <MoveButton type="Prev"></MoveButton>
        </React.Fragment>
    )
}

// can checkbox to disable or enable

// < > buttons

// random button

//
  
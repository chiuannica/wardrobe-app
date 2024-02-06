import React from 'react';
import Checkbox from './buttons/Checkbox.js'
import MoveButton from './buttons/MoveButton.js'

export default function Item() {
    return (
        <React.Fragment>
            <Checkbox></Checkbox>
            <MoveButton type="Next"></MoveButton>
            <MoveButton type="Prev"></MoveButton>
            <h2>Item</h2>
        </React.Fragment>
    )
}

// can checkbox to disable or enable

// < > buttons

// random button

//
  
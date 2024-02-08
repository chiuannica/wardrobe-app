import React from 'react';
import { useState } from 'react';

export default function Item(props) {
    return (
        <React.Fragment>
            { props.item.name }
        </React.Fragment>
    )
}
import React from 'react';

export default function MoveButton(props) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <button onClick={handleClick}>{props.text}</button>
    );
}
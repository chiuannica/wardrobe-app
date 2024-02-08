import React from 'react';

export default function Checkbox(props) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <button onClick={handleClick}>{props.text}</button>
    );
}
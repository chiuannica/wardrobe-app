import React from 'react';

export default function Checkbox(props) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <React.Fragment>
            <input 
                type="checkbox" 
                id="1" 
                checked={props.allowToggleItem}
                name="select" 
                value="Select"
                onClick={handleClick}
            >
            </input>
        </React.Fragment>
    )
}
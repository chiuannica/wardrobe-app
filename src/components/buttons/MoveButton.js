import React from 'react';

export default function Checkbox(props) {
    const NEXT = 'Next';
    const PREV = 'Prev';

    switch (props.type) {
        case NEXT:
            return (
                <React.Fragment>
                    <button>{ NEXT }</button>
                </React.Fragment>
            )
        case PREV:
            return (
                <React.Fragment>
                    <button>{ PREV }</button>
                </React.Fragment>
            )
        default:
    }
}
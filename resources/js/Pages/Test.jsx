import React, { useState } from 'react';

const Test = (props) => {
    return (
        <div>
            <h1>This is a test component.</h1>
            <p>id: {props.id}</p>
            <p>Name: {props.name}</p>
        </div>
    )
}

export default Test;
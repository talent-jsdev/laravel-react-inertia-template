import React, { useState } from 'react';

const Main = () => {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <h1>Count: {index}</h1>
            <button
                onClick={() => {
                    setIndex(index + 1)
                }}
            >
                Click here
            </button>
            <br />
            <a href="/test">Go to Test</a>
        </div>
    )
}

export default Main;
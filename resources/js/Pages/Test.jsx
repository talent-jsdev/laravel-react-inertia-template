import React, { useState } from 'react';

const Test = () => {
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
        </div>
    )
}

export default Test;
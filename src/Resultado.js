import React, { useState } from 'react';

function Resultado(props) {
    const value = props.value
    return (
        <>
            <h1>Resultado: {value}</h1>
        </>
    );
}

export default Resultado
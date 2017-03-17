import React from 'react';

export default ({title, children}) => (
    <header className = 'center'>
        <h1>{title}</h1>
        <p> Allows you to create a beer in real time. Open up 2 browsers to test out! </p>
        {children}
        <hr />
    </header>
);
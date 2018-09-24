import React from 'react';

import './App.css';

const Card = ({ property }) => {
    const { index, name } = property;
    
    return (
        <div className="card">
            <p>name: { name }</p>
        </div>
    );
}

export default Card;
import React from 'react';

const Button = ({label, value, onClickFunction}) => {
    const handleClick = () => {
        onClickFunction(value);
    };

    return <button onClick={handleClick}>{label}</button>
}

export default Button;
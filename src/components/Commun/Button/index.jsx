import React from 'react'

const Button = (props) => {
    return (
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" >
           {props.title} 
        </button>

    );
}

export default Button
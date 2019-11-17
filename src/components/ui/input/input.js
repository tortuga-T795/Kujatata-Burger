import React from 'react';

import './input.css';
import inputCase from "../input-case/input-case";

const input = ( props ) => {
    const inputClasses = (props.invalid && props.shouldValidate && props.touched) ? 'input-element invalid': 'input-element';
    return (
        <div className='input'>
            <label className='label'>{props.label}</label>
            {inputCase(props, inputClasses)}
        </div>
    );

};

export default input;
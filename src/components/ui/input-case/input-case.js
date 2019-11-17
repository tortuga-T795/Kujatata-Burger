import React from 'react';

const inputCase = ( props, inputClasses) => {
    switch ( props.elementType ) {
        case ( 'input' ):
            return <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
        case ( 'textarea' ):
            return <textarea
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
        case ( 'select' ):
            return (
                <select
                    className={inputClasses}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
        default:
            return <input
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }
};

export default inputCase;
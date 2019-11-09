import React from 'react';

import './button.css';

const button = ({btnType, clicked, children}) => (
    <button
        className={'Button ' + btnType}
        onClick={clicked}>{children}</button>
);

export default button;
import React from 'react';

import './backdrop.css';

const backdrop = ({show, clicked}) => (
    show ? <div className='backdrop' onClick={clicked}/> : null
);

export default backdrop;
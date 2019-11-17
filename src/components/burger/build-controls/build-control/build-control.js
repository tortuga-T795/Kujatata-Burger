import React from 'react';

import './build-control.css';

const buildControl = ({label, removed, disabled, added}) => (
    <div className='build-control'>
        <div className='label'>{label}</div>
        <button 
            className='less'
            onClick={removed}
            disabled={disabled}>Less</button>
        <button 
            className='More'
            onClick={added}>More</button>
    </div>
);

export default buildControl;
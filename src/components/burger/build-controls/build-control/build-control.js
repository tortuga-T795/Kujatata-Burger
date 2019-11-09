import React from 'react';
import './build-control.css'

const buildControl = ({label, removed, added, disabled}) => (
    <div className='build-control'>
        <div className='build label'>{label}</div>
        <button className='build more' onClick={added} >More</button>
        <button className='build less' onClick={removed} disabled={disabled}>Less</button>
    </div>
);

export default buildControl;
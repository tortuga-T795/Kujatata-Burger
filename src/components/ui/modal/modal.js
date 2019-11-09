import React from 'react';

import './modal.css';
import Aux from '../../../hoc';
import Backdrop from '../backdrop';

const modal = ( {modalClosed, show, children}) => (
    <Aux>
        <Backdrop show={show} clicked={modalClosed}/>
            <div className='modal'
                style={{
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}>
                {children}
            </div>
    </Aux>
);

export default modal;
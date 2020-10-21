import React from 'react';

const Modal = () => {

    return (
        <form id="form-modal" className='form-modal'>
        <button type="button" id="form-btn-cerrar">Cerrar</button>
        <input className='input' type="text" id="input-name" placeholder="name" />
        <input className='input' type="text" id="input-avatar" placeholder="avatar url" />
        <button type="button" id="guardar-form" className='guardar-form'>Guardar</button>
    </form>


    )

}

export default Modal;

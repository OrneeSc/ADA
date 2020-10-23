import React, {useState, useContext} from 'react';
import './Modal.scss';
import HeaderContext from '../../Context/HeaderContext';
import {ADD} from '../../Reducers/Reducers';
import {postImg} from '../../Services/Services';

const Modal = () => {
    
    const {setUser, dataDispatch} = useContext(HeaderContext);
    const [titulo, setTitulo] = useState('');
    const [avatar, setAvatar] = useState();

    const close = () => {
        setUser(false)
    }

    const newUser = async () => {
        const payload = await postImg(titulo, avatar)
        dataDispatch({ type: ADD, payload})
        close();
    }
    
    return (
        <React.Fragment>
            <div className="overlay"></div>
                <form className='form-modal'>
                    <button type="button" id="form-btn-cerrar" className='form-btn-cerrar' 
                    onClick={close}>
                        Cerrar
                    </button>

                    <input className='input' type="text" id="input-name" placeholder="Título" 
                    onChange={e => setTitulo(e.target.value)} />

                    <input className='input' type="url" id="input-avatar" placeholder="Avatar URL"  
                    onChange={e => setAvatar(e.target.value)}/>

                    <button type="button" id="guardar-form" className='guardar-form' onClick={newUser}>
                        Guardar
                    </button>
                </form>
        </React.Fragment>


    )

}

export default Modal;

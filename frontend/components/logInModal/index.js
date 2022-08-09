import styles from './logInModal.module.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'next/image';

import React, { useState } from 'react';

import {Button} from '../../objects/button';
import { Shadow } from '../../objects/shadow';
import { InputForms } from '../../objects/inputForms';


export const LogInModal = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);
    
    // Password toggle handler, shows password as text.
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} >
            
                <Modal.Header closeButton>
                    <Modal.Title >
                        Log in
                    </Modal.Title>
                </Modal.Header>
            
                <Modal.Body>
                    <InputForms passwordShown={passwordShown} togglePassword={togglePassword} />
                    <a href='/404' className={styles.formLink}>Forgotten password?</a>
                </Modal.Body>
            
                <Modal.Footer className={styles.modalFooter}>
                    <Shadow>
                        <Button text="Log in" colourWide={true} onClick={props.handleClose} />
                    </Shadow>
                </Modal.Footer>

                {/* second footer for link to sign up */}
                <Modal.Footer className={styles.modalFooter}>
                    {/* TODO anchor tag opens another modal for sign up? */}
                <p>Don't have a Bubble account? <a href="/signup" className={styles.formLink}>Sign up</a></p>
                </Modal.Footer>
                
            </Modal>
        </>

    )

}
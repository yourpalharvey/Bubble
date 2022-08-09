import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import {Button} from '../../objects/button';
import {Shadow} from '../../objects/shadow';


export const TestModal = (props) => {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Shadow>
                    <Button text="Close" colour={false} onClick={props.handleClose} />
                </Shadow>
                <Shadow>
                    <Button text="Save Changes" colour={true} onClick={props.handleClose}/>
                </Shadow>
            </Modal.Footer>
            </Modal>
        </>

    )

}
import Modal from 'react-bootstrap/Modal';

import {Button} from '../../objects/button';
import {Shadow} from '../../objects/shadow';


export const LogInModal = (props) => {

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>This is where the inputs will go!</Modal.Body>
            <Modal.Footer>
                <Shadow>
                    <Button text="Log in" colourWide={true} onClick={props.handleClose} />
                </Shadow>
            </Modal.Footer>
            </Modal>
        </>

    )

}
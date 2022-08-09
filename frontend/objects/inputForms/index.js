import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'next/image';
import React, { useState } from 'react';

export const InputForms = (props) => {

    return (
        <Form>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="" />
            </Form.Group>
        
            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type={props.passwordShown ? "text" : "password"} placeholder="" />
                <InputGroup.Text>
                    <Image src="/passwordView.png" alt="" height="15px" width="20px" onClick={props.togglePassword} />
                </InputGroup.Text>
            </InputGroup>
        
        </Form>
    )
}
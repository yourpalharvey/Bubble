import styles from './Footer.module.css';
import { BrowserView, MobileOnlyView, MobileView } from 'react-device-detect';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../objects/button';
import { Shadow } from '../../objects/shadow';

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const Footer = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let footerImageInfo;
    let footerTitleText;
    let footerMessageText;
    let footerButtonInfo;
    
    // If user is not logged in
    if (props.loggedIn) {
        footerImageInfo = <Image src="/footerLoggedInPic.png" alt="" height="70px" width="88px" />;
        footerTitleText = <h2 className={styles.footerTitle}>Watch, Stream, Enjoy!</h2>;
        footerMessageText = <p className={styles.footerMessage}>Explore awesome events, create a new bubble, or join someone else’s.</p>;
        footerButtonInfo =
            <Link href="/start-streaming">
                <div>
                    <Shadow>
                        <Button text="Go Live!" colour={false} />
                    </Shadow>
                </div>
            </Link>;
    } else {
        footerImageInfo = <Image src="/footerSignUpPic.png" alt="" height="75px" width="55px" />;
        footerTitleText = <h2 className={styles.footerTitle}>Welcome to Bubble!</h2>;
        footerMessageText = <p className={styles.footerMessage}>Start watching unmissable events and create bubbles for others to join you.</p>;
        footerButtonInfo =
                <div>
                    <Shadow>
                        <Button text="Log in" colour={false} onClick={handleShow} />
                    </Shadow>
                </div>
    }

    return (
        <>
            <div>
                <BrowserView>
                    <div className={styles.footerSpacer}></div>
                    <footer className={styles.footerBox}>
                        <div className={styles.footerContainer}>
                            {footerImageInfo}
                            {footerTitleText}
                            {footerMessageText}
                            <div className={styles.footerBtnContainer}>
                                {footerButtonInfo}
                            </div>
                        </div>
                    </footer>
                </BrowserView>
            </div>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Shadow>
                    <Button text="Close" colour={false} onClick={handleClose} />
                </Shadow>
                <Shadow>
                    <Button text="Save Changes" colour={true} onClick={handleClose}/>
                </Shadow>
            </Modal.Footer>
            </Modal>
        </>
    )
};
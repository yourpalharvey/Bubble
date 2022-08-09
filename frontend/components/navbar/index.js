import styles from './Navbar.module.css'
import { BrowserView, MobileOnlyView, MobileView } from 'react-device-detect';
import Image from 'next/image';
import Link from 'next/link';

import {TextInput} from '../../objects/textInput';
import {Button} from '../../objects/button';
import {Shadow} from '../../objects/shadow';
import SettingsIcon from '../../objects/settingsIcon';

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { TestModal } from '../testModal';


export const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true); // ? jfksd : jfkdsjf
    const handleClose = () => setShow(false);

    return (
        <>
            <BrowserView>
                <nav className={styles.browserContainer}>
                    <Link href="/">
                        <div className={styles.browserLHSContainer}>
                            <Image
                                src="/logo.png" 
                                alt="logo"
                                height="50%"
                                width="50%"
                            />
                        </div>
                    </Link>

                    <Link href="/explore">
                        <div className={styles.browserLHSContainer}>
                            explore
                        </div>
                    </Link>
                    
                    <div className={styles.browserSearchContainer}>
                        <TextInput search={true}/>
                    </div>

                    <div className={styles.browserRHSContainer}>
                        <Shadow>
                        <Button text="Log in" colour={true} onClick={handleShow} />
                        </Shadow>
                    </div>

                    <Link href="/settings">
                        <div className={styles.browserRHSContainer}>
                            <SettingsIcon />
                        </div>
                    </Link>
                </nav>

            </BrowserView>

            <TestModal show={show} handleShow={handleShow} handleClose={handleClose} />

        </>

    )
};


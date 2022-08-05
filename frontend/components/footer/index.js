import styles from './Footer.module.css';
import { BrowserView, MobileOnlyView, MobileView } from 'react-device-detect';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../objects/button';
import { Shadow } from '../../objects/shadow';

export const Footer = () => {

    return (
        <>
            <BrowserView>
                <footer className={styles.footerBox}>
                    <div className={styles.footerContainer}>
                        <Image 
                            src="/footerSignUpPic.png" 
                            alt="Sign up pic"
                            height="75px"
                            width="55px"
                        />
                        <h2 className={styles.footerTitle}>Welcome to Bubble!</h2>
                        <p className={styles.footerMessage}>Start watching unmissable events and create bubbles for others to join you.</p>
                        <div className={styles.footerBtnContainer}>
                            <Link href="/signup">
                                <div>
                                    <Shadow>
                                        <Button text="Sign Up" colour={false}/>
                                    </Shadow>
                                </div>
                            </Link>
                        </div>
                    </div>
                </footer>
            </BrowserView>
        </>
    )
};
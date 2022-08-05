import styles from './Footer.module.css';
import { BrowserView, MobileOnlyView, MobileView } from 'react-device-detect';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../objects/button';
import { Shadow } from '../../objects/shadow';

export const Footer = (props) => {

    if (props.notLoggedIn) {
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
    } else {
        return (
            <>
                <BrowserView>
                    <footer className={styles.footerBox}>
                        <div className={styles.footerContainer}>
                            <Image 
                                src="/footerLoggedInPic.png" 
                                alt="Sign up pic"
                                height="70px"
                                width="88px"
                            />
                            <h2 className={styles.footerTitle}>Watch, Stream, Enjoy!</h2>
                            <p className={styles.footerMessage}>Explore awesome events, create a new bubble, or join someone else’s.</p>
                            
                            <div className={styles.footerBtnContainer}>
                                <div>
                                <Link href="/start-streaming">
                                    <div>
                                        <Shadow>
                                            <Button text="Go Live!" colour={false}/>
                                        </Shadow>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </footer>
                </BrowserView>
            </>
        )
    }
    
};
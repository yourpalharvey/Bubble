import styles from './Footer.module.css';
import { BrowserView, MobileOnlyView, MobileView } from 'react-device-detect';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../../objects/button';
import { Shadow } from '../../objects/shadow';

export const Footer = (props) => {
    let footerImageInfo;
    let footerTitleText;
    let footerMessageText;
    let footerButtonInfo;
    
    // If user is not logged in
    if (props.LoggedIn) {
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
            <Link href="/signup">
                <div>
                    <Shadow>
                        <Button text="Sign Up" colour={false} />
                    </Shadow>
                </div>
            </Link>;
    }

    return (
        <div>
            <BrowserView>
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
    )
};
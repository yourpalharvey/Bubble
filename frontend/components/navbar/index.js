import styles from './Navbar.module.css'
import { BrowserView, MobileOnlyView, MobileView } from 'react-device-detect';
import Image from 'next/image';
import Link from 'next/link';

import {TextInput} from '../../objects/textInput';
import {Button} from '../../objects/button';
import {Shadow} from '../../objects/shadow';
import SettingsIcon from '../../objects/settingsIcon';

export const Navbar = () => {

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

                    <Link href="/login">
                        <div className={styles.browserRHSContainer}>
                            <Shadow>
                                <Button text="Log In" colour={true}/>
                            </Shadow>
                        </div>
                    </Link>

                    <Link href="/signup">
                        <div className={styles.browserRHSContainer}>
                            <Shadow>
                                <Button text="Sign Up" colour={false}/>
                            </Shadow>
                        </div>
                    </Link>

                    <Link href="/settings">
                        <div className={styles.browserRHSContainer}>
                            <SettingsIcon />
                        </div>
                    </Link>
                </nav>

            </BrowserView>

        </>

    )
};


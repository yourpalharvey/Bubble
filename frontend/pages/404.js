import Image from 'next/image';
import Link from 'next/link';
import messyPic from '../public/messy.png'
import { Background } from '../components/background'
import {Button} from '../objects/button';
import {Shadow} from '../objects/shadow';
import styles from '../styles/404.module.css'

const fourOhFour = () => {

    return (
        <div>
            <Background>
                <div className={styles.container}>
                    <div className={styles.image}>
                    <Image
                        src={messyPic}
                        alt=""
                    />
                    </div>
                    <h1 className={styles.title}>404 - Page not found</h1>
                    <p className={styles.message}>
                        Sorry, but the page you are looking for
                        might have been removed, had it’s name changed or is tempory unavalible.
                    </p>
                    <Link href="/">
                        <div className={styles.browserRHSContainer}>
                            <Shadow>
                                <Button text="Go to home page" colourWide={true} />
                            </Shadow>
                        </div>
                    </Link>
                </div>
            </Background>
        </div>
    )
}

export default fourOhFour;
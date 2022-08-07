import Image from 'next/image';
import Link from 'next/link';
import {Navbar} from '../components/navbar';
import Logo from '../objects/logo.svg';
import styles from '../styles/404.module.css';

const fourOhFour = () => {

    return (
        <>
            <Navbar />
            <div style={{width: '100vw', height: '10vh'}}></div>
            <div className={styles.container}>
                <Logo height={400} width={400}/>
                <div>
                    <h1>404</h1>
                    <h3>Sorry, this page doesnt exist or has moved</h3>
                    <Link href="/">Click here to go home</Link>
                </div>
            </div>
        </>
    )
}

export default fourOhFour;
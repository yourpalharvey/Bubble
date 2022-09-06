import Link from "next/link";
import Image from "next/image";
import styles from "./streamBubble.module.css";
import { BubbleBtn } from "../../objects/bubbleBtn";


// Current Video Bubble

export const CurrentVideoBubble = (props) => {

    return (
        <Link href={`/${props.url}`}>
            <div className={styles.currentVideoBubbleContainer}>

                <div className={styles.imageContainer}>
                <Image
                    src={props.image}
                    alt={`picture of ${props.text}`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    style={{
                        overflow: 'hidden',
                    }}
                />
                </div>

                <div className={styles.currentVideoText}>
                    <h3 className={styles.currentVideoHeading}>
                        {props.text}
                    </h3>
                    <p className={styles.currentVideoUserName}>
                        {props.username}
                    </p>
                </div>
                {/* <div className={styles.viewsButton}>
                    <BubbleBtn openBtn/>
                </div> */}
            </div>
        </Link>
    );

} 

// Bubble for similar Events
export const SameEventVideoBubble = (props) => {

    return (
        <Link href={`/${props.url}`}>
            <div className={styles.sameEventBubbleContainer}>
                <div className={styles.sameEventVideoText}>
                    <h3 className={styles.sameEventBubbleHeading}>
                        {props.heading}
                    </h3>
                    <p className={styles.sameEventInfo}>
                        {props.streamScore}
                    </p>
                </div>

                
                <Image
                    src={props.image}
                    alt={`picture of ${props.text}`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
                {/* <div className={styles.bubbleTags}>
                    <BubbleBtn openBtn/>
                </div> */}
            </div>
        </Link>
    );

} 
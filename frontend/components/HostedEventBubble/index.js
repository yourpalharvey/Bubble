import Link from "next/link";
import Image from "next/image";
import styles from "./hostedBubble.module.css";
import { LiveNowPill } from "../../objects/liveNowPill";
import { BubbleBtn } from "../../objects/bubbleBtn";

// Full Grid Bubble

export const FullBubble = (props) => {


    return (
            <div className={styles.fullBubbleContainer}>
                <div className={styles.fullText}>
                    <h3 className={styles.fullHeading}>
                        {props.text}
                    </h3>
                    <div className={styles.fullPText}>
                    <p className={styles.fullVenue}>
                        {props.venue}
                    </p>
                    </div>
                    <div className={styles.fullDate}>
                    <p className={styles.fullEventDate}>
                        {props.date}
                    </p>
                    </div>
                    <div className={styles.fullTime}>
                    <p className={styles.fullEventTime}>
                        {props.time}
                    </p>
                    </div>
                    <div className={styles.liveButton}>
                        <LiveNowPill/>
                    </div>
                </div>

                <Image
                    src={props.image}
                    alt={`picture of ${props.text}`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="right"
                    />
                <Link href="/">
                    <div className={styles.closeBtn}>
                        <BubbleBtn closeBtn={true}/>
                    </div>
            </Link>
            
                    
                
            </div>
    )
}

// Mini wide Grids

export const MiniWideBubble = (props) => {
    
    return (
        <Link href={`/${props.url}`}>
            <div className={styles.miniWideContainer}>

                <div className={styles.miniWideImage}>
                    <Image
                        src={props.image}
                        alt={`picture of ${props.text}`}
                        layout="fill"
                        // objectFit="fill"
                        // objectPosition="right"
                    />
                </div>

                <div className={styles.miniWideText}>
                    <h3 className={styles.miniWideHeading}>
                        {props.eventName}
                    </h3>
                    <div className={styles.miniWideUser}>
                    <p className={styles.miniWideUserName}>
                        {props.userName}
                    </p>
                    </div>
                </div>
            </div>
                
        </Link>
    )
}
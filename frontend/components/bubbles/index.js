import Link from "next/link";
import Image from "next/image";
import styles from "./bubble.module.css";
import liveButtonFunc from "../background/buttons";



// square bubble
export const SquareBubble = (props) => {


    return (
        <Link href={`/${props.url}`}>
            <div className={styles.squareBubbleContainer}>
                <div className={styles.squareText}>
                    <h3 className={styles.squareHeading}>
                        {props.text}
                    </h3>
                    <p className={styles.squareDate}>
                        {props.date}
                    </p>
                </div>

                
                <Image
                    src={props.image}
                    alt={`picture of ${props.text}`}
                    layout="fill"
                />
            </div>
        </Link>
    )
}

// Wide bubble 
export const WideBubble = (props) => {

    

    return (
        <Link href={`/${props.url}`}>
            <div className={styles.wideBubbleContainer}>
                <div className={styles.wideText}>
                    <h3 className={styles.squareHeading}>
                        {props.text}
                    </h3>
                </div>

                
                <Image
                    src={props.image}
                    alt={`picture of ${props.text}`}
                    layout="fill"
                />
            </div>
        </Link>
    )
}

// tall bubble 
export const TallBubble = (props) => {

    

    return (
        <Link href={`/${props.url}`}>
            <div className={styles.tallBubbleContainer}>
                <div className={styles.squareText}>
                    <h3 className={styles.squareHeading}>
                        {props.text}
                    </h3>
                </div>

                
                <Image
                    src={props.image}
                    alt={`picture of ${props.text}`}
                    layout="fill"
                />
            </div>
        </Link>
    )
}

// Full Grid Bubble

export const FullBubble = (props) => {


    return (
        <Link href={`/${props.url}`}>
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
                    <liveButtonFunc></liveButtonFunc>
                </div>

                <Image
                    src={props.image}
                    alt={`picture of ${props.text}`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="right"
                />
            </div>
        </Link>

)
}

// Mini wide Grids

export const miniWideBubble = (props) => {
    return (
        <Link href={`/${props.url}`}>
            <div className={styles.miniWideContainer}>
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

                <Image
                    src={props.image}
                    alt={`picture of ${props.text}`}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="right"
                />
            </div>
                
        </Link>
    )
}
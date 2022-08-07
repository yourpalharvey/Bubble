import Link from "next/link";
import Image from "next/image";
import styles from "./bubble.module.css";


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
                    <p className={styles.fullDate}>
                        {props.date}
                    </p>
                    <p className={styles.fullTime}>
                        {props.time}
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
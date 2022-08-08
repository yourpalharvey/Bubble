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
                    objectFit="contain"
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
                    objectFit="cover"
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
                    objectFit="contain"
                />
            </div>
        </Link>
    )
}
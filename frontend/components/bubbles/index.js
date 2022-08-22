import Link from "next/link";
import Image from "next/image";
import styles from "./bubble.module.css";
import { BubbleBtn  } from "../../objects/bubbleBtn";
import { Background } from "../background";

// square bubble used for hosted events
export const SquareBubble = (props) => {
  return (
    <Link href={`/${props.url}`}>
      <div
        className={styles.squareBubbleContainer}
        style={{ backgroundColor: props.colour }}
      >
        <div className={styles.squareText}>
          <h3 className={styles.squareHeading}>{props.text}</h3>
          <p className={styles.squareDate}>{props.date}</p>
        </div>

        <Image
          src={props.image}
          alt={`picture of ${props.text}`}
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.openBubbleBtn}>
          <BubbleBtn openBtn />
        </div>
      </div>
    </Link>
  );
};

// Wide bubble used for streams
export const WideBubble = (props) => {
  return (
    <Link href={`/${props.url}`}>
      <div
        className={styles.wideBubbleContainer}
        style={{ backgroundColor: props.colour }}
      >
        <div className={styles.wideText}>
          <h3 className={styles.squareHeading}>{props.text}</h3>
        </div>

        <Image
          src={props.image}
          alt={`picture of ${props.text}`}
          layout="fill"
          objectFit="cover"
          style={{
            borderRadius: "10px",
            overflow: "hidden",
          }}
        />
        <div className={styles.openBubbleBtn}>
          <BubbleBtn openBtn />
        </div>
      </div>
    </Link>
  );
};

// tall bubble used for categories
export const TallBubble = (props) => {
  return (
    <Link href={`/${props.url}`}>
      <div
        className={styles.tallBubbleContainer}
        style={{ backgroundColor: props.colour }}
      >
        <div className={styles.squareText}>
          <h3 className={styles.squareHeading}>{props.text}</h3>
        </div>

        <Image
          src={props.image}
          alt={`picture of ${props.text}`}
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.openBubbleBtn}>
          <BubbleBtn openBtn />
        </div>
      </div>
    </Link>
  );
};

// Category - used for main categories in explore page 
export const CategoryBubble = (props) => {
  return (
    <div
      className={styles.categoryBubbleContainer}
      style={{ backgroundColor: props.colour }}
    >
      <div className={styles.squareText}>
        <h3 className={styles.squareHeading}>{props.text}</h3>
      </div>
      <div className={styles.openBubbleBtn}>
        <BubbleBtn openBtn />
      </div>
    </div>
  );
};

// mid bubble - used for bubbles
export const MidBubble = (props) => {
  return (
    <Link href={`/${props.url}`}>
      <div
        className={styles.midBubbleContainer}
        style={{ backgroundColor: props.colour }}
      >
        <div className={styles.midBubbleImageContainer}>
          <Image
            src={props.image}
            alt={`picture of ${props.text}`}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className={styles.midText}>
          <h3 className={styles.squareHeading}>{props.text}</h3>
        </div>

        <div className={styles.openBubbleBtn}>
          <BubbleBtn openBtn />
        </div>
      </div>
    </Link>
  );
};
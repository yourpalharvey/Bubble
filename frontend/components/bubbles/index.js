import Link from "next/link";
import Image from "next/image";
import styles from "./bubble.module.css";
import { BubbleBtn  } from "../../objects/bubbleBtn";
import { Background } from "../background";

// square bubble
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

// Wide bubble
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
        />
        <div className={styles.openBubbleBtn}>
          <BubbleBtn openBtn />
        </div>
      </div>
    </Link>
  );
};

// tall bubble
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
          objectFit="contain"
        />
        <div className={styles.openBubbleBtn}>
          <BubbleBtn openBtn />
        </div>
      </div>
    </Link>
  );
};

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
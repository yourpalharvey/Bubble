import Link from "next/link";
import Image from "next/image";
import styles from "./bubble.module.css";
import { BubbleBtn  } from "../../objects/bubbleBtn";
import { Background } from "../background";
import Card from "react-bootstrap/Card";


// square bubble used for hosted events
export const SquareBubble = (props) => {
  return (
    <Link href={`/${props.url}`}>
      <div
        className={styles.squareBubbleContainer}
        style={{ backgroundColor: props.colour }}
      >
        <div className={styles.squareText}>
          <h4 className={styles.squareHeading}>{props.text}</h4>
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
          <h4 className={styles.squareHeading}>{props.text}</h4>
        </div>
        <div className={styles.wideSubText}>
          <p className={styles.squareText}>{props.subText}</p>
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
          <h4 className={styles.squareHeading}>{props.text}</h4>
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
    <Link href={`/${props.url}`}>
      <div
        className={styles.categoryBubbleContainer}
        style={{ backgroundColor: props.colour }}
      >
        <div className={styles.squareText}>
          <h4 className={styles.squareHeading}>{props.text}</h4>
        </div>
        <div className={styles.openBubbleBtn}>
          <BubbleBtn openBtn />
        </div>
      </div>
    </Link>
  );
};

// Category - used for main categories in explore page
export const CategoryBubbleSelected = (props) => {
  return (
    <Link href={`/${props.url}`}>
      <div
        className={styles.categoryBubbleContainerSelected}
        style={{ backgroundColor: props.colour }}
      >
        <div className={styles.squareText}>
          <h4 className={styles.squareHeading}>{props.text}</h4>
        </div>
        <div className={styles.openBubbleBtn}>
          <BubbleBtn closeBtn />
        </div>
      </div>
    </Link>
  );
};

// mid bubble - used for bubbles
export const MidBubble = (props) => {
  return (
    <Link href={`/${props.url}`}>
      <Card
        style={{ width: "18rem", backgroundColor: props.colour }}
        className={styles.midBubbleContainer}
      >
        <Card.Img variant="top" src={props.image} />
        <Card.Body className={styles.midText}>
          <Card.Title>{props.text}</Card.Title>
          <Card.Text>{props.streamCount}</Card.Text>
          <div>
            <label
              style={{ color: props.colour }}
              className={styles.midBubbleTags}
            >
              {props.tag1}
            </label>
            <label
              style={{ color: props.colour }}
              className={styles.midBubbleTags}
            >
              {props.tag2}
            </label>
            <label
              style={{ color: props.colour }}
              className={styles.midBubbleTags}
            >
              {props.tag3}
            </label>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};
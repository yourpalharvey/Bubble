import styles from "./bubbleCardImage.module.css";
import Image from "next/image";

export const BubbleCardImage = (props) => {
  return (
    <>
      <div className={styles.bubbleCardImageContainer}>
        <Image
          src={props.image}
          alt={`picture of ${props.text}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </>
  );
};

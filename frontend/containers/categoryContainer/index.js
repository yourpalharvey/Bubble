import styles from "./categoryContainer.module.css";
import { SeeMore } from "../../objects/seeMore";
import { ContainerHeader } from "../../objects/containerHeader";

export const CategoryContainer = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.cardContainer}>{props.children}</div>
      </div>
    </div>
  );
};

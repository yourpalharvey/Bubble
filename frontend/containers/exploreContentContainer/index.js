import styles from "./exploreContentContainer.module.css";
import { SeeMore } from "../../objects/seeMore";
import { ContainerHeader } from "../../objects/containerHeader";

export const ExploreContentContainer = (props) => {
  if (props.topRow) {
    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          
          <ContainerHeader title={props.title} />

          <div className={styles.cardContainer}>
            {props.children}
          </div>

        </div>
      </div>
    );
  } else if (props.middleRow) {
    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.cardContainer}>{props.children}</div>
        </div>
      </div>
    );
  } else if (props.bottomRow) {
    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.cardContainer}>{props.children}</div>
          <SeeMore text={props.seeMore} />
        </div>
      </div>
    );
  }
};

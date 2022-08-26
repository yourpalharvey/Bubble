import styles from "./videoStreamContainer.module.css"
import {ContainerHeader} from "../../objects/containerHeader";

export const VideoStreamContainer = (props) => {
    
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

}
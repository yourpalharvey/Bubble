import styles from "./videoStreamContainer.module.css"
import {ContainerHeader} from "../../objects/containerHeader";

export const VideoStreamContainer = ({title, children}) => {
    
    return (
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          
          <ContainerHeader title={title} />

          <div className={styles.cardContainer}>
            {children}
          </div>

        </div>
      </div>
    );

}
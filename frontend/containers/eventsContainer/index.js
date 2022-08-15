import styles from "./hostedEventsContainer.module.css"
import {SeeMore} from "../../objects/seeMore";
import {ContainerHeader} from "../../objects/containerHeader";


export const HostedEventsContainer = (props) => {

    return (
        <div className={styles.container}>
            

            <div className={styles.contentContainer}>

                <ContainerHeader title={props.title} />

            
                <div className={styles.cardContainer}>
                    {props.children}

                </div>  

            </div>
            
        </div>
    )
};

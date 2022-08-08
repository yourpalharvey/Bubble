import styles from "./homeTopContainer.module.css"
import {SeeMore} from "../../objects/seeMore";
import {ContainerHeader} from "../../objects/containerHeader";


export const HomeTopContainer = (props) => {

    return (
        <div className={styles.container}>
            

            <div className={styles.contentContainer}>

                <ContainerHeader title={props.title} />

            
                <div className={styles.cardContainer}>
                    {props.children}

                </div>  

                <SeeMore text={props.seeMore} />

            </div>
            
        </div>
    )
};
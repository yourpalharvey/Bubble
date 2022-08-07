import styles from "./shadow.module.css";

export const Shadow = ({children}) => {

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
};
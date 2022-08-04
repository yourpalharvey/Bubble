import styles from "./background.module.css";

export const Background = ({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.blob1}></div>
            <div className={styles.blob2}></div>
            <div className={styles.blob3}></div>
            <div className={styles.content}>
                {children}
            </div>

        </div>
    )
};


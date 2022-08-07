import styles from "./containerHeader.module.css"

export const ContainerHeader = (props) => {
    return (
        <div className={styles.textContainer}>
            <h2 className={styles.text}>{props.title}</h2>
        </div>
    )
};
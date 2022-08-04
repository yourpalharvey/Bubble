import styles from './seeMore.module.css'

export const SeeMore = (props) => {
    return (
        <div className={styles.seeMoreContainer}>
            <div className={styles.line}></div>
                {props.text}
            <div className={styles.line}></div>

        </div>
    )
};
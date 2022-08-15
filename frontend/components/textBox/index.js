import styles from './text.module.css';

export const Text = ({text, align}) => {
    return (
        <div className={styles.textContainer}>
            <p>
                {text}
            </p>
        </div>
    )
}
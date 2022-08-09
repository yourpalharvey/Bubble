import styles from "./button.module.css";

export const Button = (props) => {


    
    if (props.colour)
    {
        return (
            <button
                className={styles.containerColour}
                onClick={props.onClick}
                type={props.type}
            >
                <div className={styles.containerText}>{props.text}</div>
                
            </button>
        )
    }
    else if (props.wide)
    {
        return (
            <button
                className={styles.containerWide}
                onClick={props.onClick}
                type={props.type}
            >
                <div className={styles.containerText}>{props.text}</div>
            </button>
        )
    } else if (props.colourWide) {
        return (
            <button
                className={styles.containerColourWide}
                onClick={props.onClick}
                type={props.type}
            >
                <div className={styles.containerTextWide}>{props.text}</div>
            </button>
        )
    }
    else
    {
        return (
            <button
                className={styles.container}
                onClick={props.onClick}
                type={props.type}
            >
                <div className={styles.containerText}>{props.text}</div>
            </button>
        )
    }
};
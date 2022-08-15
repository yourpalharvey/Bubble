import styles from "./button.module.css";

export const Button = (props) => {


    
    if (props.colour)
    {
        return (
            <button
                className={styles.containerColour}
                onClick={props.onClick}
                type={props.type}
                disbaled={props.disabled}
            >
                {props.text}
            </button>
        )
    }
    else if (props.wide)
    {
        return (
            <button
                className={styles.containerWide}
                onClick={() => props.onClick()}
                type={props.type}
                disabled={props.disabled}
            >
                {props.text}
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
                disabled={props.disabled}
            >
                {props.text}
            </button>
        )
    }
};
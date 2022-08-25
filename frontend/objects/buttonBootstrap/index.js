import styles from "./buttonBootstrap.module.css";
import Button from "react-bootstrap/Button";

export const ButtonBootstrap = (props) => {
  if (props.primarySmall) {
    return (
      <Button
        variant="light"
        size="sm"
        className={styles.primarySmallBtn}
        onClick={props.onClick}
        type={props.type}
        disabled={false || props.disabled}
      >
        <div className={styles.smallButtonText}>{props.text}</div>
      </Button>
    );
  } else if (props.secondarySmall) {
    return (
      <Button
        variant="light"
        size="sm"
        className={styles.secondarySmallBtn}
        onClick={props.onClick}
        type={props.type}
        disabled={false || props.disabled}
      >
        <div className={styles.smallButtonText}>{props.text}</div>
      </Button>
    );
  } else if (props.primaryLarge) {
    return (
      <Button
        variant="light"
        size="lg"
        className={styles.primaryLargeBtn}
        onClick={props.onClick}
        type={props.type}
        disabled={false || props.disabled}
      >
        <div className={styles.largeButtonText}>{props.text}</div>
      </Button>
    );
  } else if (props.secondaryLarge) {
    return (
      <Button
        variant="light"
        size="lg"
        className={styles.secondaryLargeBtn}
        onClick={props.onClick}
        type={props.type}
        disabled={false || props.disabled}
      >
        <div className={styles.largeButtonText}>{props.text}</div>
      </Button>
    );
  } else if (props.primaryWide) {
    return (
      <Button
        variant="light"
        size="lg"
        className={styles.primaryWideBtn}
        onClick={props.onClick}
        type={props.type}
        disabled={false || props.disabled}
      >
        <div className={styles.wideButtonText}>{props.text}</div>
      </Button>
    );
  } else if (props.secondaryWide) {
    return (
      <Button
        variant="light"
        size="lg"
        className={styles.secondaryWideBtn}
        onClick={props.onClick}
        type={props.type}
        disabled={false || props.disabled}
      >
        <div className={styles.wideButtonText}>{props.text}</div>
      </Button>
    );
  }
};

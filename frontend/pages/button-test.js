import styles from "../styles/Button-Test.module.css";
import { Background } from "../components/background";
import { ButtonBootstrap } from "../objects/buttonBootstrap";
import { MidBubble } from "../components/bubbles";

const ButtonTest = () => {
  return (
    <>
      <Background>
        <div className={styles.testButtons}>
          <ButtonBootstrap
            primarySmall={true}
            text="primarySmall"
          ></ButtonBootstrap>
        </div>
        <div className={styles.testButtons}>
          <ButtonBootstrap
            secondarySmall={true}
            text="secondarySmall"
          ></ButtonBootstrap>
        </div>
        <div className={styles.testButtons}>
          <ButtonBootstrap
            primaryLarge={true}
            text="primaryLarge"
          ></ButtonBootstrap>
        </div>
        <div className={styles.testButtons}>
          <ButtonBootstrap
            secondaryLarge={true}
            text="secondaryLarge"
          ></ButtonBootstrap>
        </div>
        <div className={styles.testButtons}>
          <ButtonBootstrap
            primaryWide={true}
            text="primaryWide"
          ></ButtonBootstrap>
        </div>
        <div className={styles.testButtons}>
          <ButtonBootstrap
            secondaryWide={true}
            text="secondaryWide"
          ></ButtonBootstrap>
        </div>
        <div className="d-grid gap-2">
          <ButtonBootstrap
            primarySmall={true}
            text="primarySmall - Block"
          ></ButtonBootstrap>
          <ButtonBootstrap
            secondarySmall={true}
            text="secondarySmall - Block"
          ></ButtonBootstrap>
          <ButtonBootstrap
            primaryLarge={true}
            text="primaryLarge - Block"
          ></ButtonBootstrap>
          <ButtonBootstrap
            primaryWide={true}
            text="primaryWide - Block"
          ></ButtonBootstrap>
        </div>
      </Background>
    </>
  );
};

export default ButtonTest;
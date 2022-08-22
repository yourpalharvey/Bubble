import { MobileView } from "react-device-detect";
import { ProgressBar } from "../../components/progressBar";
import { Text } from "../../components/textBox";
import { TextInput } from "../../objects/textInput";
import styles from "./createbubble.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";

export const CreateBubble1 = ({ setProgress, progress }) => {
  const [bubble, setBubble] = useState("");
  const [category, setCategory] = useState("");
  const [deactivate, setDeactivate] = useState(true);

  const clearBubble = () => {
    setBubble("");
  };
  const clearCategory = () => {
    setCategory("");
  };

  // handle submit
  // active button if data in
  const handleActiveButton = () => {
    if ((bubble != "") & (category != "")) {
      setDeactivate(false);
      setProgress(45);
    } else if (bubble != "") {
      setProgress(25);
    } else {
      setDeactivate(true);
      setProgress(5);
    }
  };

  const handleData = () => {
    console.log(`title:\t\t\t\t${bubble}\ncategory:\t${category}`);

    // send data to api
    const id = 213;

    // router.push to next page
    setProgress(65);
  };

  // run handleActivateButton
  useEffect(() => {
    handleActiveButton();
  }, [bubble, category]);

  return (
    <div className={styles.container}>
      <ProgressBar progress={progress} />

      <Text text="Choose a bubble name and category so others know what it is youre streaming" />

      <TextInput
        value={bubble}
        onChange={setBubble}
        clear={clearBubble}
        label={true}
        wide={true}
        name="Bubble Name"
        placeholder="Bubble Name"
      />
      <TextInput
        value={category}
        onChange={setCategory}
        clear={clearCategory}
        label={true}
        wide={true}
        name="Category"
        placeholder="Category"
      />
      <div className={styles.createBubbleButton}>
        <ButtonBootstrap primaryWide={true} text="Next" onClick={handleData} />
      </div>
    </div>
  );
};

export const CreateBubble2 = ({ setProgress, progress }) => {
  const router = useRouter();

  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");
  const [tag3, setTag3] = useState("");

  const clearTag1 = () => {
    setTag1("");
  };
  const clearTag2 = () => {
    setTag2("");
  };
  const clearTag3 = () => {
    setTag3("");
  };

  const handleData = () => {
    console.log(tag1 + tag2 + tag3);

    // get location at this point

    // send data to api
    const id = 213;

    // router.push to next page
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <ProgressBar progress={progress} />

      <Text text="Choose tags to make your bubble easy to find" />

      <TextInput
        value={tag1}
        onChange={setTag1}
        clear={clearTag1}
        label={true}
        wide={true}
        name="Tag 1"
        placeholder="Tag 1"
      />
      <TextInput
        value={tag2}
        onChange={setTag2}
        clear={clearTag2}
        label={true}
        wide={true}
        name="Tag 2"
        placeholder="Tag 2"
      />
      <TextInput
        value={tag3}
        onChange={setTag3}
        clear={clearTag3}
        label={true}
        wide={true}
        name="Tag 3"
        placeholder="Tag 3"
      />
      <div className={styles.createBubbleButton}>
        <ButtonBootstrap
          primaryWide={true}
          text="Create Bubble"
          onClick={handleData}
        />
      </div>
    </div>
  );
};

import { MobileView } from "react-device-detect";
import { ProgressBar } from "../../components/progressBar";
import { Text } from "../../components/textBox";
import { TextInput } from "../../objects/textInput";
import styles from "./createbubble.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { createBubble } from "../../logic/bubble";
import { Select } from "../../components/select";
import { getRequest } from "../../logic/requests";
import { URLBASE } from "../../logic";

export const CreateBubble1 = ({ setProgress, progress, setBubble }) => {
  const [bubble, setBubble] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [categories, setCategories] = useState();
  const [deactivate, setDeactivate] = useState(true);

  const clearBubble = () => {
    setBubble("");
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

    // send data to api
    let data = {
      "title": bubble,
      "category": currentCategory // fake category ID for now
    }

    // send to backend, return id

    // let id = createBubble(data);

    // router.push to next page
    setProgress(65);
    // setBubble(id);
  };

  // run handleActivateButton
  useEffect(() => {
    handleActiveButton();
  }, [bubble, category]);

  // get categories from database
  useEffect(() => {
    const getData = async () => {
      response = await getRequest(`${URLBASE}/categories`);
      return resposne.json();
    }

    const mapDataToOptions = async () => {
      let data = await getData();
      let output = [];
      data.map(
        d => {
          output.push({"id": d.id, "name": d.title})
        }
      )
      return output;
    }

    setCategories(mapDataToOptions);
  }, [])

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
      <Select 
        label="Category"
        options={categories}
        onChange={e => setCurrentCategory(e.target.value)}
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

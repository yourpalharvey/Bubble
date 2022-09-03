import { MobileView } from "react-device-detect";
import { ProgressBar } from "../../components/progressBar";
import { Text } from "../../components/textBox";
import { TextInput } from "../../objects/textInput";
import styles from "./createbubble.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ButtonBootstrap } from "../../objects/buttonBootstrap";
import { addBubbleTag, createBubble } from "../../logic/bubble";
import { Select } from "../../components/select";

export const CreateBubble1 = ({ setProgress, progress, setBubbleId, data }) => {
  const [bubble, setBubble] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [deactivate, setDeactivate] = useState(true);

  const clearBubble = () => {
    setBubble("");
  };
  

  // handle submit
  // active button if data in
  const handleActiveButton = () => {
    if ((bubble != "") & (currentCategory != "")) {
      setDeactivate(false);
      setProgress(45);
    } else if (bubble != "") {
      setProgress(25);
    } else {
      setDeactivate(true);
      setProgress(5);
    }
  };

  const handleData = async () => {

    // send data to api
    let data = {
      "title": bubble,
      "category_id": currentCategory, // fake category ID for now
      "image": ""
    }

    // send to backend, return id

    let id = await createBubble(data);

    // router.push to next page
    setProgress(65);
    setBubbleId(id);
  };

  // run handleActivateButton
  useEffect(() => {
    handleActiveButton();
  }, [bubble, currentCategory]);

  // map category data to a form that the select component can read
  const mapDataToOptions = () => {
    let output = [];
    data.map(
      d => {
        output.push({"id": d.id, "name": d.title});
      }
    )
    return output;
  }

  // get categories from database
  useEffect(() => {
    // set category data
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
      <div className={styles.createBubbleButton}>
        <ButtonBootstrap primaryWide={true} text="Next" onClick={handleData} />
      </div>
    </div>
  );
};







export const CreateBubble2 = ({ setProgress, progress, data, bubbleId }) => {
  const router = useRouter();

  const [tag1, setTag1] = useState();
  const [tag2, setTag2] = useState();
  const [tag3, setTag3] = useState();
  const [options, setOptions] = useState([]);
  const [bubble, setBubble] = useState(bubbleId);


  const handleData = async () => {

    // make sure there arent repeats
    if (tag1 != tag2 && tag1 != tag3)
    {
      // if tag1 is unique, add it
      const data1 = {
        "bubble_id": bubbleId,
        "tag_id": tag1
      }
      console.log(data1);
      const res1 = await addBubbleTag(data1);
      console.log(res1)
    }
    if (tag2 != tag3)
    {
      // if tag2 is unique from tag 3, add them
      const data2 = {
        "bubble_id": bubbleId,
        "tag_id": tag2
      }
      const res2 = await addBubbleTag(data2);
      console.log(res2)
      
      const data3 = {
        "bubble_id": bubbleId,
        "tag_id": tag3
      }
      const res3 = await addBubbleTag(data3);
      console.log(res3)
    }
    else
    {
      // if there are duplicates then add tag 3
      const data3 = {
        "bubble_id": bubbleId,
        "tag_id": tag3
      }
      const res3 = await addBubbleTag(data3);
      console.log(res3)
    }

    // router.push to next page
    router.push(`/start-streaming/stream/${bubbleId}`);
  };

  // map tag data to select readable options
  const mapDataToOptions = () => {
    let output = [];
    data.map(
      d => {
        output.push({"id": d.id, "name": d.title});
      }
    )
    return output;
  }

  useEffect(
    () => {
      setOptions(mapDataToOptions);
    },
    []
  )

  return (
    <div className={styles.container}>
      <ProgressBar progress={progress} />

      <Text text="Choose tags to make your bubble easy to find" />

      
      <Select 
        label="Tag 1"
        options={options}
        onChange={e => {setTag1(e.target.value)}}
      />
      <Select 
        label="Tag 2"
        options={options}
        onChange={e => {setTag2(e.target.value)}}
      />
      <Select 
        label="Tag 3"
        options={options}
        onChange={e => {setTag3(e.target.value)}}
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

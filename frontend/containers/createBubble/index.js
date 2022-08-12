import { MobileView } from "react-device-detect";
import {Button} from "../../objects/button";
import { ProgressBar } from "../../components/progressBar"
import { Text } from "../../components/textBox"
import { TextInput } from "../../objects/textInput";
import styles from "./createbubble.module.css";
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router'

export const CreateBubble1 = ({setProgress, progress}) => {

    const router = useRouter();

    const [bubble,setBubble] = useState("");
    const [category,setCategory] = useState("");
    const [deactivate, setDeactivate] = useState(true);

    const clearBubble = () => {
        setBubble("")
    }
    const clearCategory = () => {
        setCategory("")
    }

    // handle submit
    // active button if data in
    const handleActiveButton = () => {
        if ((bubble != "") & (category != ""))
        {
            setDeactivate(false)
            setProgress(45)
        }
        else if (bubble != "")
        {
            setProgress(25)
        }
        else
        {
            setDeactivate(true)
            setProgress(5)
        }
    }

    const handleData = () => {
        console.log(`title:\t\t\t\t${bubble}\ncategory:\t${category}`)

        // send data to api
        const id = 213;

        // router.push to next page
        setProgress(65);
    }

    // run handleActivateButton
    useEffect(
        () => {
            handleActiveButton()
        },
        [bubble, category]
    );


    return (
        <div className={styles.container}>
            <ProgressBar progress={progress} />

            <Text text="Choose a bubble name and category so others know what it is youre streaming" />

            <TextInput value={bubble} onChange={setBubble} clear={clearBubble} label={true} wide={true} name="Bubble Name" placeholder="Bubble Name"/>
            <TextInput value={category} onChange={setCategory} clear={clearCategory} label={true} wide={true} name="Category" placeholder="Category"/>

            <Button wide={true} text="Next" onClick={handleData} active={deactivate}/>
        </div>
    )
}

export const CreateBubble2 = ({setProgress, progress}) => {
    return (
        <div className={styles.container}>
            <ProgressBar progress={progress} />

            <Text text="Choose a bubble name and category so others know what it is youre streaming" />
        </div>
    )
}

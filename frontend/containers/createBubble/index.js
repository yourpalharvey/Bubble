import { MobileView } from "react-device-detect";
import { ProgressBar } from "../../components/progressBar"
import { Text } from "../../components/textBox"
import { TextInput } from "../../objects/textInput";
import styles from "./createbubble.module.css";
import {useState} from 'react';

export const CreateBubbble = () => {

    const [bubble,setBubble] = useState("");
    const [category,setCategory] = useState("");

    const clearBubble = () => {
        setBubble("")
    }
    const clearCategory = () => {
        setCategory("")
    }
    return (
        <div className={styles.container}>
            <ProgressBar progress='25' />

            <Text text="Choose a bubble name and category so others know what it is youre streaming" />

            <TextInput value={bubble} onChange={setBubble} clear={clearBubble} label={true} wide={true} name="Bubble Name" placeholder="Bubble Name"/>
            <TextInput value={category} onChange={setCategory} clear={} label={true} wide={true} name="Category" placeholder="Category"/>
        </div>
    )
}
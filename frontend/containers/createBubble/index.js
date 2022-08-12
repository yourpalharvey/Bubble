import { MobileView } from "react-device-detect";
import {Button} from "../../objects/button";
import { ProgressBar } from "../../components/progressBar"
import { Text } from "../../components/textBox"
import { TextInput } from "../../objects/textInput";
import styles from "./createbubble.module.css";
import {useState, useEffect} from 'react';
import { useRouter } from 'next/router'

export const CreateBubbble = () => {

    const router = useRouter();

    const [bubble,setBubble] = useState("");
    const [category,setCategory] = useState("");
    const [active, setActive] = useState(true);

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
            setActive(false)
        }
        else
        {
            setActive(true)
        }
    }

    const handleData = () => {
        console.log(`title:\t\t\t\t${bubble}\ncategory:\t${category}`)

        // send data to api
        const id = 213;

        // router.push to next page
        router.push(`/start-streaming/create-bubble/${id}`);
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
            <ProgressBar progress='25' />

            <Text text="Choose a bubble name and category so others know what it is youre streaming" />

            <TextInput value={bubble} onChange={setBubble} clear={clearBubble} label={true} wide={true} name="Bubble Name" placeholder="Bubble Name"/>
            <TextInput value={category} onChange={setCategory} clear={clearCategory} label={true} wide={true} name="Category" placeholder="Category"/>

            <Button wide={true} text="Next" onClick={handleData} active={active}/>
        </div>
    )
}
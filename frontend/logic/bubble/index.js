import { URLBASE } from "..";
import { getRequest, postRequest } from "../requests";

const createBubble = async (data) => {

    // send postRequest
    let response = await postRequest(`${URLBASE}/bubble`, data);

    if (response.hasOwnProperty("id"))
    {
        console.log(response);
        return response.id;
    }
    else
    {
        return "error";
    }
}

const addBubbleTag = async (data) => {
    // send postRequest
    let response = await postRequest(`${URLBASE}/bubble-tag`, data);

    if (response.hasOwnProperty("id"))
    {
        console.log(response);
        return response.id;
    }
    else
    {
        return "error";
    }
}


// get all bubble where the tag is x
const getBubblebyTagId = async (id) => {
    // get all bubble Ids
    let bubbleIds = await getRequest(`${URLBASE}/bubble-tag/tag/${id}`);

    // set a list
    let bubbleData = [];

    // loop through IDs and get the requisite bubble
    for (let i = 0; i < bubbleIds.length; i ++)
    {
        let bubble = await getRequest(`${URLBASE}/bubble/${bubbleIds[i]}`);
        bubbleData.push(bubble);
    }

    return bubbleData;
}
// get tag title
const getTagTitle = async (id) => {
    const title = await getRequest(`${URLBASE}/tags/${id}`);
    return title.title[0];
}

// get Bubble
const getBubbleTitle = async (id) => {
    const title = await getRequest(`${URLBASE}/bubble/${id}`)
    if (title.hasOwnProperty("title"))
    {
        return title.title;
    }
    else
    {
        return "Title error";
    };
}

// get bubble data
const getBubble = async (id) => {
    const res = await getRequest(`${URLBASE}/bubble/${id}`)
    if (res.hasOwnProperty("title"))
    {
        return res;
    }
    else
    {
        return "Title error";
    };
}

export {createBubble, addBubbleTag, getBubblebyTagId, getTagTitle, getBubbleTitle, getBubble};
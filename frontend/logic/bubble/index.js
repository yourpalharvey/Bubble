import { URLBASE } from "..";
import { postRequest } from "../requests";

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

export {createBubble};
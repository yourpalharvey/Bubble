import { postRequest } from "../requests";

const URLBASE = "http://localhost:8080";

const createBubble = async (data) => {

    // send postRequest
    let response = await postRequest(`${URLBASE}/bubble/create`, data);

    if (response.hasOwnProperty("id"))
    {
        return response.id;
    }
    else
    {
        return "error";
    }
}

export {createBubble};
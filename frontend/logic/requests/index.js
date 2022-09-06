const postRequest = async (url, data) => {

    // prepare request
    const response = await fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .catch(
        err => {
            console.error(err);
            return {
                "error": err
            }
        }
    )

    return await response.json();
}

const getRequest = async (url) => {

    // prepare request
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }

    })
    .catch(
        err => {
            console.error(err);
            return {
                "error": err
            }
        }
    )
    return response.json();
}

const deleteRequest = async (url) => {
    
    // prepare request
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .catch(
        err => {
            console.error(err);
            return {
                "error": err
            }
        }
    )
    return response;
}

module.exports = {postRequest, getRequest, deleteRequest};
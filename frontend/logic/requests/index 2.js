const postRequest = async (url, data) => {

    // prepare request
    const response = await fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(result => result.json())
    .then(data => {return data;})
    .catch(err => console.error(err))

    return response;
}

module.exports = {postRequest};
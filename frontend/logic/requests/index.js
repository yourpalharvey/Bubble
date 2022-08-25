const postRequest = async (url, data) => {

    // prepare request
    const response = await fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .catch(err => console.error(err))

    return response.json();
}

module.exports = {postRequest};
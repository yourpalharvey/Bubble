const handleLogin = (username, password) => {

    // send request and wait for return
    console.log(username);
    console.log(password);
    return username;
}

const handleSignup = (username, password, email) => {

    console.log(username);
    console.log(password);
    console.log(email);

    return username;
}

module.exports= {
    handleLogin,
    handleSignup
}
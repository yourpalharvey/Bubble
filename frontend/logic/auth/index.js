const handleLogin = (username, password) => {

    // send request and wait for return
    console.log(username);
    console.log(password);
    return username;
}

const handleSignup = (username, password, dateOfBirth, email) => {
  console.log(username);
  console.log(password);
  console.log(dateOfBirth);
  console.log(email);

  return username;
};

module.exports= {
    handleLogin,
    handleSignup
}
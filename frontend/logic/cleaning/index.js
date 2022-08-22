const cleanEmail = (email) => {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
const cleanText = (text) => {
    if (text === "")
    {
        return false;
    }
    return text
}

const cleanPassword = (pass) => {
    const password = cleanText(pass);
    const passwordPattern = /^(?=(.*[A-Z]){1,})(?=(.*[!@#$&*]){1,})(?=(.*[0-9]){1,})(?=(.*[a-z]){1,}).{8,}$/;
    return passwordPattern.test(password);
}
module.exports = {cleanEmail, cleanText, cleanPassword};
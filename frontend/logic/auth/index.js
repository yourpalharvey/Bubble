const { cleanText, cleanPassword, cleanEmail } = require("../cleaning");
const { postRequest } = require("../requests");

const URLBASE = "http://localhost:8080/";

// log in user
const handleLogin = async (username, password) => {
	// take args into json
	const data = {
		"username": username,
		"password": password
	};
	
	// send post request
	let response = await postRequest(`${URLBASE}users/signIn`, data);
	return response.token[0];
}

// sign up user
const handleSignup = (username, password, dateOfBirth, email) => {
	let usernameValid = checkUsername(username);
	let passwordValid = checkPasswordValidBool(password);
	let ageValid = checkAge(dateOfBirth);
	let emailValid = checkEmailValidBool(email);

	if (usernameValid && passwordValid && ageValid && emailValid)
	{
		let data = {
			username: username,
			password: password,
			age: dateOfBirth,
			email: email
		}
		let response = postRequest(`${URLBASE}users`, data);
		return response;
	}
	return false;
};

// check if username exists
const checkUsername = (username) => {
	if (username === "")
	{
		return null;
	}
	else if (cleanText(username) != false)
	{
		let requestJson = {"username": username};
		return postRequest(`${URLBASE}users/check-username`, requestJson);
	}
	else
	{
		return false;
	}		
}


// check that age is old enough		N.B. date is in form yyyy-mm-dd
const checkAge = (birthdate, age) => {
	try {
		if (birthdate === "")
		{
			return null;
		};
		
		const birthdateClean = birthdate.split("-");

		const date = {
			day: parseInt(birthdateClean[2]),
			month: parseInt(birthdateClean[1]),
			year: parseInt(birthdateClean[0])
		};

		if (date.year < 1900)
		{
			return false;
		};

		// get current date
		const today = new Date();
		const day = today.getDate();
		const month = today.getMonth();
		const year = today.getFullYear();

		// get difference between today and date given
		var yearDelta = year - date.year;
		const monthDelta = month - date.month;
		const dayDelta = day - date.day;
		if (monthDelta <  0|| (monthDelta === 0 && dayDelta < 0))
		{
			yearDelta--;
		}

		
		return yearDelta >= age;


	} catch (err) {
		return err
	}
}

const checkPasswordValidBool = (password) => {
	
	return password === "" ? null : cleanPassword(password);
}

const checkEmailValidBool = (email) => {
	return email === "" ? null : cleanEmail(email);
}

module.exports= {
    handleLogin,
    handleSignup,
	checkAge,
	checkUsername,
	checkPasswordValidBool,
	checkEmailValidBool
}
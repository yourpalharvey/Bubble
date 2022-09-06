const { cleanText, cleanPassword, cleanEmail } = require("../cleaning");
const { postRequest } = require("../requests");
const {URLBASE} = require("../index");

// log in user
const handleLogin = async (username, password) => {
	// take args into json
	const data = {
		"username": username,
		"password": password
	};
	
	// send post request
	let response = await postRequest(`${URLBASE}/users/signIn`, data);

	if (response.hasOwnProperty("token"))
	{
		return response.token[0];
	}
	else
	{
		return "error"
	}
}

// sign up user
const handleSignup = async (username, password, dateOfBirth, email) => {
	let usernameValid = await checkUsername(username);
	let passwordValid = checkPasswordValidBool(password);
	let ageValid = checkAge(dateOfBirth, 18);
	let emailValid = checkEmailValidBool(email);

	if (usernameValid && passwordValid && ageValid && emailValid)
	{

		let data = {
			username: username,
			password: password,
			age: dateOfBirth,
			email: email
		}
		let response = postRequest(`${URLBASE}/users`, data);
		return response;
	}
	return false;
};

// check if user token is valid
const isAuth = async (token) => {
	// create json object
	let data = {"token": token};
	// post the token to the api, and get response
	let response = await postRequest(`${URLBASE}/users/isAuth`, data);
	
	// return the value of the api request
	if (response.hasOwnProperty("authorised"))
	{
		return response.authorised[0];
	}
	else
	{
		return false;
	}

}

// get Username from token
const getUsername = async (token) => {
	// create json Object
	let data = {"token": token};

	// post data to api
	let response = await postRequest(`${URLBASE}/users/getUsername`, data);

	// return value
	if (response.hasOwnProperty("username"))
	{
		return response.username[0];
	}
	else
	{
		return null;
	}
}

const getId = async (token) => {
	// create json Object
	let data = {"token": token};

	// post data to api
	let response = await postRequest(`${URLBASE}/users/getId`, data);

	// return value
	if (response.hasOwnProperty("id"))
	{
		return response.id[0];
	}
	else
	{
		return null;
	}
}

// check if username exists
const checkUsername = (username) => {
	if (username === "")
	{
		return null;
	}
	else if (cleanText(username) != false)
	{
		let requestJson = {"username": username};
		return postRequest(`${URLBASE}/users/check-username`, requestJson);
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
	checkEmailValidBool,
	isAuth,
	getUsername,
	getId
}
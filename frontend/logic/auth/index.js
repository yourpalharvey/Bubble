const axios = require('axios');


// log in user
const handleLogin = (username, password) => {
	/*
	axios.post('', {
		user: username,
		password: password
	})
	.then(response => {
		return response
	})
	.catch(error => {
		return error
	})
	*/
	return username;
}

// sign up user
const handleSignup = (username, password, dateOfBirth, email) => {
	// check age
	
	/*
	axios.post('', {
		username: username,
		

	})

	return username;
	*/
	return username;
};

// check if username exists


// check that age is old enough		N.B. date is in form yyyy-mm-dd
const checkAge = (birthdate, age) => {
	try {
		if (birthdate === "")
		{
			return false;
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

module.exports= {
    handleLogin,
    handleSignup,
	checkAge
}
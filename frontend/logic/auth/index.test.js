const {handleLogin, handleSignup, checkAge, checkUsername} = require('./index');

test(
    'test loginValid',
    () => {
        expect(handleLogin('testuser', 'testpass')).toBe('testuser');
    }
)

test(
    'test signUpValid',
    () => {
        expect(handleSignup('testuser', 'testpass', 'testemail')).toBe('testuser');
    }
)

// test check age: years
test(
    'test check age: Years Older',
    () => {
        let today = new Date();
        expect(checkAge(`${today.getFullYear()-19}-${today.getMonth()}-${today.getDate()}`, 18)).toBe(true);
    }
)
test(
    'test check age: Years Younger',
    () => {
        let today = new Date();
        expect(checkAge(`${today.getFullYear()-17}-${today.getMonth()}-${today.getDate()}`, 18)).toBe(false);
    }
)

// test check age: months
test(
    'test check age: Month Older',
    () => {
        let today = new Date();
        expect(checkAge(`${today.getFullYear() - 18}-${today.getMonth() - 1}-${today.getDate()}`, 18)).toBe(true);
    }
)
test(
    'test check age: Month Younger',
    () => {
        let today = new Date();
        expect(checkAge(`${today.getFullYear() - 18}-${today.getMonth() + 1}-${today.getDate()}`, 18)).toBe(false);
    }
)


// test check age: months
test(
    'test check age: Days Older',
    () => {
        let today = new Date();
        expect(checkAge(`${today.getFullYear() - 18}-${today.getMonth()}-${today.getDate() - 1}`, 18)).toBe(true);
    }
)
test(
    'test check age: Day Younger',
    () => {
        let today = new Date();
        expect(checkAge(`${today.getFullYear() - 18}-${today.getMonth()}-${today.getDate() + 1}`, 18)).toBe(false);
    }
)
test(
    'test check age: Birthday',
    () => {
        let today = new Date();
        expect(checkAge(`${today.getFullYear() - 18}-${today.getMonth()}-${today.getDate()}`, 18)).toBe(true);
    }
)

// test Username is free

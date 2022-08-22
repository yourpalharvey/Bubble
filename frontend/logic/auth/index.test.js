const {handleLogin, handleSignup, checkAge} = require('./index');

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
        expect(checkAge({day: today.getDate(), month: today.getMonth(), year: today.getFullYear() - 19}, 18)).toBe(true);
    }
)
test(
    'test check age: Years Younger',
    () => {
        let today = new Date();
        expect(checkAge({day: today.getDate(), month: today.getMonth(), year: today.getFullYear() - 12}, 18)).toBe(false);
    }
)

// test check age: months
test(
    'test check age: Month Older',
    () => {
        let today = new Date();
        expect(checkAge({day: today.getDate(), month: today.getMonth() - 1, year: today.getFullYear() - 18}, 18)).toBe(true);
    }
)
test(
    'test check age: Month Younger',
    () => {
        let today = new Date();
        expect(checkAge({day: today.getDate(), month: today.getMonth() + 1, year: today.getFullYear() - 18}, 18)).toBe(false);
    }
)


// test check age: months
test(
    'test check age: Days Older',
    () => {
        let today = new Date();
        expect(checkAge({day: today.getDate() - 1, month: today.getMonth(), year: today.getFullYear() - 18}, 18)).toBe(true);
    }
)
test(
    'test check age: Day Younger',
    () => {
        let today = new Date();
        expect(checkAge({day: today.getDate() + 1, month: today.getMonth(), year: today.getFullYear() - 18}, 18)).toBe(false);
    }
)
test(
    'test check age: Birthday',
    () => {
        let today = new Date();
        expect(checkAge({day: today.getDate(), month: today.getMonth(), year: today.getFullYear() - 18}, 18)).toBe(true);
    }
)
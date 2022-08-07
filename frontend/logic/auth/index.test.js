const {handleLogin, handleSignup} = require('./index');

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
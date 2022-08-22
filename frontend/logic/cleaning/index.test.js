const { cleanEmail, cleanText } = require('./index')

test(
    'cleanEmailValid',
    () => {
        expect(cleanEmail('no@no.com')).toBe(true);
    }
)

test(
    'cleanEmailInvalid',
    () => {
        expect(cleanEmail('yesssss')).toBe(false);
    }
)
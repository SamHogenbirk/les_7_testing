const passCheck = require('./passwordFunctions.js')

const str = "samhogenbirk"

test('is not Null', () => {

    expect(passCheck.isNotNull(str)).not.toBeNull();
});

test('has corect length', () => {

    expect(passCheck.hasRightLength(str)).toBeTruthy()
});

test('has 1 or more uppercase', () => {

    expect(passCheck.hasUpperCaseCharacter(str)).toBeTruthy()
});

test('has 1 or more lowercase', () => {

    expect(passCheck.hasUpperCaseCharacter(str)).toBeTruthy()
});

test('has digit', () => {

    expect(passCheck.hasDigit(str)).toBeTruthy()
});

test('has special character', () => {

    expect(passCheck.hasSpecial(str)).toBeTruthy()
})

test('has minimum requirements', () => {

    expect(passCheck.verifyPassword(str)).toBeTruthy()
})




//Bestand functions.test.js:
const { add } = require('./functions.js');
const functions = require('./functions.js')

test('Should be null', () => {

    expect(functions.isNull()).toBeNull();
});

test('checkValue Should be falsy when argument is undefined', () => {

    expect(functions.checkValue()).toBeFalsy()
});

test('User should be Brad Traversy object', () => {

    expect(functions.createUser()).toEqual({ "firstName": "Brad", "lastName": "Traversy" })

});

// Less than or greater than
test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBe(1600)
});

// Regex (local test)
test('There is no I in team', () => {
    expect('team').not.toContain('I')
});

// Arrays (local test)
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin')
});

test("Add 1 to each item in myArray", function () {
    const myArray = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];

    //function call
    const output = functions.addOne(myArray);

    expect(myArray).toEqual(unchanged);
    expect(output).toEqual(expected);
});

test("Get word lengths", function () {
    const words = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];

    //function call
    const output = functions.getWordLengths(words);

    expect(output).toEqual(expected);
});

test("Find the needle", function () {
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    const output = functions.findNeedle(words, "needle");

    expect(output).toEqual(expected);
});

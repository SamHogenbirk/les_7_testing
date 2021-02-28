const functions = {
    isNull: function () {
        return null;
    },
    checkValue: function (x) {
        return x;
    },
    createUser: function () {
        const user = {
            firstName: 'Brad'
        };
        user['lastName'] = 'Traversy';
        return user;
    },
    addOne: function (numbers) {

        return numbers.map((item) => item + 1)
    },
    getWordLengths: function (someWords) {

        return someWords.map((item) => item.length)
    },
    findNeedle: function (words, string) {

        return words.indexOf(string)
    }
};

module.exports = functions;
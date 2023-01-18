"use strict";
exports.__esModule = true;
function createID(amount) {
    if (amount === void 0) { amount = 6; }
    var id = "";
    var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    for (var i = 0; i < amount; i++) {
        var alphabetsID = Math.floor(Math.random() * alphabets.length);
        var numbersID = Math.floor(Math.random() * numbers.length);
        id += alphabets[alphabetsID > 25 ? 25 : alphabetsID];
        id += numbers[numbersID > 9 ? 9 : numbersID];
    }
    return id.slice(0, amount);
}
exports["default"] = createID;

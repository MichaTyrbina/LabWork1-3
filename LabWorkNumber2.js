var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Задание 1
function fimdMedian(numbers) {
    var cortNumbers = numbers.sort(function (a, b) { return a - b; });
    var length = cortNumbers.length;
    var midian = Math.floor(length / 2);
    if (length % 2 != 0) {
        return cortNumbers[midian];
    }
    else {
        return (cortNumbers[midian] + cortNumbers[midian - 1]) / 2;
    }
}
function countNotZeroElements(array, startLine, endLine, startCol, endCol) {
    var count = 0;
    for (var i = startLine; i <= endLine; i++) {
        for (var j = startCol; j <= endCol; j++) {
            if (array[i] && array[i][j] != 0)
                count++;
        }
    }
    return count;
}
var array = [4, 5, 9, 1];
var median = fimdMedian(array);
console.log(median);
var matrix = [
    [0, 1, 0],
    [2, 0, 3],
    [4, 0, 5],
];
var nonZeroCount = countNotZeroElements(matrix, 0, 0, 0, 2);
console.log(nonZeroCount);
function multiply(cort) {
    var number1 = cort[0], number2 = cort[2];
    return number1 * number2;
}
var myCortege = [15, "Hello", 4];
var num = multiply(myCortege);
console.log(num);
//Задание 3
var Vitamins;
(function (Vitamins) {
    Vitamins["A"] = "\u0412\u0438\u0442\u0430\u043C\u0438\u043D \u0410";
    Vitamins["B"] = "\u0412\u0438\u0442\u0430\u043C\u0438\u043D \u0412";
    Vitamins["C"] = "\u0412\u0438\u0442\u0430\u043C\u0438\u043D C";
    Vitamins["D"] = "\u0412\u0438\u0442\u0430\u043C\u0438\u043D D";
    Vitamins["E"] = "\u0412\u0438\u0442\u0430\u043C\u0438\u043D E";
    Vitamins["Gutalin"] = "\u0412\u0438\u0442\u0430\u043C\u0438\u043D \u0413\u0443\u0442\u0430\u043B\u0438\u043D";
    Vitamins["Tar"] = "\u0412\u0438\u0442\u0430\u043C\u0438\u043D \u0413\u0443\u0434\u0440\u043E\u043D";
})(Vitamins || (Vitamins = {}));
;
console.log(Vitamins.Gutalin);
//Задание 4
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printInfoAboutPet(pet) {
    console.log(pet.name);
    console.log(pet.age);
    console.log(pet.speak());
}
var dog = new Dog();
printInfoAboutPet(dog);
var vitaminC = {
    name: Vitamins.C,
    dosage: 50,
    benefits: [
        "Повышение иммунитета",
        "Улучшение состояния кожи"
    ],
    source: "Цитрусовые, ягоды"
};
console.log(JSON.stringify(vitaminC, null, 2));

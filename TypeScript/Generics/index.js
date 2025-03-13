// //Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe
// //  the values that the array contains.
// type StringArray = Array<string>;
// type NumberArray = Array<number>;
// type ObjectWithNameArray = Array<{ name: string }>;
// function identity<T>(arg: T): T {
//     return arg;
// }
// // Using the function with different types
// let number = identity(42); // T is inferred to be 'number'
// let string = identity("Hello"); // T is inferred to be 'string'
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var numberBox = new Box(42); // T is inferred as 'number'
var stringBox = new Box("Hello"); // T is inferred as 'string'
console.log(numberBox.getValue()); // Output: 42
console.log(stringBox.getValue()); // Output: Hello

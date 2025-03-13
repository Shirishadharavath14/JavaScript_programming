// Generic Function
function identity<T>(arg: T): T {
    return arg;
}

// Generic Class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Utility Types
interface Person {
    name: string;
    age: number;
    address: string;
}

const partialPerson: Partial<Person> = { name: "Alice" };
const readonlyPerson: Readonly<Person> = { name: "Bob", age: 30, address: "123 Street" };
// readonlyPerson.age = 31; // Error: Cannot modify read-only property

const personInfo: Pick<Person, 'name' | 'age'> = { name: "Charlie", age: 25 };

console.log(identity(42)); // Output: 42
const numberBox = new Box(42);
console.log(numberBox.getValue()); // Output: 42

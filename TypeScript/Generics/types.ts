// Built-in Utility Types in TypeScript

// TypeScript provides several built-in utility types to help manipulate types in various ways.

//---------------Partial<T> makes all properties of a type T optional.
interface Person {
    name: string;
    age: number;
}

const partialPerson: Partial<Person> = {
    name: "Alice"
    // age is optional
   
};


//--------------Readonly<T> makes all properties of a type T read-only.
interface Person {
    name: string;
    age: number;
}

const readonlyPerson: Readonly<Person> = {
    name: "Bob",
    age: 30
};

// readonlyPerson.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.


//Pick<T, K> constructs a new type by picking a set of properties K from type T.

interface Person {
    name: string;
    age: number;
    address: string;
}

const personInfo: Pick<Person, 'name' | 'age'> = {
    name: "Charlie",
    age: 25
};

function getArray<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let myNumArr = getArray<number>([100, 200, 300]);
let myStrArr = getArray<string>(["Hello", "World"]);

myNumArr.push(400); // OK
myStrArr.push("Hello TypeScript"); // OK

// myNumArr.push("Hi"); // Compiler Error
// myStrArr.push(500); // Compiler Error

//---------------Multiple Type Variables

//We can specify multiple type variables with different names as shown below


function displayType<T, U>(id:T, name:U): void { 
    console.log(typeof(id) + ", " + typeof(name));  
  }
  
  displayType<number, string>(1, "Steve"); // number, string
  //--------------Generic type can also be used with other non-generic types.

  function displayType<T>(id:T, name:string): void { 
    console.log(typeof(id) + ", " + typeof(name));  
  }
  
  displayType<number>(1, "Steve"); // number, string

//Methods and Properties of Generic Type

//When using type variables to create generic components, 
//TypeScript forces us to use only general methods which are available for every type.

  function displayType<T, U>(id:T, name:U): void { 
    
    id.toString(); // OK
    name.toString(); // OK

    id.toFixed();  // Compiler Error: 'toFixed' does not exists on type 'T'
    name.toUpperCase(); // Compiler Error: 'toUpperCase' does not exists on type 'U'

    console.log(typeof(id) + ", " + typeof(name));  
}






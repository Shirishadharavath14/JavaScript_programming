// type Product = {
//     id: number;
//     name: string;
//     price: number;
//   };
  
//   type Response<T> = {
//     data: T;
//     status: string;
//     message: string;
//   };
interface Product {
    id: number;
    name: string;
    price: number;
  }
  // creating an interface
interface User {
    name: string;
    age: number;
  }
  
  const user: User = {
    name: 'John',
    age: 30
  };
  // extension of interface

  interface ExtendedProduct extends Product {
    category: string;
  }
  
  const product: ExtendedProduct = {
    id: 1,
    name: 'Laptop',
    price: 1000,
    category: 'Electronics'
  };
  
//   What happens if an optional property is accessed when undefined?

//   If an optional property is accessed and it is not provided (i.e., it is undefined), TypeScript will throw a type error if the type does not explicitly allow undefined.
//   Example:

interface User {
name: string;
age?: number;  // Optional property
}

const user: User = { name: 'John' };
console.log(user.age);  // undefined, but no error



//readonly

interface Product {
    readonly id: number;
    name: string;
  }
  
  const product: Product = {
    id: 1,
    name: 'Laptop'
  };
  
  // product.id = 2;  // Error: Cannot assign to 'id' because it is a read-only property
  
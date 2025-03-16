// Type assertion example
let value: any = 'Hello, world';
let l: number = (value as string).length;  // Narrowing with type assertion
console.log(l);  // 13

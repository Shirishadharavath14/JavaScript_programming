function formatValue(value: number | string): string {
    if (typeof value === 'string') {
      return value.toUpperCase();  // Narrowed to string
    } else {
      return value.toFixed(2);  // Narrowed to number
    }
  }
  
  // Test
  console.log(formatValue('hello'));  // 'HELLO'
  console.log(formatValue(10.678));  // '10.68'
  
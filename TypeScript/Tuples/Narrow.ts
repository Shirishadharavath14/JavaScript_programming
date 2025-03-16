// Narrowing based on a condition
function isActiveUser(user: User): boolean {
    if (user[2] === true) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test
  const user: User = [2, 'Jane Doe', true];
  console.log(isActiveUser(user));  // true
  
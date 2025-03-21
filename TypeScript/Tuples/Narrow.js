// Narrowing based on a condition
function isActiveUser(user) {
    if (user[2] === true) {
        return true;
    }
    else {
        return false;
    }
}
// Test
var user = [2, 'Jane Doe', true];
console.log(isActiveUser(user)); // true

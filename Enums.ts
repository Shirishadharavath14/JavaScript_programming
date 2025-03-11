"use strict";
// Defining an Enum for User Roles
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
// Function using the Enum
function getDashboardAccess(role) {
    switch (role) {
        case UserRole.Admin:
            return "Full Access to Dashboard";
        case UserRole.Editor:
            return "Limited Access to Edit Content";
        case UserRole.Viewer:
            return "Read-Only Access";
        default:
            return "No Access";
    }
}
const userRole = UserRole.Admin;
console.log(getDashboardAccess(userRole));
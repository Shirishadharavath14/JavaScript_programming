var score = 33;
score = 44;
score = "55";
console.log(score);
var siri = { name: "Siri", id: 23 };
siri = { username: "ss", id: 332 };
// function getDbId (id: number | string){
//     console.log(`DB id is :${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
        console.log(id);
    }
}

let score: number | string | boolean= 33
score = 44
score ="55"
console.log(score)

type user ={
    name : string;
    id:number;
}

type Admin={
    username:string;
    id:number
}


let siri:user |Admin ={name: "Siri", id:23}
siri={username: "ss", id:332}

function getDbId (id: number | string){
    console.log(`DB id is :${id}`);
}

getDbId(3)
getDbId("3")


function getDbId (id:number|string ){
 if (typeof id === "string"){
    id.toLowerCase();
    console.log(id);
 }
 
}
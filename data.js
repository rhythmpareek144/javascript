
/*
const data = [
    {
        id: 1,
        img: src: "https://th.bing.com/th/id/OIP.BiWqreR7vQQpjtBrSjjm4QHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: " this is an classic bike",
        tittle: "royal bike"
    },

    {
        id: 2,
        imgsrc: "https://th.bing.com/th/id/OIP.BiWqreR7vQQpjtBrSjjm4QHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: " this is an classic bike",
        tittle: "bullet"
    },


    {
        id: 3,
        imgsrc: "https://th.bing.com/th/id/OIP.BiWqreR7vQQpjtBrSjjm4QHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: " this is an classic bike",
        tittle: "hunter 3540"
    },




    {
        id: 4,
        imgsrc: "https://th.bing.com/th/id/OIP.BiWqreR7vQQpjtBrSjjm4QHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: " this is an classic bike",
        tittle: "royal bike"
    },




    {
        id: 5,
        img: src : "https://th.bing.com/th/id/OIP.BiWqreR7vQQpjtBrSjjm4QHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: " this is an classic bike",
        tittle: "royal bike"
    },



    {
        id: 6,
        imgsrc: "https://th.bing.com/th/id/OIP.BiWqreR7vQQpjtBrSjjm4QHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: " this is an classic bike",
        tittle: "royal bike"
    },



    {
        id: 7,
        imgsrc: "https://th.bing.com/th/id/OIP.BiWqreR7vQQpjtBrSjjm4QHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: " this is an classic bike",
        tittle: "royal bike",
    },



    {
        id: 8,
        imgsrc: "https://th.bing.com/th/id/OIP.BiWqreR7vQQpjtBrSjjm4QHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: " this is an classic bike",
        tittle: "royal bike",
    },



    {
        id: 9,
        imgsrc: "https://th.bing.com/th/id/OIP.BiWqreR7vQQpjtBrSjjm4QHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: " this is an classic bike",
        tittle: "royal bike",
    },




    {
        id: 10,
        imgsrc: "https://th.bing.com/th/id/OIP.BiWqreR7vQQpjtBrSjjm4QHaE8?w=281&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: " this is an classic bike",
        tittle: "royal bike",
    },

*/

//functional expression

/*
function(a,b){
    return a+b;
 
}
 
*/
/*

 let x=10;
let y = 20;
const f1 = function (x, y, callback) {
 retu
}  */
const placeorder = () => {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("order placed");
        resolve();
    }, 2000);
})
};

const startproduction = () => {
    return new Promise((resolve,reject))=>{
    setTimeout(() => {
        console.log("name printed");
        resolve();
    }, 3000);
})react
};

const printId = (callBack) => {
    setTimeout(() => {
        console.log("Id printed");
        callBack();
    }, 5000);
};


const productionName=(callback) => {
    setTimeout(()=> {
        console.log("productionDesc printed")
    },6000);
};

console.log("odering product.......");
placeorder(()=>{
    console.log("In production");
    startproduction(()=>{
        productionNmae(()=>{
            productionDesc();
            console.log("Day ended");
        })
    })
})







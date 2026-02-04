//question 1
// const square = n => (n*n);

//question 2

let id = setInterval(() => {
    console.log("hello world");
},2000);

let id2 = setInterval(() => {
    console.log("welcome to my pc");
},2000);

setTimeout( ()=>{
    clearInterval(id);
    clearInterval(id2);
},10000);

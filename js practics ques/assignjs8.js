// QUESTION 1

// let arr=[2,3,4,5,6];

// let square = arr.map(function(el) {
//     return el**2;
// });
// console.log(square);

// let sum = square.reduce((add,curr) => {
//     return add + curr;
// });

// let avg = sum/ arr.length;
// console.log(avg);


//QUESTION 2
 
// let arr = [2,4,7,3,6,2,7,9,5];
// let newarr = arr.map((el) => {
//     return el+5;
// });

// console.log(newarr);

//QUESTION 2

// let arr = "ritesh";

// let uppercasearr = arr.map((el) => {
//     return el.toUpperCase();
// });

// console.log(uppercasearr);

// QUESTION 3

// let arr= ["ritesh","aniket","shravani"];

// const upCase = arr.map((el) => {
//     return el.toUpperCase();
// });

// console.log(upCase);

// QUESTION 3

// let arr =[12,13,14];
// let args = [2,3,4,5];
// function double(arr,...args) {

//     let arr = arr;
//     let args = arguments;

//     return args.map((el) => {
//         return el * 2;
//     });
    
// };


// const dob = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v * 2),
// ];

// dob([2,3,4],8,9,6);
function don(arr, ...args){

return[...args.map((v) => v * 2)];
};
don([2,5,5,5,4,5,8],6,5,5,5);








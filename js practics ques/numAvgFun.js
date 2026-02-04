// function numAvg (a,b,c) {
//     let avg= (a+b+c)/3;
//     console.log(`average of this three number ${a},${b},${c} is ${avg}.` );
// }
// numAvg(4,4,8);
// numAvg(9,9,6);

//sum of number by using function 


function sum(n) {
    let summ = 0;
    for(i=0;i<=n;i++){
        summ = summ + i;
    }
    console.log(summ);
} 

sum(8);
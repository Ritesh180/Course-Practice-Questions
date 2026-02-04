// function multiplegreet(func,count) {
//     for(i=0;i<=count;i++){
//         func();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// multiplegreet(greet,5);


//OR

function multiFun(func,count){
    for(i=0;i<=count;i++){
        func();
    }
}

multiFun(function name() {console.log("hello")} ,10);
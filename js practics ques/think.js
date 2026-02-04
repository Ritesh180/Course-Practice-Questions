// PRINT ODD NUMBER // 

// for(let i = 1;i<=15;i=i+2){
//     console.log(i);
// }


const movieName = document.getElementById('inputMovie');
const Fanswer = document.getElementById('answer');
const favoriteMovie = "Avatar";

function check(){
    const userMovie = movieName.value.trim();

    if (userMovie.toLowerCase()  === favoriteMovie.toLowerCase() ){
        Fanswer.textContent = " YOU WIN, Congrats !!";
    }
    else if (userMovie.toLowerCase() === "quit") {
        Fanswer.textContent = " you QUIT Gam";
    }
    else {
        Fanswer.textContent = "YOU LOSE THE GAME ,Try again.";
    }
    movieName.value ='';
    
}


// OR //

// const movieName = document.getElementById('inputMovie');
// const Fanswer = document.getElementById('answer');

// const favoriteMovie = "Avatar";

// function check() {
//     const userMovie = movieName.value.trim();
    
//     if (userMovie === "") {
//         Fanswer.textContent = "Please enter a movie name.";
//         return;
//     }

//     if (userMovie.toLowerCase() === favoriteMovie.toLowerCase()) {
//         Fanswer.textContent = "YOU WIN, Congrats!!";
//     } 
//     else if (userMovie.toLowerCase() === "quit") {
//         Fanswer.textContent = "You QUIT the Game.";
//     } 
//     else {
//         Fanswer.textContent = "YOU LOSE THE GAME, Try again.";
//     }

//     // Clear the input field after checking
//     movieName.value = '';
// }







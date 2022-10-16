// User presses button and dad joke appears
// ✅ create 'get joke' button
// ✅add event listener with getJoke function
// getJoke FUNCTION:
    // ✅ gets new dad joke from api
        //✅  look at more complex fetch necessary
        //✅  data.json   
    // prints it on the screen
        //✅ create <p> where joke will go 
        //✅ doc.QS it 
        //✅  add 'jokeLine.textContent = data.X

// IDENTIFYING ELEMENTS
let jokeButton = document.querySelector("#jokeButton")
let jokeLine = document.querySelector("#jokeLine")

jokeButton.addEventListener("click", getJoke)

async function getJoke(){
    let data = await fetch("https://icanhazdadjoke.com", {
    headers: { accept: "application/json"},
  });
    let jokeData = await data.json();
    jokeLine.textContent = jokeData.joke;
}


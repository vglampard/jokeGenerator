// User presses button and dad joke appears
// create 'get joke' button
// add event listener with getJoke function that:
    // gets new dad joke from api
        // look at more complex fetch necessary
        // data.json   
    // prints it on the screen
        // create <p> where joke will go 
        // doc.WS it 
        // add 'jokeLine.textContent = data.X

        

fetch("https://icanhazdadjoke.com/", {
  headers: { accept: "application/json" },
});
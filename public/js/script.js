//const { render } = require("ejs");

document.addEventListener("click", function (event) {
    // Checking if the button was clicked
   // if (!event.target.matches("#button")) return;
  
    /*
    Here we send a request to the Joke API
    Then process the response into JSON
    Then pass the data to our renderJoke function.
    */
   if(event.target.matches("#button"))
   {
    fetch('http://localhost:5000/show')
      .then((response) => response.json())
      .then((data) => renderJoke(data))
      .catch(() => renderError());
      var element = document.getElementById("punchline");
        element.style.display = "none";
    }

      else if(event.target.matches("#reveal"))
      {
        var element = document.getElementById("punchline");
        element.style.display = "block";
      }
  });

  
  function renderJoke(data) {
    // Get text elements
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    const error = document.getElementById("error");
  
    const hidden = document.getElementById("reveal");
    hidden.style.display="block";
    // Hide error and render jokes
    error.innerHTML = "";
    setup.innerHTML = data[0].setup;
    punchline.innerHTML = data[0].punchline;
  }
  
 /*  function renderPunchline(data)
  {
    const punchline = document.getElementById("punchline");
    const error = document.getElementById("error");
  
    // Hide error and render jokes
    error.innerHTML = "";
    punchline.innerHTML = data[0].punchline;
  } */
  function renderError() {
    const error = document.getElementById("error");
    error.innerHTML = "Whoops, something went wrong. Please try again later!";
  }
  
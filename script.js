// Write your JavaScript code here!

window.addEventListener("load", function () {

    //    let listedPlanets;
    //    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    //    let listedPlanetsResponse;
    //    listedPlanetsResponse.then(function (result) {
    //        listedPlanets = result;
    //        console.log(listedPlanets);
    //    }).then(function () {
    //        console.log(listedPlanets);
    //        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    //    })
    // on Adding Validation

    //First, we are already inside a window load event listner (line3) Only one single window load event needed in our code
    //before we worry about validating the form inputs we need to select the form
    //and listen for the submit event
    //
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        //default behavior is that when we submit html forms 
        //the form sends an http request and refreashes the page
        //we do not what this to happen. We want the code in 
        //our form submit even listener to execute. Refreshing the page refreashes the console.
        

        event.preventDefault();
        //We need to validate the inputs are correct data types.. number or string
        // console.log('page hasnt refreashed yet')

        //the rest of the code in this form event listener sould go below this line
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName");
        let fuelLevel = document.querySelector("input[name=fuelLevel");
        let cargoMass = document.querySelector("input[name=cargoMass");
        let faultyItems = document.getElementById("faultyItems");
        // if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
        //     alert("All fields are required!"); 
        // }
        formSubmission(document,faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)

        //need to validate our form inputs using the DOM and conditionals
        // we are going to use the formSubmission function to validate the values of each of our form
        //inputs, Pilot Name Copilot fuelLever, cargoMass
        //Before validation of input we need to select all form inputs with the DOM
        // let input2 = //select an input here 
        // *****let input 3 = "placeholder for actually selecting the input"
        // we want to do this 4 times for each element
        //now that we have all 4 form input elements selected we can 
        //pass their VALUEs into our formSubmission function

        //very important to understand difference between HTML element and its value!!!

    });
    //itll return the first form on the page

});
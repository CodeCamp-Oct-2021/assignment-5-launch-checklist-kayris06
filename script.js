// Write your JavaScript code here!





window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
    
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let newPlanet = pickPlanet(listedPlanets)
        addDestinationInfo(document, newPlanet.name, newPlanet.diameter, newPlanet.star, newPlanet.distance,newPlanet.moons, newPlanet.image)
  
    })


let form = document.querySelector("form");
form.addEventListener("submit", function (event) {



    event.preventDefault();

    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName");
    let fuelLevel = document.querySelector("input[name=fuelLevel");
    let cargoMass = document.querySelector("input[name=cargoMass");
    let faultyItems = document.getElementById("faultyItems");

    formSubmission(document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)


});

});

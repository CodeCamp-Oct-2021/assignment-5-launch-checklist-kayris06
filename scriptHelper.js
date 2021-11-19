// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let div = document.getElementById("missionTarget");
    div.innerHTML =
        `<h2>Mission Destination</h2>
         <ol>
             <li>Name: ${name}</li>
             <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
         <li>Distance from Earth: ${distance}</li>
           <li>Number of Moons: ${moons}</li>
        </ol>
       <img src="${imageUrl}">`
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = "visible";

    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required!");
    } else if ((isNaN(cargoLevel)) || (isNaN(fuelLevel)) || (!isNaN(pilot)) || (!isNaN(copilot))) {
        alert("Please enter valid information");

    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        launchStatus.textContent = "Shuttle Not Ready";
        launchStatus.style.color = "red";
        fuelStatus.textContent = "There is not enough fuel for the Journey";
        cargoStatus.textContent = "There is too much cargo"
    } else if (fuelLevel >= 10000 && cargoLevel < 10000) {
        launchStatus.textContent = "Shuttle Is Ready For Launch";
        launchStatus.style.color = "green";
        fuelStatus.textContent = "Fuel level high enough for launch"
        cargoStatus.textContent ="Cargo mass low enough for launch"
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        launchStatus.textContent = "Shuttle Not Ready";
        launchStatus.style.color = "red";
        fuelStatus.textContent = "Fuel level high enough for launch"
        cargoStatus.textContent = "There is too much cargo"
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
        launchStatus.textContent = "Shuttle Not Ready";
        launchStatus.style.color = "red";
        fuelStatus.textContent = "There is not enough fuel for the Journey";
        cargoStatus.textContent ="Cargo mass low enough for launch"
    }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {

    let index = Math.floor(Math.random() * planets.length);
    return planets[index]
}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
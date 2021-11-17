// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    // let div = document.getElementById("missionTarget");
    // div.innerHTML =
    //     `<h2>Mission Destination</h2>
    //      <ol>
    //          <li>Name: ${this.name}</li>
    //          <li>Diameter: ${this.diameter}</li>
    //         <li>Star: ${this.star}</li>
    //      <li>Distance from Earth: ${this.distance}</li>
    //        <li>Number of Moons: ${this.moons}</li>
    //     </ol>
    //    <img src="${this.imageUrl}">`
}

    function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
            alert("All fields are required!");
        } else if ((isNaN(cargoLevel)) || (isNaN(fuelLevel)) || (!isNaN(pilot)) || (!isNaN(copilot))) {
            alert("Please enter valid information");

        } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            pilotStatus.textContent = `Pilot ${pilot} is ready for launch`
            copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`
            list.style.visibility = "visible";
            launchStatus.textContent = "Shuttle Not Ready";
            launchStatus.style.color = "red";
            fuelStatus.textContent = "There is not enough fuel for the Journey";
            cargoStatus.textContent = "There is too much cargo"
        } else if (fuelLevel >= 10000 && cargoLevel < 10000) {
            pilotStatus.textContent = `Pilot ${pilot} is ready for launch`
            copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`
            list.style.visibility = "visible";
            launchStatus.textContent = "Shuttle Is Ready For Launch";
            launchStatus.style.color = "green";
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            pilotStatus.textContent = `Pilot ${pilot} is ready for launch`
            copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`
            list.style.visibility = "visible";
            launchStatus.textContent = "Shuttle Not Ready";
            launchStatus.style.color = "red";
            cargoStatus.textContent = "There is too much cargo"
        } else if (fuelLevel < 10000 && cargoLevel < 10000) {
            pilotStatus.textContent = `Pilot ${pilot} is ready for launch`
            copilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`
            list.style.visibility = "visible";
            launchStatus.textContent = "Shuttle Not Ready";
            launchStatus.style.color = "red";
            fuelStatus.textContent = "There is not enough fuel for the Journey";
        }


    }

    async function myFetch() {
        let planetsReturned;
        //this function executes the fetch to our planets url
        //then returns the json array we get as a Promise
        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
            return response.json();
        });

        return planetsReturned;
    }
    // implement the pick planet function
    //it takes a list(array) of planets
    //creates a random index to select a random element
    //from the input 
    //
    function pickPlanet(planets) {
            let index = Math.random()*planets.length;
            return planets[index];
        }
        
        



    module.exports.addDestinationInfo = addDestinationInfo;
    module.exports.validateInput = validateInput;
    module.exports.formSubmission = formSubmission;
    module.exports.pickPlanet = pickPlanet;
    module.exports.myFetch = myFetch;

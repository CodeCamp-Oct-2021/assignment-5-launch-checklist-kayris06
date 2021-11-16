// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {

}
//this formSubmission function will be invoked inside 
//the form submit even Listener in script.js to validate all of our inputs
// 6 parameters: document, which is just the document object
// list - the faulty items div
//piolot - the value of our pilot name input 
// co pilot - value of the input
//fuel Level - value of fuelLevel input
//cargoMass, value of cargoMass input
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
        alert("All fields are required!");
    } else if ((isNaN(cargoLevel)) || (isNaN(fuelLevel)) || (!isNaN(pilot)) || (!isNaN(copilot))) {
        alert("Please enter valid information");
    } else if (fuelLevel < 10000 || cargoLevel > 10000) {
        // let list = document.getElementById("list");				
        list.style.visibility = "visible";			
        let launchStatus = document.getElementById("launchStatus");
        launchStatus.style.color = "red";
        let fuel = document.getElementById(fuelLevel)
        fuel = "Not enough fuel for the Journey"



        // <button id="formSubmit">Submit</button>
    // <button onclick="toggleClock()" id="list">Show clock</button>


    // document.getElementById("list")
    // list.style.visibility = 'visible';


    // document.getElementById("list").hidden = false;
    //     // document.getElementById('list').style.display = 'block';
    //     // launchStatus.style.color= "red"

    }
        // element = document.querySelector('list');
        //    element.style.visibility = 'hidden';
        // let faultyItems = document.getElementById("list");
        // faultyItems = 
        //  list.style.color = "red";

   
        // change faultyItems to visible with an updated fuel status (there is not enough fuel for the Journey.
        // The text of h2 element, launch status, change to "shuttle not ready for launch and the color should change red.")


 


    //VAIDATING INPUTS 
    //long series of conditionals to validate all information 
    // given all of the inputs.. determine what are our conditions 
    /* condition 1: all fields are required!
          if any field is empty... send alert that reads (all fields required)
      condition 2: use isNan() to validate input in each field is correct data type
      if pilot/copilot are numbers (alert user (must be a name))
      if fuel level/cargo are not numbers (alert user (must be a number ))
  Updating Status
  based on conditions if we are at this point and have no alerted the user of bad data
  we assume we have validated all input properly 
  we are good to go to check if ready to launch (fuel and cargo)
  
  What if fuel level and cargo level are less than 10000
  what if both are greater than 10000
  What if one is greater and one is less than 
  What should we do or display as a restult of these conditions 
  
  in any case our list parameter FaultyItems () should be visible 
  
  also pilot status and co-pilot status should be updated 
  to be template literals to read their names 
  
  how to update text inside an HTML element 
  do we have their status html elements selected or need to seltect those to update 
  
  if we are ready to launch... fuel is good and mass is low enough 
  
  if not we are not ready for launch. Well need to update launchStatus text to reflect whether or not
   we are ready for launch as well
  just like pilot and copilot do we need 
  
  
    */


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

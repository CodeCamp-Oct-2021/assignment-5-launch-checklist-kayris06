// Write your JavaScript code here!

window.addEventListener("load", function () {

       let listedPlanets;
       // Set listedPlanetsResponse equal to the value returned by calling myFetch()
       let listedPlanetsResponse = myFetch();
       listedPlanetsResponse.then(function (result) {
           listedPlanets = result;
           console.log(listedPlanets);
       }).then(function () {
           console.log(listedPlanets);
           //based on console.log statements we know listedPlanets is out
           //list array of fetched planet json
           //we have access to our fetched planets, so we need to select a random
           //planet with our PickPlanet function, update text of our mission Target div from html to 
           //display our information
           // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       
            //from the list of planets add that information to your destination.
            //invoke pickPlanet and pass it pour list of planets and store in a variable
            //we can use that object to fill in our template literal 
        div.innerHTML =
        `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${json.name}</li>
                     <li>Diameter: ${json.diameter}</li>
                     <li>Star: ${json.star}</li>
                     <li>Distance from Earth: ${json.distance}</li>
                     <li>Number of Moons: ${json.moons}</li>
                 </ol>
                 <img src="${this.imageUrl}">`


        })
    // on Adding Validation

   
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        
        

        event.preventDefault();
        
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName");
        let fuelLevel = document.querySelector("input[name=fuelLevel");
        let cargoMass = document.querySelector("input[name=cargoMass");
        let faultyItems = document.getElementById("faultyItems");
        
        formSubmission(document,faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)

       
    });
    

});
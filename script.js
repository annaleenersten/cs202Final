// https://api.wheretheiss.at/v1/satellites/25544 //iss info
// http://api.open-notify.org/astros.json //people in space    

function peopleInSpace() {
  fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('spacePeople').innerHTML = "People in Space" + '<br><br><br>';
     for (let i = 0; i < data.number; i++) {
            document.getElementById('spacePeople').innerHTML += data.people[i].name + " " +  data.people[i].craft + '<br>';
      } 
  })
}

peopleInSpace();



function ISS() {
  fetch('https://api.wheretheiss.at/v1/satellites/25544')
  .then(response => response.json())
  .then(data => {
      document.getElementById('iss').innerHTML = data.name + '<br>' 
      + "ID: " + data.id + '<br>' 
      + "Latitude: " + data.latitude + '<br>' 
      + "Longitude: " + data.longitude + '<br>' 
      + "Altitude: " + data.altitude + '<br>' 
      + "Velocity: " + data.velocity + '<br>' 
      + "Visibility: " + data.visibility + '<br>' 
      + "Footprint: " + data.footprint + '<br>' 
      + "Timestamp: " + data.timestamp + '<br>' 
      + "Day Number: " + data.daynum + '<br>' 
      + "Solar Latitude: " + data.solar_lat + '<br>'
      + "Solar Longitude: " + data.solar_lon + '<br>' 
      + "Units: "+ data.units + '<br>';   
  })
}

ISS();

// function SolarSystem() {
//   fetch('https://api.le-systeme-solaire.net/rest/bodies/')
//   .then(response => response.json())
//   .then(data => {
//     let i = 0;
//     while(data.bodies[i] != null) {
//       document.getElementById('solar').innerHTML += "Name: " + data.bodies[i].name + '<br>' + "Type: " + data.bodies[i].bodyType + '<br>' + "Density: " + data.bodies[i].density + '<br>' + "Gravity: " + data.bodies[i].gravity + '<br>'+ "Average Temperature: " + data.bodies[i].avgTemp + '<br>'; 
//       let img = document.getElementById('solar');
//       // Create image element
//       let dynamicImage = document.createElement('img');
//       // Initialize the image source
//       dynamicImage.src = "rocket-312767_1280.png"; 
//       img.appendChild(dynamicImage);
//       i++;
//     }
//   })
// }

// SolarSystem();

function knownCount() {
  fetch('https://api.le-systeme-solaire.net/rest/knowncount/')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 7; i++) {
      let img = document.getElementById('knowncount');
      let dynamicImage = document.createElement('img');
      dynamicImage.src = "moon-26619_1280.png";
      img.appendChild(dynamicImage);
      document.getElementById('knowncount').innerHTML += "Type: "+ data.knowncount[i].id + '<br>' + "Count: " + data.knowncount[i].knownCount + '<br>' + "Last Update: " + data.knowncount[i].updateDate
      + '<br><br>';
    }
  })
}

knownCount();


var user_configuration={
      shape:"circle",
 
      initial_size:"12px",

      final_size:"64px",

      expand_speed:"1s",

      fade_delay:"0.5s",
   
      fade_duration:"0.5s",

      colors:["hsla(62, 50%,50%, 0.5)","rgba(255,255,255,0.5)","hsla(180, 72%, 52%, 0.5)"],
 
      frequency:100,

      density: 1,

      keep_lit:false,

      rotation:true,
 
      coverage:1,

      target_class:'.starlight'
  };
  

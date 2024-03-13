
function peopleInSpace() {
  fetch('http://api.open-notify.org/astros.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('numPeopleInSpace').innerHTML = "There are currently " + data.number + " people in space:"
     for (let i = 0; i < data.number; i++) {
            document.getElementById('spacePeople').innerHTML += data.people[i].name + " " +  data.people[i].craft + '<br><br>';
      } 
  })
}

peopleInSpace();


function ISS() {
  fetch('https://api.wheretheiss.at/v1/satellites/25544')
  .then(response => response.json())
  .then(data => {
      document.getElementById('iss').innerHTML =  
      "ID: " + data.id + '<br>' 
      + "Latitude: " + data.latitude + '<br>' 
      + "Longitude: " + data.longitude + '<br>' 
      + "Altitude: " + data.altitude + '<br>' 
      + "Velocity: " + data.velocity + '<br>' 
      // + "Visibility: " + data.visibility + '<br>' 
      // + "Footprint: " + data.footprint + '<br>' 
      // + "Timestamp: " + data.timestamp + '<br>' 
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
//       document.getElementById('solar').innerHTML += "Name: " + data.bodies[i].name + " - " + "Type: " + data.bodies[i].bodyType + " - " + "Density: " + data.bodies[i].density + " - " + "Gravity: " + data.bodies[i].gravity + " - " + "Average Temperature: " + data.bodies[i].avgTemp + '<br><br>';
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
      document.getElementById('knowncount').innerHTML +=  data.knowncount[i].id + '<br>' + "Count: " + data.knowncount[i].knownCount + '<br>' + "Last Update: " + data.knowncount[i].updateDate
      + '<br><br>';
    }
  })
}

knownCount();

$('#sec-1').addClass("active");


      $("#sec-1").click(function() {
           $('html, body').animate({
               scrollTop:        $("#one").offset().top-66
           }, 1000);
        return false;
       });
      
      $("#sec-2").click(function() {
           $('html, body') .animate({
               scrollTop:        $("#two").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#sec-3").click(function() {
           $(' html,body') .animate({
               scrollTop:        $("#three").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#sec-4").click(function() {
        $(this).addClass("active");
           $('html,body ') .animate({
               scrollTop:        $("#four").offset().top-112
           }, 1000);
        return false;
       });
  
$('#two').waypoint(function() {
      
  $(".container ul li").children().removeClass("active");
  $("#sec-2").addClass("active");
  
}, { offset: 101 });


$('#three').waypoint(function() {
  $(".container ul li").children().removeClass("active");
  $("#sec-3").addClass("active");
}, { offset: 101 });

$('#four').waypoint(function() {
  $(".container ul li").children().removeClass("active");
  $("#sec-4").addClass("active");
}, { offset: 101 });

$('#one').waypoint(function() {
  $(".container ul li").children().removeClass("active");
  $("#sec-1").addClass("active");
}, { offset: 0 });
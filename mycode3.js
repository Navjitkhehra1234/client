if(navigator.geolocation) {
    function success(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          var altitude = position.coords.altitude;
          var speed = position.coords.speed;
          console.log("lattitude " +latitude + " logitude " + longitude );
          }
          navigator.geolocation.getCurrentPosition(success);
          console.log("It Support");
          var imgKitten = document.getElementById("theWall");
          imgKitten.src = "https://placekitten.com/200/300";

} else {
    console.log("It not support");
    function geoError(errorObj) {     
        alert("Uh oh, something went wrong");
    } 
    navigator.geolocation.getCurrentPosition( geoError);
    var imgKitten = document.getElementById("theWall");
    imgKitten.src = "https://www.placepuppy.net/400/250";
}

var history = history.length;
console.log("History" , history);
if (history == 1) {
    document.bgColor = "#ADD8E6" ;
} else {
    document.bgColor = "#FF4500";
}
var newStyleHeading = document.getElementById("heading");
newStyleHeading.style.backgroundColor = "pink";
newStyleHeading.style.paddingLeft = "10px";
newStyleHeading.style.fontSize = "40px";

var nav = document.getElementsByClassName("CLASS");
console.log("NAV-ITEMS" , nav);
for (var i= 0; i < nav.length; i++) {
    if(i % 2 === 0) {
       nav[i].style.backgroundColor = 'yellow'; 
    } else {
       nav[i].style.backgroundColor = "green";
    }
}


 












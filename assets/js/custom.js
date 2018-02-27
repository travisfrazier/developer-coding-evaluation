// Google Maps Marker 
function initMap() {
  var uluru = {lat: 35.227165, lng: -80.846319};
  var map = new google.maps.Map(document.getElementById('google-map'), {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

// Contact Form Validation ----- //
// User name validation 
function formValidate() {
  const input = document.forms["contactForm"]["name"].value.trim();
  const email = document.forms["contactForm"]["email"].value.trim();
  const message = document.forms["contactForm"]["message"].value.trim();
  
  // Name Validation
  if (!input) {
    alert("Please enter your name");
    return false;
  }
  //Email Validation
  if (!email) {
    alert("Please enter your email address");
    return false;
  }
  //Message Validation 
  if (!message) {
    alert("Please enter your message");
    return false;
  }
}

// Code to submit data to server goes here


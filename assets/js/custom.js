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
  let input = document.forms["contactForm"]["name"].value;
  switch (input) {
    case "":
      alert("Please enter your name");
      return false;
      break;
  }

  //Email Validation
  let email = document.forms["contactForm"]["email"].value;
  switch (email) {
    case "":
      alert("Please enter your email address");
      return false;
      break;
  }

  //Message Validation 
  let message = document.forms["contactForm"]["message"].value;
  switch (message) {
    case "":
      alert("Please enter your message");
      return false;
      break;
  }
}


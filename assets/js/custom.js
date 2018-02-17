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
  var input = document.forms["contactForm"]["name"].value;
  if (input == "") {
      alert("Please enter your name");
      return false;
  }
  //Email Validation
  var email = document.forms["contactForm"]["email"].value;
  if (email == "") {
      alert("Please enter your email address");
      return false;
  }

  //Message Validation 
  var message = document.forms["contactForm"]["message"].value;
  if (message == "") {
      alert("Please enter your message");
      return false;
  }
}


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
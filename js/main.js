// Initialize and add the map
function initMap() {
  // Your Location
  const loc = { lat: 17.442476, lng: 78.646604 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });

  //The Marker, positioned at location

  const marker = new google.maps.Marker({ position: loc, map: map });
}

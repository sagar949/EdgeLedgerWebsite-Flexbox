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

// Sticky menu background

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('#navbar');
  if (window.scrollY > 140) {
    navbar.style.opacity = 0.9;
  } else {
    navbar.style.opacity = 1;
  }
});

// Smooth Scrolloing

$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

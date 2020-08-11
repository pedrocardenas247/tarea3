var map = L.map('map').
     setView([-12.04954,-77.08038],
     15);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(map);
     	
L.control.scale().addTo(map);
L.marker([-12.04954,-77.08038],{draggable: true}).addTo(map);

new Glide('.glide', {autoplay: 2000}
).mount();

$(document).ready(function() {
    $(".fancy_title").lettering();
  });

  var elm = document.querySelector('#main-header');
var ms = new MenuSpy(elm);

document.addEventListener("change", function(event) {
  let element = event.target;
  if (element && element.matches(".form-element-field")) {
    element.classList[element.value ? "add" : "remove"]("-hasvalue");
  }
});
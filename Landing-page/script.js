let lati = 22.715718;
let long = 75.881698;

const map = document.getElementById("map");
if ("geolocation" in navigator) {
  map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${lati},${long}&z=15&output=embed" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>`;
}

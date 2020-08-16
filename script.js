import {epic} from 'epic.js';
import {ikon} from 'ikon.js';

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.481, lng: -106.038 },
    zoom: 8
  });
}

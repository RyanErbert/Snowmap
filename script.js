let epic = [
  "VAIL CO",
  "BEAVER CREEK CO",
  "WHISTLER BLACKCOMB BC",
  "BRECKENRIDGE CO",
  "PARK CITY UT",
  "KEYSTONE CO",
  "HEAVENLY CA/NV",
  "NORTHSTAR CA",
  "KIRKWOOD CA",
  "STOWE VT",
  "WILMOT WI",
  "AFTON ALPS MN",
  "MT BRIGHTON MI",
  "PERISHER AUSTRALIA",
  "FALLS CREEK AUSTRALIA",
  "HOTHAM AUSTRALIA",
  "OKEMO VT",
  "MOUNT SUNAPEE NH",
  "CRESTED BUTTE CO",
  "STEVENS PASS WA",
  "MOUNT SNOW VT",
  "ATTITASH MOUNTAIN RESORT NH",
  "WILDCAT MOUNTAIN NH",
  "CROTCHED MOUNTAIN NH",
  "HUNTER MOUNTAIN NY",
  "LIBERTY MOUNTAIN RESORT PA",
  "ROUNDTOP MOUNTAIN RESORT PA",
  "WHITETAIL RESORT PA",
  "JACK FROST PA",
  "BIG BOULDER PA",
  "ALPINE VALLEY OH",
  "BOSTON MILLS OH",
  "BRANDYWINE OH",
  "MAD RIVER MOUNTAIN OH",
  "HIDDEN VALLEY MO",
  "SNOW CREEK MO",
  "PAOLI PEAKS IN",
  "TELLURIDE CO",
  "SUN VALLEY ID",
  "SNOWBASIN UT",
  "FERNIE ALPINE RESORT",
  "KICKING HORSE MOUNTAIN RESORT",
  "KIMBERLEY ALPINE RESORT",
  "NAKISKA SKI AREA",
  "MONT-SAINTE ANNE",
  "STONEHAM",
  "HAKUBA47 WINTER SPORTS PARK",
  "HAKUBA CORTINA SNOW RESORT",
  "ABLE HAKUBA GORYU",
  "HAKUBA HAPPO-ONE SNOW RESORT",
  "HAKUBA IWATAKE SNOW FIELD",
  "HAKUBA NORIKURA ONSEN SNOW RESORT",
  "JIIGATAKE SNOW RESORT",
  "KASHIMAYARI SKI RESORT",
  "TSUGAIKE KOGEN SNOW RESORT",
  "HAKUBA SANOSAKA SNOW RESORT",
  "RUSUTSU JAPAN",
  "SKIRAMA DOLOMITI",
  "LES 3 VALLEES",
  "4 VALLEES",
  "ARLBERG"
];


let markersArray = [];





document.getElementById("submit").addEventListener("click", () => {
  geocodeAddress(geocoder, map);
});

function geocodeAddress(_geocoder, _resultsMap) {
  for (var x = 0; x < epic.length; x++) {
    (function(_x) {
      setTimeout(function() {
        console.log(`${_geocoder},${_resultsMap},${_x}`);

        const address = epic[_x];
        _geocoder.geocode(
          {
            address: address
          },
          (results, status) => {
            if (status === "OK") {
              console.log("Geocode was successful!");
              let marker = new google.maps.Marker({
                map: _resultsMap,
                position: results[0].geometry.location
              });

              markersArray.push({
                location: address,
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng(),
                pass: "epic"
              });
            } else {
              console.log(
                "Geocode was not successful for the following reason: " + status
              );
            }
          }
        );
      }, 1000 * _x);
    })(x);
  }
}

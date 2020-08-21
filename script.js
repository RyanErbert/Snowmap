
let passName = 'pow';
let passList = ['ANGEL FIRE RESORT NEW MEXICO', 'BOGUS BASIN IDAHO', 'BRIDGER BOWL MONTANA', 'CASTLE MOUNTAIN RESORT AB CANADA', 'CHINA PEAK CALIFORNIA', 'KIRORO JAPAN', 'LA PARVA CHILE', 'LOVELAND SKI AREA COLORADO', 'SKI MARMOT BASIN AB CANADA', 'MISSION RIDGE WASHINGTON', 'MONARCH MOUNTAIN COLORADO', 'MOUNTAIN HIGH CALIFORNIA', 'MT. HOOD SKIBOWL OREGON', 'SIERRA-AT-TAHOE CALIFORNIA', 'TIMBERLINE OREGON', 'WHITEWATER BC CANADA', 'WHITE PASS WASHINGTON'];

//**FOR GEOCODING** INSERT PASS NAME AND ARRAY ABOVE

const epicData = [
  {
    "location": "VAIL CO",
    "lat": 39.6402638,
    "lng": -106.3741955,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "BEAVER CREEK CO",
    "lat": 39.604225,
    "lng": -106.516515,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "WHISTLER BLACKCOMB BC",
    "lat": 50.1149643,
    "lng": -122.948513,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "BRECKENRIDGE CO",
    "lat": 39.4816537,
    "lng": -106.0383518,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "PARK CITY UT",
    "lat": 40.6460622,
    "lng": -111.4979729,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "KEYSTONE CO",
    "lat": 39.5791675,
    "lng": -105.9347384,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "HEAVENLY CA/NV",
    "lat": 38.9353481,
    "lng": -119.9399168,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "NORTHSTAR CA",
    "lat": 39.2745678,
    "lng": -120.1210934,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "KIRKWOOD CA",
    "lat": 38.7023082,
    "lng": -120.0722442,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "STOWE VT",
    "lat": 44.4654332,
    "lng": -72.6874023,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "WILMOT WI",
    "lat": 42.5130426,
    "lng": -88.1825133,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "AFTON ALPS MN",
    "lat": 44.8576608,
    "lng": -92.78780619999999,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "MT BRIGHTON MI",
    "lat": 42.54083,
    "lng": -83.8115217,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "PERISHER AUSTRALIA",
    "lat": -36.4055484,
    "lng": 148.4094358,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "FALLS CREEK AUSTRALIA",
    "lat": -36.8658814,
    "lng": 147.2869802,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "HOTHAM AUSTRALIA",
    "lat": -36.9752778,
    "lng": 147.1327778,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "OKEMO VT",
    "lat": 43.4018257,
    "lng": -72.7170416,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "MOUNT SUNAPEE NH",
    "lat": 43.31361099999999,
    "lng": -72.074167,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "CRESTED BUTTE CO",
    "lat": 38.8697146,
    "lng": -106.9878231,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "STEVENS PASS WA",
    "lat": 47.7462223,
    "lng": -121.0859328,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "MOUNT SNOW VT",
    "lat": 42.9602444,
    "lng": -72.9204014,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "ATTITASH MOUNTAIN RESORT NH",
    "lat": 44.082771,
    "lng": -71.229443,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "WILDCAT MOUNTAIN NH",
    "lat": 44.2640724,
    "lng": -71.2393036,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "CROTCHED MOUNTAIN NH",
    "lat": 42.9984151,
    "lng": -71.8736895,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "HUNTER MOUNTAIN NY",
    "lat": 42.2028872,
    "lng": -74.2246369,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "LIBERTY MOUNTAIN RESORT PA",
    "lat": 39.76366,
    "lng": -77.37545899999999,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "ROUNDTOP MOUNTAIN RESORT PA",
    "lat": 40.1094506,
    "lng": -76.9275492,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "WHITETAIL RESORT PA",
    "lat": 39.7417652,
    "lng": -77.9333126,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "JACK FROST PA",
    "lat": 41.1091686,
    "lng": -75.6563315,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "BIG BOULDER PA",
    "lat": 41.050189,
    "lng": -75.601282,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "ALPINE VALLEY OH",
    "lat": 41.52687,
    "lng": -81.259745,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "BOSTON MILLS OH",
    "lat": 41.2640987,
    "lng": -81.5632108,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "BRANDYWINE OH",
    "lat": 41.2640987,
    "lng": -81.5632108,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "MAD RIVER MOUNTAIN OH",
    "lat": 40.3180556,
    "lng": -83.6777778,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "HIDDEN VALLEY MO",
    "lat": 38.5295823,
    "lng": -90.64453309999999,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "SNOW CREEK MO",
    "lat": 39.4673048,
    "lng": -94.9707416,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "PAOLI PEAKS IN",
    "lat": 38.5555868,
    "lng": -86.5122305,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "TELLURIDE CO",
    "lat": 37.9374939,
    "lng": -107.8122852,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "SUN VALLEY ID",
    "lat": 43.6971294,
    "lng": -114.3517172,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "SNOWBASIN UT",
    "lat": 41.2130574,
    "lng": -111.8533442,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "FERNIE ALPINE RESORT",
    "lat": 49.46385369999999,
    "lng": -115.0866092,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "KICKING HORSE MOUNTAIN RESORT",
    "lat": 51.2975688,
    "lng": -117.0482516,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "KIMBERLEY ALPINE RESORT",
    "lat": 49.6880163,
    "lng": -116.0043731,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "NAKISKA SKI AREA",
    "lat": 50.9427038,
    "lng": -115.1510985,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "MONT-SAINTE ANNE",
    "lat": 47.075353,
    "lng": -70.90490299999999,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "STONEHAM",
    "lat": 42.4802469,
    "lng": -71.0999719,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "HAKUBA47 WINTER SPORTS PARK",
    "lat": 36.685,
    "lng": 137.8283333,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "HAKUBA CORTINA SNOW RESORT",
    "lat": 36.7763409,
    "lng": 137.8886568,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "ABLE HAKUBA GORYU",
    "lat": 36.6630825,
    "lng": 137.8365636,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "HAKUBA HAPPO-ONE SNOW RESORT",
    "lat": 36.7022164,
    "lng": 137.833887,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "HAKUBA IWATAKE SNOW FIELD",
    "lat": 36.715276,
    "lng": 137.85706,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "HAKUBA NORIKURA ONSEN SNOW RESORT",
    "lat": 36.7658832,
    "lng": 137.8739806,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "JIIGATAKE SNOW RESORT",
    "lat": 36.558551,
    "lng": 137.803716,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "KASHIMAYARI SKI RESORT",
    "lat": 36.5969431,
    "lng": 137.8254561,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "TSUGAIKE KOGEN SNOW RESORT",
    "lat": 36.7489715,
    "lng": 137.8661573,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "HAKUBA SANOSAKA SNOW RESORT",
    "lat": 36.629392,
    "lng": 137.841677,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "RUSUTSU JAPAN",
    "lat": 42.7373349,
    "lng": 140.8757346,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "SKIRAMA DOLOMITI",
    "lat": 46.4102117,
    "lng": 11.8440351,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "LES 3 VALLEES",
    "lat": 45.4840477,
    "lng": 6.5256494,
    "pass": "epic",
    "image": "images/epic.png"
  },
  {
    "location": "ARLBERG",
    "lat": 47.4257853,
    "lng": -120.311664,
    "pass": "epic",
    "image": "images/epic.png"
  }
];
const ikonData = [
  {
    "location": "STEAMBOAT CO",
    "lat": 40.4849769,
    "lng": -106.8317158,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "WINTER PARK CO",
    "lat": 39.8916537,
    "lng": -105.7630624,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "COPPER MOUNTAIN RESORT CO",
    "lat": 39.5021802,
    "lng": -106.1497037,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "ELDORA MOUNTAIN RESORT CO",
    "lat": 39.9372203,
    "lng": -105.5826786,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "SQUAW VALLEY ALPINE MEADOWS CA",
    "lat": 39.197607,
    "lng": -120.2354422,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "MAMMOTH MOUNTAIN CA",
    "lat": 37.6307692,
    "lng": -119.0326342,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "JUNE MOUNTAIN CA",
    "lat": 37.7679169,
    "lng": -119.0906293,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "BIG BEAR MOUNTAIN RESORT CA",
    "lat": 34.2363723,
    "lng": -116.8893206,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "STRATTON VT",
    "lat": 43.0428562,
    "lng": -72.9109334,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "SUGARBUSH RESORT VT",
    "lat": 44.1359019,
    "lng": -72.8944139,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "SNOWSHOE WV",
    "lat": 38.4132303,
    "lng": -79.9975177,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "CRYSTAL MOUNTAIN WA",
    "lat": 46.9281666,
    "lng": -121.5045349,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "TREMBLANT QC",
    "lat": 46.1184616,
    "lng": -74.5961852,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "BLUE MOUNTAIN ON",
    "lat": 44.50378180000001,
    "lng": -80.3122216,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "SOLITUDE MOUNTAIN RESORT UT",
    "lat": 40.619852,
    "lng": -111.591885,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "ASPEN SNOWMASS CO",
    "lat": 39.2083984,
    "lng": -106.9490961,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "ARAPAHOE BASIN SKI AREA CO",
    "lat": 39.6425118,
    "lng": -105.8719397,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "JACKSON HOLE MOUNTAIN RESORT WY",
    "lat": 43.5875453,
    "lng": -110.8279183,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "BIG SKY RESORT MT",
    "lat": 45.2857289,
    "lng": -111.4012076,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "KILLINGTON-PICO VT",
    "lat": 43.63677800000001,
    "lng": -72.792536,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "WINDHAM MOUNTAIN NY",
    "lat": 42.2937298,
    "lng": -74.2567116,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "BOYNE HIGHLANDS MI",
    "lat": 45.4707916,
    "lng": -84.935441,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "BOYNE MOUNTAIN MI",
    "lat": 45.162884,
    "lng": -84.930067,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "THE SUMMIT AT SNOQUALMIE WA",
    "lat": 47.42044,
    "lng": -121.4211049,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "MT. BACHELOR OR",
    "lat": 44.0028937,
    "lng": -121.6790714,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "SKIBIG3 AB",
    "lat": 51.1774406,
    "lng": -115.5710213,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "REVELSTOKE MOUNTAIN RESORT BC",
    "lat": 50.9583028,
    "lng": -118.1637752,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "CYPRESS MOUNTAIN BC",
    "lat": 49.396018,
    "lng": -123.204545,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "SUNDAY RIVER ME",
    "lat": 44.4734182,
    "lng": -70.8568727,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "SUGARLOAF ME",
    "lat": 45.0314444,
    "lng": -70.3131231,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "LOON MOUNTAIN NH",
    "lat": 44.03597,
    "lng": -71.6214399,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "TAOS SKI VALLEY NM",
    "lat": 36.5959999,
    "lng": -105.4545,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "DEER VALLEY RESORT UT",
    "lat": 40.63738,
    "lng": -111.478306,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "BRIGHTON RESORT UT",
    "lat": 40.598019,
    "lng": -111.583187,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "ALTA SNOWBIRD UT",
    "lat": 40.5884218,
    "lng": -111.6385807,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "ZERMATT SWITZERLAND",
    "lat": 46.0207133,
    "lng": 7.749117000000001,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "THREDBO AUSTRALIA",
    "lat": -36.5012959,
    "lng": 148.310377,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "MT BULLER AUSTRALIA",
    "lat": -37.1467949,
    "lng": 146.4489704,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "NISEKO UNITED JAPAN",
    "lat": 42.8474716,
    "lng": 140.6479506,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "VALLE NEVADO CHILE",
    "lat": -33.3538494,
    "lng": -70.2489324,
    "pass": "ikon",
    "image": "images/ikon.png"
  },
  {
    "location": "CORONET PEAK THE REMARKABLES MT HUTT NEW ZEALAND",
    "lat": -45.15,
    "lng": 168.8333333,
    "pass": "ikon",
    "image": "images/ikon.png"
  }
];
const mtnData = [
  {
    "location": "Alta Ski Area",
    "lat": 40.5884218,
    "lng": -111.6385807,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Arapahoe Basin",
    "lat": 39.6425118,
    "lng": -105.8719397,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Aspen Snowmass",
    "lat": 39.2083984,
    "lng": -106.9490961,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Banff Sunshine",
    "lat": 51.11518580000001,
    "lng": -115.7632758,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Big Sky Resort",
    "lat": 45.2857289,
    "lng": -111.4012076,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Chamonix France",
    "lat": 45.923697,
    "lng": 6.869433,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Coronet Peak NZ",
    "lat": -44.9271654,
    "lng": 168.7362725,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "The Remarkables NZ",
    "lat": -45.15,
    "lng": 168.8333333,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Grand Targhee Resort",
    "lat": 43.78711300000001,
    "lng": -110.959296,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Jackson Hole Mountain Resort",
    "lat": 43.5875453,
    "lng": -110.8279183,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Lake Louise",
    "lat": 51.4253705,
    "lng": -116.1772552,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Mammoth Mountain",
    "lat": 37.6307692,
    "lng": -119.0326342,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Mt Buller Australia",
    "lat": -37.1467949,
    "lng": 146.4489704,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Niseko United Japan",
    "lat": 42.8474716,
    "lng": 140.6479506,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Panorama Mountain Resort",
    "lat": 50.46037399999999,
    "lng": -116.238147,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Revelstoke Mountain Resort",
    "lat": 50.9583028,
    "lng": -118.1637752,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Snowbird",
    "lat": 40.5810196,
    "lng": -111.6568316,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Squaw Valley Alpine Meadows",
    "lat": 39.197607,
    "lng": -120.2354422,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Sugarbush Resort",
    "lat": 44.1359019,
    "lng": -72.8944139,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Sugarloaf",
    "lat": 45.0314444,
    "lng": -70.3131231,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Sun Peaks Resort",
    "lat": 50.8844311,
    "lng": -119.8859331,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Taos Ski Valley",
    "lat": 36.5959999,
    "lng": -105.4545,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Thredbo Alpine Village Australia",
    "lat": -36.5047125,
    "lng": 148.3042322,
    "pass": "mtn",
    "image": "images/mtn.png"
  },
  {
    "location": "Valle Nevado Chile",
    "lat": -33.3538494,
    "lng": -70.2489324,
    "pass": "mtn",
    "image": "images/mtn.png"
  }
];
const powData = [
  {
    "location": "ANGEL FIRE RESORT NEW MEXICO",
    "lat": 36.3866879,
    "lng": -105.2721983,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "BOGUS BASIN IDAHO",
    "lat": 43.7640569,
    "lng": -116.1026168,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "BRIDGER BOWL MONTANA",
    "lat": 45.8173562,
    "lng": -110.8966184,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "CASTLE MOUNTAIN RESORT AB CANADA",
    "lat": 49.3191188,
    "lng": -114.4125829,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "CHINA PEAK CALIFORNIA",
    "lat": 37.2364356,
    "lng": -119.1573708,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "KIRORO JAPAN",
    "lat": 43.0756111,
    "lng": 140.9823481,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "LA PARVA CHILE",
    "lat": -33.33701,
    "lng": -70.2892067,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "LOVELAND SKI AREA COLORADO",
    "lat": 39.6800375,
    "lng": -105.8979465,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "SKI MARMOT BASIN AB CANADA",
    "lat": 52.8011121,
    "lng": -118.0831592,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "MISSION RIDGE WASHINGTON",
    "lat": 47.2924657,
    "lng": -120.399871,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "MONARCH MOUNTAIN COLORADO",
    "lat": 38.5120635,
    "lng": -106.3319719,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "MOUNTAIN HIGH CALIFORNIA",
    "lat": 34.3769418,
    "lng": -117.6915242,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "MT. HOOD SKIBOWL OREGON",
    "lat": 45.3017422,
    "lng": -121.7724581,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "SIERRA-AT-TAHOE CALIFORNIA",
    "lat": 38.800887,
    "lng": -120.08093,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "TIMBERLINE OREGON",
    "lat": 45.3311281,
    "lng": -121.7110064,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "WHITEWATER BC CANADA",
    "lat": 49.4938756,
    "lng": -117.2936084,
    "pass": "pow",
    "image": "images/pow.png"
  },
  {
    "location": "WHITE PASS WASHINGTON",
    "lat": 46.63872569999999,
    "lng": -121.389528,
    "pass": "pow",
    "image": "images/pow.png"
  }
];


let markersArray = [];
let map, geocoder;

//initial creation of map and geocoder
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.481, lng: -106.038 },
    zoom: 8,
    styles: [
      {
        featureType: "all",
        elementType: "geometry.fill",
        stylers: [
          {
            weight: "2.00"
          }
        ]
      },
      {
        featureType: "all",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#9c9c9c"
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.text",
        stylers: [
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            color: "#f2f2f2"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "landscape.man_made",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#eeeeee"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#7b7b7b"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#46bcec"
          },
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#c8d7d4"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#070707"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      }
    ]
  });
  geocoder = new google.maps.Geocoder();

createMarkers(epicData);
createMarkers(ikonData);
createMarkers(mtnData);
createMarkers(powData);

}



//listener for geocode button (I did this in order to prevent too many server calls from automatic refreshes)
document.getElementById("submit").addEventListener("click", () => {
  geocodeAddress(geocoder, map);
});



function createMarkers(objectList){
for (var i = 0; i < objectList.length; i++) {
  let marker = new google.maps.Marker({
      map: map,
      position: {lat:objectList[i].lat,lng:objectList[i].lng},
      icon: objectList[i].image
    });
  }
};


//geocoder iterates through passList and places markers every second. final result can be saved
function geocodeAddress(_geocoder, _resultsMap) {
  for (var x = 0; x < passList.length; x++) {
    (function(_x) {
      setTimeout(function() {
        console.log(`${_geocoder},${_resultsMap},${_x}`);

        const address = passList[_x];
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
                pass: passName,
                image: `images/${passName}.png`
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

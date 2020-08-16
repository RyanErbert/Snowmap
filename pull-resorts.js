var totalprice = "";
var resorts = document.getElementsByClassName("pass-detail-destination-name");
var resortsList = [];
var resortsFiltered = "";
var resortsCSV = "";
for (var i = 0; i < resorts.length; i++) {
  var resort = resorts[i].innerText;
  resort = resort.replaceAll(",", "");
  resort = resort.toUpperCase();

  resortsList[i] = resort;
//   totalprice[i] = totalprice + `${price}, `;
};

resortsFiltered = Array.from(new Set(resortsList));


for(var j = 0;j < resortsFiltered.length;j++){

  resortsCSV = resortsCSV + `${resortsFiltered[j]}, `;
};
  console.log(resortsCSV);

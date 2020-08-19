//https://www.epicpass.com/passes/epic-pass.aspx
// var resorts = document.getElementsByClassName("c43__resort--v2 uppercase");

//https://www.ikonpass.com/en/shop-passes/ikon-pass-2020-2021
var resorts = document.getElementsByClassName("pass-detail-destination-name");



var resortsList = [];
var resortsFiltered = "";
var resortsCSV = "";

for (var i = 0; i < resorts.length; i++) {
  var resort = resorts[i].innerText;
  resort = resort.replaceAll(",", "");
  resort = resort.toUpperCase();
  resortsList[i] = resort;
};

resortsFiltered = Array.from(new Set(resortsList));

for(var j = 0;j < resortsFiltered.length;j++){
  resortsCSV = resortsCSV + `'${resortsFiltered[j]}', `;
};
console.log(resortsCSV);

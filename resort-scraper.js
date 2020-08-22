// lists pulled from:
// "https://www.epicpass.com/passes/epic-pass.aspx"
// "https://www.ikonpass.com/en/shop-passes/ikon-pass-2020-2021"
// "https://mountaincollective.com/"
// ""



//to use this script: visit the page you wish to scrape resort names from, insert className (class of div holding text), then run script in console and save results to a file
//this script will automatically remove duplicates
var className = 'insert html #class name here'

var resortsList = [];
var resortsFiltered = "";
var resortsCSV = "";

var resorts = document.getElementsByClassName(className);


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

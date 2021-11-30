var Pension = {
  lat: 36.373479893156436,
  lng: 127.55564559530826,
};
var WaterPlant = {
  lat: 36.390715528497786,
  lng: 127.55333494422845,
};
var OkcheonIjidang = {
  lat: 36.329501223993454,
  lng: 127.55583668204352,
};
var Busodamak = {
  lat: 36.3525462370134,
  lng: 127.56306911387192,
};
var MountainHwan = {
  lat: 36.36347457861638,
  lng: 127.54198237996678,
};
var DaecheongDam = {
  lat: 36.477499338521525,
  lng: 127.48083189812229,
};
var Cheongnamdae = {
  lat: 36.461811696802215,
  lng: 127.48918741651077,
};
var JanggyeTouristSite = {
  lat: 36.37638430811881,
  lng: 127.63596717958818,
};

let pointArr = [
  WaterPlant,
  OkcheonIjidang,
  Busodamak,
  MountainHwan,
  DaecheongDam,
  Cheongnamdae,
  JanggyeTouristSite,
];

// var originalPosition = document.getElementById("originalPosition");

// TDLocation.addEventListener("click", originalPosition);

// function originalPosition() {
//   Map(document.getElementById("map"), {
//     zoom: 14,
//     center: WaterPlant,
//   });
// }

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: WaterPlant,
  });
  var PensionMarker = new google.maps.Marker({
    position: Pension,
    map: map,
    title: "와우펜션",
  });
  var WPMarker = new google.maps.Marker({
    position: WaterPlant,
    map: map,
    title: "수생식물학습원",
  });
  var OIMarker = new google.maps.Marker({
    position: OkcheonIjidang,
    map: map,
    title: "옥천 이지당",
  });
  var BSDAMarker = new google.maps.Marker({
    position: Busodamak,
    map: map,
    title: "부소담악(추소정)",
  });
  var MtHMarker = new google.maps.Marker({
    position: MountainHwan,
    map: map,
    title: "고리산(환산)",
  });
  var DHDamMarker = new google.maps.Marker({
    position: DaecheongDam,
    map: map,
    title: "대청댐",
  });
  var CNDMarker = new google.maps.Marker({
    position: Cheongnamdae,
    map: map,
    title: "청남대",
  });
  var JTSMarker = new google.maps.Marker({
    position: JanggyeTouristSite,
    map: map,
    title: "장계관광지",
  });
}

let wideView = document.querySelector(".wideview");
wideView.addEventListener("click", wideview);
function wideview() {
  map.panTo(WaterPlant);
  map.setZoom(11);
}

$(".menu-tab").each((e, index) => {
  $(index).click(function () {
    map.panTo(pointArr[e]);
    map.setZoom(14);
  });
});

// let startWaterPlant = document.querySelector(".menu-waterPlant");
// startWaterPlant.addEventListener("click", changeCenter1);
// let startOkcheonIjidang = document.querySelector(".menu-ijidang");
// startOkcheonIjidang.addEventListener("click", changeCenter2);
// let startBusodamak = document.querySelector(".menu-busodamak");
// startBusodamak.addEventListener("click", changeCenter3);
// let startMountainHwan = document.querySelector(".menu-MtnHwan");
// startMountainHwan.addEventListener("click", changeCenter4);
// let startDaecheongDam = document.querySelector(".menu-DaecheongDam");
// startDaecheongDam.addEventListener("click", changeCenter5);
// let startCheongnamdae = document.querySelector(".menu-Cheongnamdae");
// startCheongnamdae.addEventListener("click", changeCenter6);
// let startJanggye = document.querySelector(".menu-JanggyeTouristSite");
// startJanggye.addEventListener("click", changeCenter7);

// function changeCenter1() {
//   map.panTo(WaterPlant);
//   map.setZoom(14);
// }
// function changeCenter2() {
//   map.panTo(OkcheonIjidang);
//   map.setZoom(14);
// }
// function changeCenter3() {
//   map.panTo(Busodamak);
//   map.setZoom(14);
// }
// function changeCenter4() {
//   map.panTo(MountainHwan);
//   map.setZoom(14);
// }
// function changeCenter5() {
//   map.panTo(DaecheongDam);
//   map.setZoom(14);
// }
// function changeCenter6() {
//   map.panTo(Cheongnamdae);
//   map.setZoom(14);
// }
// function changeCenter7() {
//   map.panTo(JanggyeTouristSite);
//   map.setZoom(14);
// }

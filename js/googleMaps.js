/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
   //initialize();
   //calcRoute();
});
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var kohChang = new google.maps.LatLng(12.052758, 102.335248); //12.052758, 102.335248
    var mapOptions = {
        zoom: 11,
        center: kohChang
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    directionsDisplay.setMap(map);
    calcRoute();
}

function calcRoute() {
    //var start = document.getElementById('start').value;
    //var end = document.getElementById('end').value;
    var request = {
        origin: '12.141545,102.280992', //start,
        destination: '11.965310,102.311419',
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

function fsMap(){
    
}
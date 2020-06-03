d3.csv("resources/sfpd_crime_data", function(data) {
    console.log(data);

//     var heatArray = [];

//     for (var i = 0; i < data.length; i++) {
//         var location = data[i].location;

//         if (location) {
//             heatArray.push([location.coordinates[1], location.coordinates[0]]);
//         }
//     }

//     var heat = L.heatLayer(heatArray, {
//         radius: 20,
//         blur: 35
//     }).addTo(myMap);

});
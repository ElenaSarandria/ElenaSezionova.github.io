// var myMap = L.map("map", {
//     center: [37.7749, -122.4194],
//     zoom: 13
//   });
  
//   // Adding tile layer to the map
//   L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   }).addTo(myMap);
  
  // Load data 
  d3.csv("resources/sfpd_crime_data.csv", function(data) {
  
    console.log(data);

    heatArrayoverall = [];
    heatArrayfirstsix = [];
    heatArraylastsix = [];
    heatArray1 = [];
    heatArray2 = [];
    heatArray3 = [];
    heatArray4 = [];
    heatArray5 = [];
    heatArray6 = [];
    heatArray7 = [];
    heatArray8 = [];
    heatArray9 = [];
    heatArray10 = [];
    heatArray11 = [];
    heatArray12 = [];

    function lastsix(crime_data) {
        return parseInt(crime_data.crime_month) >= 7;
      }
    var lastsixfiltered = data.filter(lastsix);
    console.log(lastsixfiltered);

    function firstsix(crime_data) {
        return parseInt(crime_data.crime_month) <= 6;
      }
    var firstsixfiltered = data.filter(firstsix);
    console.log(firstsixfiltered);

    function crime1(crime_data) {
      return crime_data.category == "ASSAULT";
    }
    var assaultfiltered = data.filter(crime1);
    console.log(assaultfiltered);

    function crime2(crime_data) {
      return crime_data.category == "OTHER OFFENSES";
    }
    var otherfiltered = data.filter(crime2);
    console.log(otherfiltered);
    
    function crime3(crime_data) {
      return crime_data.category == "NON-CRIMINAL";
    }
    var nonfiltered = data.filter(crime3);
    console.log(nonfiltered);
    
    function crime4(crime_data) {
      return crime_data.category == "LARCENY/THEFT";
    }
    var theftfiltered = data.filter(crime4);
    console.log(theftfiltered);
  
    function crime5(crime_data) {
      return crime_data.category == "VANDALISM";
    }
    var vanfiltered = data.filter(crime5);
    console.log(vanfiltered);

    // the month filters

    function jan_data(crime_data) {
        return crime_data.crime_month == "01";
      }
      var janfilteredCrimes = data.filter(jan_data);
      console.log(janfilteredCrimes);
    
      function feb_data(crime_data) {
        return crime_data.crime_month == "02";
      }
      var febfilteredCrimes = data.filter(feb_data);
      console.log(febfilteredCrimes);
    
      function mar_data(crime_data) {
        return crime_data.crime_month == "03";
      }
      var marfilteredCrimes = data.filter(mar_data);
      console.log(marfilteredCrimes);

      function apr_data(crime_data) {
        return crime_data.crime_month == "04";
      }
      var aprfilteredCrimes = data.filter(apr_data);
      console.log(aprfilteredCrimes);
    
      function may_data(crime_data) {
        return crime_data.crime_month == "05";
      }
      var mayfilteredCrimes = data.filter(may_data);
      console.log(mayfilteredCrimes);
    
      function jun_data(crime_data) {
        return crime_data.crime_month == "06";
      }
      var junfilteredCrimes = data.filter(jun_data);
      console.log(junfilteredCrimes);
    
      function jul_data(crime_data) {
        return crime_data.crime_month == "07";
      }
      var julfilteredCrimes = data.filter(jul_data);
      console.log(julfilteredCrimes);
    
      function aug_data(crime_data) {
        return crime_data.crime_month == "08";
      }
      var augfilteredCrimes = data.filter(aug_data);
      console.log(augfilteredCrimes);
    
      function sep_data(crime_data) {
        return crime_data.crime_month == "09";
      }
      var sepfilteredCrimes = data.filter(sep_data);
      console.log(sepfilteredCrimes);
    
      function oct_data(crime_data) {
        return crime_data.crime_month == "10";
      }
      var octfilteredCrimes = data.filter(oct_data);
      console.log(octfilteredCrimes);
    
      function nov_data(crime_data) {
        return crime_data.crime_month == "11";
      }
      var novfilteredCrimes = data.filter(nov_data);
      console.log(novfilteredCrimes);
    
      function dec_data(crime_data) {
        return crime_data.crime_month == "12";
      }
      var decfilteredCrimes = data.filter(dec_data);
      console.log(decfilteredCrimes);
    
    
    // Create a new marker cluster group
  var markers = L.markerClusterGroup();
    // Loop through data
    for (var i = 0; i < data.length; i++) {
  
      // Set the data location property to a variable
      var latitude = data[i].latitude;
      var longitude = data[i].longitude;
  
      // Check for location property
      if (location) {
        heatArrayoverall.push([latitude, longitude]);


      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L
        .marker([latitude, longitude]) 
        .bindPopup(data[i].category));

        var markerheat = L.heatLayer(heatArrayoverall, {
        radius: 20,
        blur: 35
        });
      }
  
    }

var first = L.markerClusterGroup();
// Loop through data
    for (var i = 0; i < firstsixfiltered.length; i++) {
  
      // Set the data location property to a variable
      var latitude = firstsixfiltered[i].latitude;
      var longitude = firstsixfiltered[i].longitude;
  
      // Check for location property
      if (location) {
        heatArrayoverall.push([latitude, longitude]);


      // Add a new marker to the cluster group and bind a pop-up
      first.addLayer(L
        .marker([latitude, longitude]) 
        .bindPopup(firstsixfiltered[i].category));

        var firstheat = L.heatLayer(heatArrayoverall, {
        radius: 20,
        blur: 35
        });
      }
  
    }

var last = L.markerClusterGroup();
    // Loop through data
        for (var i = 0; i < lastsixfiltered.length; i++) {
      
          // Set the data location property to a variable
          var latitude = lastsixfiltered[i].latitude;
          var longitude = lastsixfiltered[i].longitude;
      
          // Check for location property
          if (location) {
            heatArraylastsix.push([latitude, longitude]);
    
    
          // Add a new marker to the cluster group and bind a pop-up
          last.addLayer(L
            .marker([latitude, longitude]) 
            .bindPopup(lastsixfiltered[i].category));
    
            var lastheat = L.heatLayer(heatArraylastsix, {
            radius: 20,
            blur: 35
            });
          }
      
        }

  var assault = L.markerClusterGroup();
    // Loop through data
      for (var i = 0; i < assaultfiltered.length; i++) {
  
          // Set the data location property to a variable
          var latitude = assaultfiltered[i].latitude;
          var longitude = assaultfiltered[i].longitude;
  
          // Check for location property
          if (location) {
  
          // Add a new marker to the cluster group and bind a pop-up
          assault.addLayer(L.marker([latitude, longitude])
              .bindPopup(assaultfiltered[i].category));
          }
  
      }

  var other = L.markerClusterGroup();
  // Loop through data
    for (var i = 0; i < otherfiltered.length; i++) {

        // Set the data location property to a variable
        var latitude = otherfiltered[i].latitude;
        var longitude = otherfiltered[i].longitude;

        // Check for location property
        if (location) {

        // Add a new marker to the cluster group and bind a pop-up
        other.addLayer(L.marker([latitude, longitude])
            .bindPopup(otherfiltered[i].category));
        }

    }

  var non = L.markerClusterGroup();
    // Loop through data
      for (var i = 0; i < nonfiltered.length; i++) {
  
          // Set the data location property to a variable
          var latitude = nonfiltered[i].latitude;
          var longitude = nonfiltered[i].longitude;
  
          // Check for location property
          if (location) {
  
          // Add a new marker to the cluster group and bind a pop-up
          non.addLayer(L.marker([latitude, longitude])
              .bindPopup(nonfiltered[i].category));
          }
  
      }   

  var theft = L.markerClusterGroup();
      // Loop through data
        for (var i = 0; i < theftfiltered.length; i++) {
    
            // Set the data location property to a variable
            var latitude = theftfiltered[i].latitude;
            var longitude = theftfiltered[i].longitude;
    
            // Check for location property
            if (location) {
    
            // Add a new marker to the cluster group and bind a pop-up
            theft.addLayer(L.marker([latitude, longitude])
                .bindPopup(theftfiltered[i].category));
            }
    
        }

  var van = L.markerClusterGroup();
  // Loop through data
    for (var i = 0; i < vanfiltered.length; i++) {

        // Set the data location property to a variable
        var latitude = vanfiltered[i].latitude;
        var longitude = vanfiltered[i].longitude;

        // Check for location property
        if (location) {

        // Add a new marker to the cluster group and bind a pop-up
        van.addLayer(L.marker([latitude, longitude])
            .bindPopup(vanfiltered[i].category));
        }

      }

    
        // Create a new marker cluster group
  var jan = L.markerClusterGroup();
  // Loop through data
    for (var i = 0; i < janfilteredCrimes.length; i++) {

        // Set the data location property to a variable
        var latitude = janfilteredCrimes[i].latitude;
        var longitude = janfilteredCrimes[i].longitude;

                // Check for location property
                if (location) {
                  heatArray1.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                jan.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(janfilteredCrimes[i].category));

                  var janheat = L.heatLayer(heatArray1, {
                  radius: 20,
                  blur: 35
                  });
        }

    }

    var feb = L.markerClusterGroup();
  // Loop through data
        for (var i = 0; i < febfilteredCrimes.length; i++) {

            // Set the data location property to a variable
            var latitude = febfilteredCrimes[i].latitude;
            var longitude = febfilteredCrimes[i].longitude;

                // Check for location property
                if (location) {
                  heatArray2.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                feb.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(febfilteredCrimes[i].category));

                  var febheat = L.heatLayer(heatArray2, {
                  radius: 20,
                  blur: 35
                  });
            }

    }
    // Create a new marker cluster group
    var mar = L.markerClusterGroup();
    // Loop through data
        for (var i = 0; i < marfilteredCrimes.length; i++) {
    
            // Set the data location property to a variable
            var latitude = marfilteredCrimes[i].latitude;
            var longitude = marfilteredCrimes[i].longitude;
    
                // Check for location property
                if (location) {
                  heatArray3.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                mar.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(marfilteredCrimes[i].category));

                  var marchheat = L.heatLayer(heatArray3, {
                  radius: 20,
                  blur: 35
                  });
            }
    
        }
 var apr = L.markerClusterGroup();
    // Loop through data
        for (var i = 0; i < aprfilteredCrimes.length; i++) {
    
            // Set the data location property to a variable
            var latitude = aprfilteredCrimes[i].latitude;
            var longitude = aprfilteredCrimes[i].longitude;
    
                // Check for location property
                if (location) {
                  heatArray4.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                apr.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(aprfilteredCrimes[i].category));

                  var aprheat = L.heatLayer(heatArray4, {
                  radius: 20,
                  blur: 35
                  });
            }
    
        }
 var may = L.markerClusterGroup();
        // Loop through data
            for (var i = 0; i < mayfilteredCrimes.length; i++) {
        
                // Set the data location property to a variable
                var latitude = mayfilteredCrimes[i].latitude;
                var longitude = mayfilteredCrimes[i].longitude;
        
                // Check for location property
                if (location) {
                  heatArray5.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                may.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(mayfilteredCrimes[i].category));

                  var mayheat = L.heatLayer(heatArray5, {
                  radius: 20,
                  blur: 35
                  });
                }
        
            }
    var june = L.markerClusterGroup();
        // Loop through data
            for (var i = 0; i < junfilteredCrimes.length; i++) {
        
                // Set the data location property to a variable
                var latitude = junfilteredCrimes[i].latitude;
                var longitude = junfilteredCrimes[i].longitude;
        
                // Check for location property
                if (location) {
                  heatArray6.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                june.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(junfilteredCrimes[i].category));

                  var juneheat = L.heatLayer(heatArray6, {
                  radius: 20,
                  blur: 35
                  });
                }
        
            }
    var jul = L.markerClusterGroup();
        // Loop through data
            for (var i = 0; i < julfilteredCrimes.length; i++) {
        
                // Set the data location property to a variable
                var latitude = julfilteredCrimes[i].latitude;
                var longitude = julfilteredCrimes[i].longitude;
        
                // Check for location property
                if (location) {
                  heatArray7.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                jul.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(julfilteredCrimes[i].category));

                  var julheat = L.heatLayer(heatArray7, {
                  radius: 20,
                  blur: 35
                  });
                }
        
            }
    var aug = L.markerClusterGroup();
        // Loop through data
            for (var i = 0; i < augfilteredCrimes.length; i++) {
        
                // Set the data location property to a variable
                var latitude = augfilteredCrimes[i].latitude;
                var longitude = augfilteredCrimes[i].longitude;
        
                // Check for location property
                if (location) {
                  heatArray8.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                aug.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(augfilteredCrimes[i].category));

                  var augheat = L.heatLayer(heatArray8, {
                  radius: 20,
                  blur: 35
                  });
                }
        
            }
    var sep = L.markerClusterGroup();
        // Loop through data
            for (var i = 0; i < sepfilteredCrimes.length; i++) {
        
                // Set the data location property to a variable
                var latitude = sepfilteredCrimes[i].latitude;
                var longitude = sepfilteredCrimes[i].longitude;
        
                // Check for location property
                if (location) {
                  heatArray9.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                sep.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(sepfilteredCrimes[i].category));

                  var sepheat = L.heatLayer(heatArray9, {
                  radius: 20,
                  blur: 35
                  });
                }
        
            }

    var oct = L.markerClusterGroup();
        // Loop through data
            for (var i = 0; i < octfilteredCrimes.length; i++) {
        
                // Set the data location property to a variable
                var latitude = octfilteredCrimes[i].latitude;
                var longitude = octfilteredCrimes[i].longitude;
        
                // Check for location property
                if (location) {
                  heatArray10.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                oct.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(octfilteredCrimes[i].category));

                  var octheat = L.heatLayer(heatArray10, {
                  radius: 20,
                  blur: 35
                  });
                }
        
            }
    var nov = L.markerClusterGroup();
        // Loop through data
            for (var i = 0; i < novfilteredCrimes.length; i++) {
        
                // Set the data location property to a variable
                var latitude = novfilteredCrimes[i].latitude;
                var longitude = novfilteredCrimes[i].longitude;
        
                // Check for location property
                if (location) {
                  heatArray11.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                nov.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(novfilteredCrimes[i].category));

                  var novheat = L.heatLayer(heatArray11, {
                  radius: 20,
                  blur: 35
                  });

                }
        
            }
    var dec = L.markerClusterGroup();
        // Loop through data
            for (var i = 0; i < decfilteredCrimes.length; i++) {
        
                // Set the data location property to a variable
                var latitude = decfilteredCrimes[i].latitude;
                var longitude = decfilteredCrimes[i].longitude;
        
                // Check for location property
                if (location) {
                  heatArray12.push([latitude, longitude]);

        
                // Add a new marker to the cluster group and bind a pop-up
                dec.addLayer(L
                  .marker([latitude, longitude]) 
                  .bindPopup(decfilteredCrimes[i].category));

                  var decheat = L.heatLayer(heatArray12, {
                  radius: 20,
                  blur: 35
                  });

                }
              }


// Define streetmap and darkmap layers
var pirates = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.pirates",
    accessToken: API_KEY
  });

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
  });

var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  });

  // Create two separate layer groups: one for cities and one for states
// var crimes = L.layerGroup(markers);

// Create a baseMaps object
var baseMaps = {
  "Pirate Map": pirates,
  "Dark Map": darkmap,
  "Street Map": streetmap
};

// Create an overlay object
var overlayMaps = {
    "Crimes": markers,
    // "Overall Heatmap": markerheat,
    "Assault": assault,
    "Other Offenses": other,
    "Non-Criminal": non,
    "Larceny/Theft": theft,
    "Vandalism": van
};


// Define a map object
var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 13,
    layers: [streetmap, markers],
  });


  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  });
  

//  

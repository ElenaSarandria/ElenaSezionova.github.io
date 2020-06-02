// from data.js
var tableData = data;
console.log(tableData);

//var table = d3.select("table");
//table.attr("class", "table table-striped");
var tbody = d3.select("tbody");

//Loop through all data
tableData.forEach(function(td) {
    console.log(td);
});

tableData.forEach(function(td) {
    console.log(td);
    var row = tbody.append("tr");
});

tableData.forEach(function(td) {
    console.log(td);
    var row = tbody.append("tr");
    Object.entries(td).forEach(function([key, value]) {
        console.log(key, value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});



// Getting a reference to the button and getting a reference to the input element on the page 
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html(" ");
    //d3.event.preventDefault();


    // Input fields can trigger a change event when new text is entered.
    var dateInputField = d3.select("#datetime");
    var cityInputField = d3.select("#cityname");
    var stateInputField = d3.select("#statename");
    var countryInputField = d3.select("#countryname");
    var shapeInputField = d3.select("#shapename");
    var durationInputField = d3.select("#durationname");

    // Get the value property of the input element
    var dateValue = dateInputField.property("value").trim();
    var cityValue = cityInputField.property("value").toLowerCase().trim();
    var stateValue = stateInputField.property("value").toLowerCase().trim();
    var countryValue = countryInputField.property("value").toLowerCase().trim();
    var shapeValue = shapeInputField.property("value").toLowerCase().trim();
    var durationValue = durationInputField.property("value").toLowerCase().trim();

    //For multiple filters need to create if statements
    var fd = tableData.filter(entry => entry.datetime === dateValue ||
        entry.city === cityValue ||
        entry.state === stateValue ||
        entry.country === countryValue ||
        entry.shape === shapeValue ||
        entry.durationMinutes === durationValue);
    console.log(fd);


    fd.forEach(function(select) {
        console.log(select);
        var row = tbody.append("tr");
        Object.entries(select).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

//Getting a reference to the clear button
var clearButton = d3.select("#clear-btn");
clearButton.on("click", function() {
    location.reload();
});


/*if (dateValue != "") {
        tableData = tableData.filter(entry => entry.datetime === dateValue);
    }
    else if (cityValue != "") {
        tableData = tableData.filter(entry => entry.city === cityValue);
    }
    else if (stateValue != "") {
        tableData = tableData.filter(entry => entry.state === stateValue);
    }
    else if (countryValue != "") {
        tableData = tableData.filter(entry => entry.country === countryValue);
    }
    else if (shapeValue != "") {
        tableData = tableData.filter(entry => entry.shape === shapeValue);
    }
    else if (durationValue != "") {
        tableData = tableData.filter(entry => entry.durationMinutes === durationValue);
    }
    else{
        tbody.append("tr").append("td").text("No results found!")
    }
    console.log(tableData);
});*/





//Method #2
/*function tb() {
    $("#tbodyid").empty();
    console.log(tableData);
    tableData.forEach((td) => {
        var row = tbody.append("tr");
        Object.entries(td).forEach(([key, value]) => {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};*/
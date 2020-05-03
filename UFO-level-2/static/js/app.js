// import data from data.js
var tableData = data;

// button event listener
var button = d3.select("button");
var form = d3.select("form");

function handleClick() {

    // prevent page from refreshing
    d3.event.preventDefault();

    // select datetime input from form
    var inputDate = d3.select("#datetime").property("value");

    // filter data using the date from the form input
    var filterData = data.filter(sighting => sighting.datetime ===inputDate);

    // dynamically build table rows using new data
    var tbody = d3.select("tbody");
    filterData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

button.on("click", handleClick);
form.on("submit", handleClick);
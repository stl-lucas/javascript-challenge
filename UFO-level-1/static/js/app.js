// import data from data.js
var tableData = data;

// button event listener
var button = d3.select("button");
var form = d3.select("form");

function handleClick() {

    // prevent page from refreshing
    d3.event.preventDefault();

    // locate table and tbody
    var table = d3.select("table");
    var tbody = d3.select("tbody");

    // dynamically remove table rows using new data
    tbody.remove();
    table.append("tbody");

    // select datetime input from form
    var inputDate = d3.select("#datetime").property("value");

    // filter data using the date from the form input
    var filterData = data
    
    if (inputDate) {
        filterData = filterData.filter(sighting => sighting.datetime === inputDate);
    }

    // dynamically build table rows using new data
    var tbody = d3.select("tbody");
    if (filterData.length > 0) {
        filterData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
            })
        })
    }
    else {
        var row = tbody.append("tr");
        var cell = row.append("td");
        cell.attr("colspan", "7");
        cell.text("Sorry, no data was found for these filters.");
    }
}

button.on("click", handleClick);
form.on("submit", handleClick);
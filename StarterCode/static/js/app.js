// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table
var tbody  = d3.select("tbody");
// Function Build Table
function buildTable(data){
// Start By Clearing Existing Data
tbody.html("");
// Loop Through `data` 
data.forEach((dataRow) => {
     // Append Table Row `tr` to the Table Body `tbody`
     var row = tbody.append("tr");
     // `Object.values` & `forEach` to Iterate Through Values
     Object.values(dataRow).forEach((value) => {
         // Append a Cell to the Row for Each Value
         var cell = row.append("td");
         cell.text(value);
     });
 })
}

// When the Button is Clicked
function ButtonClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;
    // Check if a Date was Entered & Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}

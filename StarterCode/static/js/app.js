// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table
var tbody  = d3.select("tbody");
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

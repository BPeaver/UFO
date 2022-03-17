// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html(""); // sets the table to an empty string to clear it for data
  

// Function to populate the table
  data.forEach((dataRow) => { // sets a for loop to go through each row of data
    let row = tbody.append("tr"); // declares row variable, tells JS to find <tbody> tags and add row to table 'tr'
    Object.values(dataRow).forEach((val) => { // tells JS to reference one object from UFO array, adds values to dataRow, and the .forEach() specifies 1 value per row
      let cell = row.append("td"); // appends data into table data tag <td>
      cell.text(val); // variable "cell" holds only the text value from the object
      }
    );
  });
}
// Setting up function to add clickable button for filtering
function handleClick() {
    let date = d3.select("#datetime").property("value"); // variable 'date' created, uses d3 to select the #datetime id in HTML tags, .property('value') grabs the data and holds in 'date' varabiable
    let filteredData = tableData; // sets original tableData variable (raw data) to new filteredData variable
    if (date) { 
        filteredData = filteredData.filter(row => row.datetime === date); // apply the .filter() method to match the datetime value to the filtered data value
    };
    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
// Build the table when the page loads
buildTable(tableData);
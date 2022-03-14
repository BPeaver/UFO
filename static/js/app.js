// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html(""); // sets the table to an empty string to clear it for data
  }

  data.forEach((dataRow) => { // sets a for loop to go through each row of data
    let row = tbody.append("tr"); // declares row variable, tells JS to find <tbody> tags and add row to table 'tr'
    Object.values(dataRow).forEach((val) => { // tells JS to reference one object from UFO array, adds values to dataRow, and the .forEach() specifies 1 value per row
      let cell = row.append("td"); // appends data into table data tag <td>
      cell.text(val); // variable "cell" holds only the text value from the object
      }
    );
  });
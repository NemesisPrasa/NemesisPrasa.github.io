let SHEET_ID = '1LhUdsOoL6kBdYfyqgeeIXInB5weA_wjuG6FnVc5EX1E';
let SHEET_TITLE = 'itzy spotify';
let SHEET_RANGE = 'A1:B11,AQ:AQ11';
let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
  .then(res => res.text())
  .then(rep => {
    // Parse the response using a regular expression
    let match = rep.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
    if (match) {
      let data = JSON.parse(match[1]);
      // You can now work with the data and display it on your webpage
     

      // Example: Display data in a table
      let table = document.createElement('table');
      let tbody = document.createElement('tbody');

      for (let row of data.table.rows) {
        let tr = document.createElement('tr');
        for (let cell of row.c) {
          let td = document.createElement('td');
           if (typeof cell.v === 'number') {
              // Format numbers with commas and no decimals
              td.textContent = cell.v.toLocaleString('en-US', { maximumFractionDigits: 0 });
            } else {
              td.textContent = cell ? cell.v : ''; // Display cell value, if available
            } // Display cell value, if available
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }

      table.appendChild(tbody);
      document.getElementById('data-container').appendChild(table);
    } else {
      console.error('Failed to parse data.');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


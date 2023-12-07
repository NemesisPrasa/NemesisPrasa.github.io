
const chartData = {
  labels: ['Aug', 'Sap', 'Oct', 'Nov',],
  datasets: [
    {
      label: 'YouTube',
      data: [ 34827985, 49022166, 59369779, 66390272],
      borderColor: '#00ffb7',   // Green color for the line
      backgroundColor: 'rgba(0, 255, 183, 0.3)',   // Green fill with transparency
      borderWidth: 1.5,           // Adjust the line thickness
      fill: true,               // Fill the area under the line
      tension: 0.4,
      pointRadius: 0,// Adjust the line curve (0 is straight, 1 is very curved)
    },


    // Add more datasets for other videos as needed
  ],
};

const chartConfig = {
  type: 'line',
  data: chartData,
  options: {
    legend: {
      display: false,
      tooltips: {
      enabled: false, // Set this to false to hide tooltips
    },
      labels: {
        // Customize the legend label appearance
        usePointStyle: false, // Do not use point style (square)
        fontColor: 'white', // Set the font color to match the line color
      },
    
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: 'Time Period',
          align: 'end',
        },
        ticks: {
          color: 'white',
          align: 'end', // Change the X axis labels color
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          align: 'center',
          text: 'Daily Views',
          
        },
        ticks: {
          color: 'white', // Change the Y axis labels color
        },
        min: 0,
      },
    },
  },
};

const melonChart = new Chart(document.getElementById('melonChart'), chartConfig);

/*
const weeks = ["week 1", "week 2", "week 3","week 4","week5", "week6"];
const song1Views = [1888778,1454615,1114717,1160952,976888,830928];
const song2Views = [3156190, 1445071, 996800, 857434, 723985, 710214];



// Get the canvas element and create a chart
const ctx = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: weeks,
        datasets: [
            {
                label: "Spotify",
                data: song1Views,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            },
            {
                label: "Youtube",
                data: song2Views,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: 'Time Period',
        },
        ticks: {
          color: 'white', // Change the X axis labels color
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Daily Views',
        },
        ticks: {
          color: 'white', // Change the Y axis labels color
        },
        min: 0,
      },
    },
    }
});

*/


const weeks = ["Aug", "Sap", "Oct","Nov",];
const song1Views = [34827985, 14194181, 10347613, 7020493,];



// Get the canvas element and create a chart
const ctx = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: weeks,
        datasets: [
            {
                label: "Youtube",
                data: song1Views,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }
            
        ]
    },
    options: {
        scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: 'Time Period',
        },
        ticks: {
          color: 'white', // Change the X axis labels color
        },
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Daily Views',
        },
        ticks: {
          color: 'white', // Change the Y axis labels color
        },
        min: 0,
      },
    },
    }
});
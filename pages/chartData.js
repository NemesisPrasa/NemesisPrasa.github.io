
const chartData = {
  labels: ['08.06', '08.13', '08.20', '08.27','09.03','09.10','09.17','09.24','10.01', '10.08'],
  datasets: [
    {
      label: false,
      data: [ 13127188,5390059,5795033,4922844,4383899,3411742,3146415,3143665,3042911, 2724364],
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
  },
};

const melonChart = new Chart(document.getElementById('melonChart'), chartConfig);


const weeks = ["day 1", "day 2", "day 3","day 4", "day 5", "day 6","day 7",];
const song1Views = [101451, 470410, 781385, 1080652, 1352058, 1612639, 1888778];
const song2Views = [1038411, 1584743, 1984141, 2324222, 2623477, 2894306, 3156190];

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
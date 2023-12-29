
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


const chartDataBornToBe = {
  labels: ['12.18','12.19', '12.20', '12.21', '12.22', '12.23', '12.24', '12.25', '12.26', '12.27', '12.28', '12.29'],
  datasets: [
    {
      label: 'BTB',
      data: [ 0, 3265045, 4666849, 5543391, 6150551, 6735411, 7249764, 7713969, 8103857, 8426029, 8757176, 9089582],
      borderColor: '#00ffb7',   // Green color for the line
      backgroundColor: 'rgba(0, 255, 183, 0.3)',   // Green fill with transparency
      borderWidth: 1.5,           // Adjust the line thickness
      fill: false,               // Fill the area under the line
      tension: 0.4,
      pointRadius: 0,// Adjust the line curve (0 is straight, 1 is very curved)
    },

    {
      label: 'COMH',
      data: [ 0, 0, 0, 1379276, 1829514, 2189612, 2399230, 2610541, 2778744, 2883571, 3049166, 3165093],
      borderColor: '#f56a27',   // Green color for the line
      backgroundColor: 'rgba(245, 106, 39, 0.3)',   // Green fill with transparency
      borderWidth: 1.5,           // Adjust the line thickness
      fill: false,               // Fill the area under the line
      tension: 0.4,
      pointRadius: 0,// Adjust the line curve (0 is straight, 1 is very curved)
    },

    {
      label: 'Run Away',
      data: [0, 0, 0, 0, 0, 898707, 1288236, 1451521, 1613435, 1753008, 1931050, 2047215],
      borderColor: '#f5ee27',   // Green color for the line
      backgroundColor: 'rgba(245, 238, 39, 0.3)',   // Green fill with transparency
      borderWidth: 1.5,           // Adjust the line thickness
      fill: false,               // Fill the area under the line
      tension: 0.4,
      pointRadius: 0,// Adjust the line curve (0 is straight, 1 is very curved)
    },

    {
      label: 'Mine',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 744548, 953713, 1182671, 1305335],
      borderColor: '#dbebea',   // Green color for the line
      backgroundColor: 'rgba(219, 235, 234, 0.3)',   // Green fill with transparency
      borderWidth: 1.5,           // Adjust the line thickness
      fill: false,               // Fill the area under the line
      tension: 0.4,
      pointRadius: 0,// Adjust the line curve (0 is straight, 1 is very curved)
    },

    {
      label: 'Yet,But',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 934493, 1237452],
      borderColor: '#ff3ca1',   // Green color for the line
      backgroundColor: 'rgba(255, 60, 161, 0.3)',   // Green fill with transparency
      borderWidth: 1.5,           // Adjust the line thickness
      fill: false,               // Fill the area under the line
      tension: 0.4,
      pointRadius: 0,// Adjust the line curve (0 is straight, 1 is very curved)
    },


    // Add more datasets for other videos as needed
  ],
};

const chartConfigBornToBe = {
  type: 'line',
  data: chartDataBornToBe,
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

const BornToBe = new Chart(document.getElementById('ChartBornToBe'), chartConfigBornToBe);


const days = ["D1", "D2", "D3", "D4"];
const BTBViews = [3265045,1401804, 876542, 607160];
const COMHViews = [1379206, 450238, 360098, 209618];
const RAViews = [898707, 389529, 163285, 161914];
const MineViews = [744548,209165,228958,122664];
const YetButViews = [934493, 302959,0,0];



// Get the canvas element and create a chart
const ctxBTB = document.getElementById("barChartBTB").getContext("2d");
const barChartBTB = new Chart(ctxBTB, {
    type: "bar",
    data: {
        labels: days,
        datasets: [
            {
                label: "BTB",
                data: BTBViews,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            },
            {
              label: "COMH",
              data: COMHViews,
              backgroundColor: "rgba(245, 106, 39, 0.6)",
                borderColor: "rgba(245, 106, 39, 1)",
              borderWidth: 1
          },
          {
                label: "Run Away",
                data: RAViews,
                backgroundColor: "rgba(245, 238, 39, 0.6)",
                borderColor: "rgba(245, 238, 39, 1)",
                borderWidth: 1
            },
            {
              label: "Mine",
              data: MineViews,
              backgroundColor: "rgba(219, 235, 234, 0.6)",
              borderColor: "rgba(219, 235, 234, 1)",
              borderWidth: 1
          },
          {
            label: "Yet,But",
            data: YetButViews,
            backgroundColor: "rgba(255, 60, 161, 0.6)",
            borderColor: "rgba(255, 60, 161, 1)",
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
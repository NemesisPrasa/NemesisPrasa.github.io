gapi.load('client', () => {
    gapi.client.init({
      apiKey: 'AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E',
    });
    gapi.client.load('youtube', 'v3', () => {
      // List of video data objects with video IDs, daily views, milestones, and div IDs
      const videos = [
        { videoId: '0bIRwBpBcZQ', dailyViews: 110000, milestoneViews: 80000000, mainMileViews:100000000, divId: 'video2' , NextMile:'Est. Date for 80M ~ ', NextMileMain:'Est. Date for 100M ~ '},
        { videoId: 'K0xFPQ2CX5E', dailyViews: 20000, milestoneViews: 15000000, mainMileViews:20000000, divId: 'video10' ,NextMile:'Est. Date for 15M ~ ', NextMileMain:'Est. Date for 20M ~ '},
        { videoId: 'RmTq3cJqyCo', dailyViews: 12000, milestoneViews: 20000000, mainMileViews:50000000, divId: 'video17' ,NextMile:'Est. Date for 20M ~ ', NextMileMain:'Est. Date for 50M ~ '},
        { videoId: 'FcQ6oB1JPiA', dailyViews: 17000, milestoneViews: 15000000, mainMileViews:50000000, divId: 'video16' ,NextMile:'Est. Date for 15M ~ ', NextMileMain:'Est. Date for 50M ~ '},
        { videoId: 'fE2h3lGlOsk', dailyViews: 110000, milestoneViews: 540000000, mainMileViews:600000000, divId: 'video5' ,NextMile:'Est. Date for 540M ~ ', NextMileMain:'Est. Date for 600M ~ '},
        { videoId: 'MjCZfZfucEc', dailyViews: 53000, milestoneViews: 250000000, mainMileViews:300000000, divId: 'video6' ,NextMile:'Est. Date for 250M ~ ', NextMileMain:'Est. Date for 300M ~ '},
        { videoId: 'zugAhfd2r0g', dailyViews: 51000, milestoneViews: 160000000, mainMileViews:200000000, divId: 'video7' ,NextMile:'Est. Date for 160M ~ ', NextMileMain:'Est. Date for 200M ~ '},
        { videoId: '_ysomCGaZLw', dailyViews: 51000, milestoneViews: 260000000, mainMileViews:300000000, divId: 'video11' ,NextMile:'Est. Date for 260M ~ ', NextMileMain:'Est. Date for 300M ~ '},
        { videoId: 'wTowEKjDGkU', dailyViews: 27000, milestoneViews: 210000000, mainMileViews:300000000, divId: 'video9' ,NextMile:'Est. Date for 210M ~ ', NextMileMain:'Est. Date for 300M ~ '},
        { videoId: 'Hbb5GPxXF1w', dailyViews: 30000, milestoneViews: 150000000, mainMileViews:200000000, divId: 'video12' ,NextMile:'Est. Date for 150M ~ ', NextMileMain:'Est. Date for 200M ~ '},
        { videoId: 'pNfTK39k55U', dailyViews: 38000, milestoneViews: 330000000, mainMileViews:400000000, divId: 'video13' ,NextMile:'Est. Date for 330M ~ ', NextMileMain:'Est. Date for 400M ~ '},
        { videoId: 'zndvqTc4P9I', dailyViews: 26000, milestoneViews: 270000000, mainMileViews:300000000, divId: 'video14' ,NextMile:'Est. Date for 270M ~ ', NextMileMain:'Est. Date for 300M ~ '},
        { videoId: '4R7vRFGJr3k', dailyViews: 130000, milestoneViews: 30000000, mainMileViews:50000000, divId: 'video8' ,NextMile:'Est. Date for 30M ~ ', NextMileMain:'Est. Date for 50M ~ '},
        { videoId: 'OSRMoNKftyk', dailyViews: 26000, milestoneViews: 10000000, mainMileViews:20000000, divId: 'video15' ,NextMile:'Est. Date for 10M ~ ', NextMileMain:'Est. Date for 20M ~ '},
        { videoId: 'z75GlxXEfZk', dailyViews: 18000, milestoneViews: 10000000, mainMileViews:20000000, divId: 'video18' ,NextMile:'Est. Date for 10M ~ ', NextMileMain:'Est. Date for 20M ~ '},
        { videoId: 'VkIEfqHFNkU', dailyViews: 70000, milestoneViews: 10000000, mainMileViews:20000000, divId: 'video1' ,NextMile:'Est. Date for 10M ~ ', NextMileMain:'Est. Date for 20M ~ '},
        { videoId: '5e3rKInegeU', dailyViews: 180000, milestoneViews: 20000000, mainMileViews:50000000, divId: 'video4' ,NextMile:'Est. Date for 20M ~ ', NextMileMain:'Est. Date for 50M ~ '},
        { videoId: 'dnXyghQd2O8', dailyViews: 2000, milestoneViews: 1000000, mainMileViews:10000000, divId: 'video3' ,NextMile:'Est. Date for 1M ~ ', NextMileMain:'Est. Date for 10M ~ '},
        { videoId: 'HnXCezrJEdM', dailyViews: 20000, milestoneViews: 10000000, mainMileViews:20000000, divId: 'video19' ,NextMile:'Est. Date for 10M ~ ', NextMileMain:'Est. Date for 20M ~ '},
        { videoId: '1843Q679cvg', dailyViews: 18000, milestoneViews: 10000000, mainMileViews:20000000, divId: 'video20' ,NextMile:'Est. Date for 10M ~ ', NextMileMain:'Est. Date for 20M ~ '},

        
        // Add more video data objects as needed
        //bet on me 14,817,134	, NOMB 9,261,516
      ];
  
      // Iterate through the list and make API requests for each video
      videos.forEach(videoData => {
        getVideoData(videoData);
      });
    });
  });
  
  // Function to get video data
  function getVideoData(videoData) {
    const { videoId, dailyViews, milestoneViews,mainMileViews, divId ,NextMile,NextMileMain} = videoData;
    const request = gapi.client.youtube.videos.list({
      part: 'snippet,statistics', // Include snippet and statistics parts
      id: videoId,
    });
  
    request.execute(response => {
      // Handle the API response here
      const video = response.result.items[0];
      if (video) {
        const title = video.snippet.title;
        const viewCount = parseInt(video.statistics.viewCount);
        const daysToMilestone = Math.ceil((milestoneViews - viewCount) / dailyViews);
        const daysToMain = Math.ceil((mainMileViews - viewCount) / dailyViews);
        const NextMileTitle= NextMile;
        const NextMainTitle= NextMileMain;
  
        // Calculate the estimated date
        const currentDate = new Date();
        const estimatedDate = new Date(currentDate.getTime() + (daysToMilestone * 24 * 60 * 60 * 1000));
        const esstimatedMainDate = new Date(currentDate.getTime() + (daysToMain* 24 * 60 * 60 * 1000));
  
        // Display the estimated date in a specific format (e.g., YYYY-MM-DD)
        const estimatedDateFormatted = estimatedDate.toISOString().split('T')[0];
        const esstimatedMainDateFormatted = esstimatedMainDate.toISOString().split('T')[0];
        const thumbnailUrl = video.snippet.thumbnails.medium.url;
        const formattedViewCount = viewCount.toLocaleString();
  
        // Display the data on your website in the specified div
        displayVideoData(title, formattedViewCount, thumbnailUrl, estimatedDateFormatted, divId, NextMileTitle, NextMainTitle, esstimatedMainDateFormatted);
      } else {
        console.error('Video not found');
      }
    });
  }
  
  // Function to display video data on your website in unique divs
  function displayVideoData(title, formattedViewCount, thumbnailUrl, estimatedDateFormatted, divId, NextMileTitle, NextMainTitle, esstimatedMainDateFormatted) {
    // Remove "itzy" and "@" from the title
    title = title.replace(/itzy/gi, '').replace(/@/g, '');
  
    const videoTitleElement = document.getElementById(`${divId}-title`);
    const viewCountElement = document.getElementById(`${divId}-view-count`);
    const thumbnailElement = document.getElementById(`${divId}-thumbnail`);
    const nextMilestoneElement = document.getElementById(`${divId}-next-milestone`);
    const nextMainMileElement = document.getElementById(`${divId}-next-milestone-main`);
  
    // Display days to next milestone for each video
  
  
    nextMilestoneElement.textContent = `${NextMileTitle}${estimatedDateFormatted}`;
    nextMainMileElement.textContent = `${NextMainTitle}${esstimatedMainDateFormatted}`;
  
    videoTitleElement.textContent = title;
    viewCountElement.textContent = `Views: ${formattedViewCount}`;
    thumbnailElement.src = thumbnailUrl;
  }



  // Define your songs data
const songsData = [
  { name: "Total Streams", dailyStreams: 2300000, currentStreams: 2426180723, milestone: 2500000000, targetMile:'2.5B ~ '},
  { name: "Born To Be", dailyStreams: 177000, currentStreams: 9414087, milestone: 10000000, targetMile:'10M ~ '},
  { name: "Untouchable", dailyStreams: 330000, currentStreams: 17294293, milestone: 20000000, targetMile:'20M ~ '},
  { name: "Wannabe", dailyStreams: 170000, currentStreams: 347804995, milestone: 350000000, targetMile:'350M ~ '},
  { name: "Mr. Vampire", dailyStreams: 130000, currentStreams: 6943865, milestone: 10000000, targetMile:'10M ~ '},
  { name: "Loco", dailyStreams: 153000, currentStreams: 234307854, milestone: 240000000, targetMile:'240M ~ '},
  { name: "Marfia in the Morning", dailyStreams: 91000, currentStreams: 195797757, milestone: 200000000, targetMile:'200M ~ '},
  { name: "Cake", dailyStreams: 160000, currentStreams: 59999877, milestone: 70000000, targetMile:'70M ~ '},
  { name: "Cheshire", dailyStreams: 98000, currentStreams: 93156607, milestone: 100000000, targetMile:'100M ~ '},
  { name: "Dalla Dalla", dailyStreams: 85000, currentStreams: 233562311, milestone: 240000000, targetMile:'240M ~ '},
  { name: "Not Shy", dailyStreams: 99000, currentStreams: 219881332, milestone: 230000000, targetMile:'230M ~ '},
  
  
  // Add more songs data as needed
];

// Function to format date as yyyy.mm.dd
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
}

function formatNumberWithCommas(number) {
  return number.toLocaleString();
}

// Function to calculate milestone prediction
function calculatePrediction(dailyStreams, currentStreams, milestone) {
  const remainingStreams = milestone - currentStreams; // Use milestone as the threshold
  const daysUntilPrediction = Math.ceil(remainingStreams / dailyStreams);
  const predictionDate = new Date();
  predictionDate.setDate(predictionDate.getDate() + daysUntilPrediction);
  return [formatDate(predictionDate), daysUntilPrediction];
}

// Function to populate the table
function populateTable() {
  const tableBody = document.querySelector("#songTable tbody");

  songsData.forEach(song => {
    const prediction = calculatePrediction(song.dailyStreams, song.currentStreams, song.milestone);
    const newRow = `
      <tr>
        <td>${song.name}</td>
        <td>${formatNumberWithCommas(song.dailyStreams)}</td>
        <td>${formatNumberWithCommas(song.currentStreams)}</td>
        <td>${song.targetMile}${prediction[0]} (${prediction[1]} days)</td>
      </tr>
    `;
    tableBody.innerHTML += newRow;
  });
}

// Call the function to populate the table
populateTable();
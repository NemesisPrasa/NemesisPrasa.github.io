const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDown = document.querySelector('.drop-down');

toggleBtn.onclick = function(){
  dropDown.classList.toggle('open');
  const isOpen = dropDown.classList.contains('open');

  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
};

let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length -1;

next.onclick = function(){
  if(active+1 > lengthItems){
    active = 0;
  }else{
    active = active + 1;
  }reloadSlider();
}

prev.onclick = function(){
  if(active-1 < 0){
    active = lengthItems;
  }else{
    active = active - 1;
  }reloadSlider();
}
function reloadSlider(){
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + 'px';
  let lastActiveDot = document.querySelector('.slider .dots li.active');
  lastActiveDot.classList.remove('active');
  dots[active].classList.add('active');
}

dots.forEach((li, key)=>{
  li.addEventListener('click',function(){
    active = key;
    reloadSlider();
  });
});

// Set the date of the specific event (Itzy's fifth anniversary)
const eventDate = new Date("2024-04-17T00:00:00Z").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = eventDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown values in the HTML
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();


gapi.load('client', () => {
  gapi.client.init({
    apiKey: 'AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E',
  });
  gapi.client.load('youtube', 'v3', () => {
    // List of video data objects with video IDs, daily views, milestones, and div IDs
    const videos = [
      { videoId: '4R7vRFGJr3k', dailyViews: 400000, milestoneViews: 10000000, mainMileViews:20000000, divId: 'video3' ,NextMile:'Est. Date for 10M ~ ', NextMileMain:'Est. Date for 20M ~ '},
      { videoId: 'OSRMoNKftyk', dailyViews: 200000, milestoneViews: 5000000, mainMileViews:10000000, divId: 'video2' ,NextMile:'Est. Date for 5M ~ ', NextMileMain:'Est. Date for 10M ~ '},
      { videoId: 'fE2h3lGlOsk', dailyViews: 123000, milestoneViews: 530000000, mainMileViews:600000000, divId: 'video1' ,NextMile:'Est. Date for 530M ~ ', NextMileMain:'Est. Date for 600M ~ '},
      { videoId: '_ysomCGaZLw', dailyViews: 45000, milestoneViews: 250000000, mainMileViews:300000000, divId: 'video4' ,NextMile:'Est. Date for 250M ~ ', NextMileMain:'Est. Date for 300M ~ '},

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








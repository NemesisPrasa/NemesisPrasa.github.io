gapi.load('client', () => {
    gapi.client.init({
      apiKey: 'AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E',
    });
    gapi.client.load('youtube', 'v3', () => {
      // List of video data objects with video IDs, daily views, milestones, and div IDs
      const videos = [
        { videoId: '0bIRwBpBcZQ', dailyViews: 290000, milestoneViews: 70000000, mainMileViews:100000000, divId: 'video3' , NextMile:'Est. Date for 70M ~ ', NextMileMain:'Est. Date for 100M ~ '},
        { videoId: 'K0xFPQ2CX5E', dailyViews: 100000, milestoneViews: 10000000, mainMileViews:20000000, divId: 'video1' ,NextMile:'Est. Date for 10M ~ ', NextMileMain:'Est. Date for 20M ~ '},
        { videoId: 'RmTq3cJqyCo', dailyViews: 16000, milestoneViews: 16000000, mainMileViews:50000000, divId: 'video5' ,NextMile:'Est. Date for 16M ~ ', NextMileMain:'Est. Date for 50M ~ '},
        { videoId: 'FcQ6oB1JPiA', dailyViews: 22000, milestoneViews: 10000000, mainMileViews:50000000, divId: 'video2' ,NextMile:'Est. Date for 10M ~ ', NextMileMain:'Est. Date for 50M ~ '},
        { videoId: 'fE2h3lGlOsk', dailyViews: 123000, milestoneViews: 530000000, mainMileViews:600000000, divId: 'video4' ,NextMile:'Est. Date for 530M ~ ', NextMileMain:'Est. Date for 600M ~ '},
        { videoId: 'MjCZfZfucEc', dailyViews: 51000, milestoneViews: 250000000, mainMileViews:300000000, divId: 'video8' ,NextMile:'Est. Date for 250M ~ ', NextMileMain:'Est. Date for 300M ~ '},
        { videoId: 'zugAhfd2r0g', dailyViews: 66000, milestoneViews: 150000000, mainMileViews:200000000, divId: 'video7' ,NextMile:'Est. Date for 150M ~ ', NextMileMain:'Est. Date for 200M ~ '},
        { videoId: '_ysomCGaZLw', dailyViews: 32000, milestoneViews: 250000000, mainMileViews:300000000, divId: 'video6' ,NextMile:'Est. Date for 250M ~ ', NextMileMain:'Est. Date for 300M ~ '},
        { videoId: 'wTowEKjDGkU', dailyViews: 17000, milestoneViews: 210000000, mainMileViews:300000000, divId: 'video9' ,NextMile:'Est. Date for 210M ~ ', NextMileMain:'Est. Date for 300M ~ '},
        { videoId: 'Hbb5GPxXF1w', dailyViews: 28000, milestoneViews: 150000000, mainMileViews:200000000, divId: 'video10' ,NextMile:'Est. Date for 150M ~ ', NextMileMain:'Est. Date for 200M ~ '},
        { videoId: 'pNfTK39k55U', dailyViews: 23000, milestoneViews: 330000000, mainMileViews:400000000, divId: 'video11' ,NextMile:'Est. Date for 330M ~ ', NextMileMain:'Est. Date for 400M ~ '},
        { videoId: 'zndvqTc4P9I', dailyViews: 15000, milestoneViews: 270000000, mainMileViews:300000000, divId: 'video12' ,NextMile:'Est. Date for 270M ~ ', NextMileMain:'Est. Date for 300M ~ '},

       
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
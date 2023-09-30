const apiKey = "AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E";

const videoIdsMv = ["fE2h3lGlOsk","pNfTK39k55U","zndvqTc4P9I","_ysomCGaZLw","MjCZfZfucEc","wTowEKjDGkU","Hbb5GPxXF1w","zugAhfd2r0g"];

document.addEventListener("DOMContentLoaded", function () {
    // Your YouTube Data API Key
   

    // Array of specific video IDs you want to fetch data for
    // Add your video IDs here

    // Function to fetch video data for specific video IDs and sort by view count
    function fetchAndSortVideoData(videoIdsMv) {
        const tableBody = document.getElementById("videoTableBody");

        // Create an array to store video data
        const videosData = [];

        // Function to add video data to the array
        function addVideoData(videoData) {
            if (videoData) {
                videosData.push(videoData);
            }
        }

        videoIdsMv.forEach((videoId, index) => {
            fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`
            )
                .then((response) => response.json())
                .then((data) => {
                    if (data.items.length > 0) {
                        const video = data.items[0];
                        const originalTitle = video.snippet.title; // Store the original title
                        let truncatedTitle = originalTitle;
                        const viewCount = parseInt(video.statistics.viewCount, 10); // Parse view count as an integer
                        
                        const releaseDate = new Date(video.snippet.publishedAt).toLocaleDateString();
                        
                        if (originalTitle.length > 25) {
                            truncatedTitle = originalTitle.substring(0, 25) + '...';
                        }
                        addVideoData({ index, title: truncatedTitle, viewCount,  releaseDate });

                        // Check if all videos have been fetched
                        if (videosData.length === videoIdsMv.length) {
                            // Sort videos by view count in descending order
                            videosData.sort((a, b) => b.viewCount - a.viewCount);

                            // Display sorted videos in the table
                           videosData.forEach((videoData, newIndex) => {
                                const row = document.createElement("tr");
                                row.innerHTML = `<td>${newIndex + 1}</td>
                                                 <td>${videoData.title}</td>
                                                 <td>${videoData.viewCount.toLocaleString()}</td>
                                                 
                                                 <td>${videoData.releaseDate}</td>`;

                                tableBody.appendChild(row);
                            });
                        }
                    }
                })
                .catch((error) => console.error(`Error fetching data for video ${videoId}: `, error));
        });
    }

    // Initialize the process
    fetchAndSortVideoData(videoIdsMv);
});

const videoIdsPerformance = ["UUUWIGx3hDE","IOKMx1jeCjY","mr16aEZ7f4U", "xGSscNoySuw","FboYnkH_73s", "rZAkkGtntbQ", "W4rs-76SgRA", "4zwHs2QMvzY",  ];


document.addEventListener("DOMContentLoaded", function () {
    // Your YouTube Data API Key
   

    // Array of specific video IDs you want to fetch data for
    // Add your video IDs here

    // Function to fetch video data for specific video IDs and sort by view count
    function fetchAndSortVideoDataPerformance(videoIdsPerformance) {
        const tableBody = document.getElementById("performanceTableBody");

        // Create an array to store video data
        const videosData = [];

        // Function to add video data to the array
        function addVideoData(videoData) {
            if (videoData) {
                videosData.push(videoData);
            }
        }

        videoIdsPerformance.forEach((videoId, index) => {
            fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`
            )
                .then((response) => response.json())
                .then((data) => {
                    if (data.items.length > 0) {
                        const video = data.items[0];
                        const originalTitle = video.snippet.title; // Store the original title
                        let truncatedTitle = originalTitle;
                        const viewCount = parseInt(video.statistics.viewCount, 10); // Parse view count as an integer
                        
                        const releaseDate = new Date(video.snippet.publishedAt).toLocaleDateString();
                        
                        if (originalTitle.length > 25) {
                            truncatedTitle = originalTitle.substring(0, 25) + '...';
                        }
                        addVideoData({ index, title: truncatedTitle, viewCount,  releaseDate });

                        // Check if all videos have been fetched
                        if (videosData.length === videoIdsPerformance.length) {
                            // Sort videos by view count in descending order
                            videosData.sort((a, b) => b.viewCount - a.viewCount);

                            // Display sorted videos in the table
                           videosData.forEach((videoData, newIndex) => {
                                const row = document.createElement("tr");
                                row.innerHTML = `<td>${newIndex + 1}</td>
                                                 <td>${videoData.title}</td>
                                                 <td>${videoData.viewCount.toLocaleString()}</td>
                                                 
                                                 <td>${videoData.releaseDate}</td>`;

                                tableBody.appendChild(row);
                            });
                        }
                    }
                })
                .catch((error) => console.error(`Error fetching data for video ${videoId}: `, error));
        });
    }

    // Initialize the process
    fetchAndSortVideoDataPerformance(videoIdsPerformance);
});


const videoIdsJpMv = ["krzf1hkFAZA", "F-QTb-0wRGk", "yeHZNPplmm4", "ytTlH0EpSqI", "K0xFPQ2CX5E",];


document.addEventListener("DOMContentLoaded", function () {
    // Your YouTube Data API Key
   

    // Array of specific video IDs you want to fetch data for
    // Add your video IDs here

    // Function to fetch video data for specific video IDs and sort by view count
    function fetchAndSortVideoDataJpMv(videoIdsJpMv) {
        const tableBody = document.getElementById("jpMvTableBody");

        // Create an array to store video data
        const videosData = [];

        // Function to add video data to the array
        function addVideoData(videoData) {
            if (videoData) {
                videosData.push(videoData);
            }
        }

        videoIdsJpMv.forEach((videoId, index) => {
            fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey}`
            )
                .then((response) => response.json())
                .then((data) => {
                    if (data.items.length > 0) {
                        const video = data.items[0];
                        const originalTitle = video.snippet.title; // Store the original title
                        let truncatedTitle = originalTitle;
                        const viewCount = parseInt(video.statistics.viewCount, 10); // Parse view count as an integer
                        
                        const releaseDate = new Date(video.snippet.publishedAt).toLocaleDateString();
                        
                        if (originalTitle.length > 25) {
                            truncatedTitle = originalTitle.substring(0, 25) + '...';
                        }
                        addVideoData({ index, title: truncatedTitle, viewCount,  releaseDate });

                        // Check if all videos have been fetched
                        if (videosData.length === videoIdsJpMv.length) {
                            // Sort videos by view count in descending order
                            videosData.sort((a, b) => b.viewCount - a.viewCount);

                            // Display sorted videos in the table
                           videosData.forEach((videoData, newIndex) => {
                                const row = document.createElement("tr");
                                row.innerHTML = `<td>${newIndex + 1}</td>
                                                 <td>${videoData.title}</td>
                                                 <td>${videoData.viewCount.toLocaleString()}</td>
                                                 
                                                 <td>${videoData.releaseDate}</td>`;

                                tableBody.appendChild(row);
                            });
                        }
                    }
                })
                .catch((error) => console.error(`Error fetching data for video ${videoId}: `, error));
        });
    }

    // Initialize the process
    fetchAndSortVideoDataJpMv(videoIdsJpMv);
});
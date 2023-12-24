const apiKey = "AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E";

const videoIdsMv = ["HnXCezrJEdM","z75GlxXEfZk", "OSRMoNKftyk", "4R7vRFGJr3k", "0bIRwBpBcZQ", "FcQ6oB1JPiA", "RmTq3cJqyCo", "zugAhfd2r0g", "6uZy86ePgO0", "Hbb5GPxXF1w", "9oyodEkzn94", "MjCZfZfucEc", "mCPkvzVLdHE", "_ysomCGaZLw", "Ho_SmopuDlQ", "hed6HkYNA7g", "tvTdg7sgsgU", "wTowEKjDGkU", "fE2h3lGlOsk", "zndvqTc4P9I", "pNfTK39k55U", "OB7HVOCo6oQ", "6rc_R5XvT3Q","FOdhJlOxxFM", "aASPZ-QdXMo", "D2i1qbS2V90", "kLUKXX0sfII", "H-1B9w4uxHc", "rZ57I4cSSBE", "dnXyghQd2O8"];

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
                        const likeCount = parseInt(video.statistics.likeCount, 10);
                        const releaseDate = new Date(video.snippet.publishedAt).toLocaleDateString();
                        
                        if (originalTitle.length > 35) {
                            truncatedTitle = originalTitle.substring(0, 35) + '...';
                        }
                        addVideoData({ index, title: truncatedTitle, viewCount, likeCount, releaseDate });

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
                                                 <td>${videoData.likeCount.toLocaleString()}</td>
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


const videoIdsKpopDance = ["zip9_rpK8dA", "UUUWIGx3hDE", "G_Lhkhxl8BU", "IOKMx1jeCjY", "ay97L0DAu9A", "lMC6_j37TLE", "mBvdwhgyqVY", "mr16aEZ7f4U","rZAkkGtntbQ", "xGSscNoySuw", "cFxce4OPmLE", "jr9lqsHUS-o", "FboYnkH_73s", "9-8SO8siAWI", "aYi7hHWG7zw", "rPNflM1zUls", "Q-CYEtcBtDc", "acksIpuXN9Q", "d7ZvOX8qZlc", "1Nu_tw9rLOA", "WfMHIJ-mkBQ", "IfBSeP-qhVM", "fNc43M1_TPU", "L4fRGgARiKw", "72xTFQgLl7I", "LSSe3eMkxvk" ,"W4rs-76SgRA", "TrGOcSlL37c", "4zwHs2QMvzY", "s5DNhleLGKY", "pccskexpmIE", "qG17qAvLNRI", "LrtC4IQYaCg", "DxPNHmdEAUY", "PqAjjyZvPJc","IZAv5Tj8a8A","b80TWrBflh8","Vp9I_m6znMM","r7ZZCKmX2OI","tcrRXkxUj0U"];

document.addEventListener("DOMContentLoaded", function () {
    // Your YouTube Data API Key
   

    // Array of specific video IDs you want to fetch data for
    // Add your video IDs here

    // Function to fetch video data for specific video IDs and sort by view count
    function fetchAndSortVideoData(videoIdsKpopDance) {
        const tableBody = document.getElementById("videoTableBodyKpopDance");

        // Create an array to store video data
        const videosData = [];

        // Function to add video data to the array
        function addVideoData(videoData) {
            if (videoData) {
                videosData.push(videoData);
            }
        }

        videoIdsKpopDance.forEach((videoId, index) => {
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
                        const likeCount = parseInt(video.statistics.likeCount, 10);
                        const releaseDate = new Date(video.snippet.publishedAt).toLocaleDateString();
                        
                        if (originalTitle.length > 35) {
                            truncatedTitle = originalTitle.substring(0, 40) + '...';
                        }
                        addVideoData({ index, title: truncatedTitle, viewCount, likeCount, releaseDate });

                        // Check if all videos have been fetched
                        if (videosData.length === videoIdsKpopDance.length) {
                            // Sort videos by view count in descending order
                            videosData.sort((a, b) => b.viewCount - a.viewCount);

                            // Display sorted videos in the table
                           videosData.forEach((videoData, newIndex) => {
                                const row = document.createElement("tr");
                                row.innerHTML = `<td>${newIndex + 1}</td>
                                                 <td>${videoData.title}</td>
                                                 <td>${videoData.viewCount.toLocaleString()}</td>
                                                 <td>${videoData.likeCount.toLocaleString()}</td>
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
    fetchAndSortVideoData(videoIdsKpopDance);
});



const videoIdsKpopSpecial = ["xwN0IcPegIg", "qN2bbg2kuHw", "fvTHBV0XIIk", "-3J9LsmImRY", "BxZSa6rcctU" , "HuXnf-x7UeM", "ra27BWdRpm4", "pXmKW5zXWyc", "sMs4gK8jr-c", "UdiaQcAjzT0", "tnMFp53wrRg", "4kwkLBnc4fE", "msSTlqos4fQ"];

document.addEventListener("DOMContentLoaded", function () {
    // Your YouTube Data API Key
   

    // Array of specific video IDs you want to fetch data for
    // Add your video IDs here

    // Function to fetch video data for specific video IDs and sort by view count
    function fetchAndSortVideoSpecialData(videoIdsKpopSpecial) {
        const tableBody = document.getElementById("videoTableBodyKpopSpecial");

        // Create an array to store video data
        const videosData = [];

        // Function to add video data to the array
        function addVideoData(videoData) {
            if (videoData) {
                videosData.push(videoData);
            }
        }

        videoIdsKpopSpecial.forEach((videoId, index) => {
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
                        const likeCount = parseInt(video.statistics.likeCount, 10);
                        const releaseDate = new Date(video.snippet.publishedAt).toLocaleDateString();
                        
                        if (originalTitle.length > 35) {
                            truncatedTitle = originalTitle.substring(0, 35) + '...';
                        }
                        addVideoData({ index, title: truncatedTitle, viewCount, likeCount, releaseDate });

                        // Check if all videos have been fetched
                        if (videosData.length === videoIdsKpopSpecial.length) {
                            // Sort videos by view count in descending order
                            videosData.sort((a, b) => b.viewCount - a.viewCount);

                            // Display sorted videos in the table
                           videosData.forEach((videoData, newIndex) => {
                                const row = document.createElement("tr");
                                row.innerHTML = `<td>${newIndex + 1}</td>
                                                 <td>${videoData.title}</td>
                                                 <td>${videoData.viewCount.toLocaleString()}</td>
                                                 <td>${videoData.likeCount.toLocaleString()}</td>
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
    fetchAndSortVideoSpecialData(videoIdsKpopSpecial);
});
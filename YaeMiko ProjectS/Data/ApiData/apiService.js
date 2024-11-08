// Importing required modules
const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Path to api.json file
const apiFilePath = path.join(__dirname, 'api.json');

// Function to fetch and save media from API
async function fetchAndSaveMedia() {
    const MAX_RETRIES = 3;
    const TIMEOUT = 30000; // 30 seconds timeout for API requests

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            // Read api.json file to get the API URL
            const apiData = JSON.parse(fs.readFileSync(apiFilePath, 'utf8'));

            // Get API URL from JSON
            const apiUrl = apiData.Api;

            // Make a request to the API to fetch media URL
            const response = await axios.get(apiUrl, { timeout: TIMEOUT });
            const mediaURL = response.data.data; // Assuming the media URL is in `data`

            if (!mediaURL) {
                throw new Error('Không tìm thấy URL của media trong dữ liệu API.');
            }

// Determine file type based on the media URL
let fileExtension;
if (mediaURL.endsWith('.mp4')) {
    fileExtension = 'mp4';
} else if (mediaURL.endsWith('.mp3')) {
    fileExtension = 'mp3';
} else {
    fileExtension = 'jpg'; // Default to image if neither mp4 nor mp3
}

// Path to save the media file
const tempMediaPath = path.join(__dirname, `temp_media.${fileExtension}`);


            // Fetch the media from the URL
            const mediaResponse = await axios({
                url: mediaURL,
                responseType: 'stream', // This allows us to handle media as a stream
                timeout: TIMEOUT
            });

            // Save the media to a file
            const writer = fs.createWriteStream(tempMediaPath);

            return new Promise((resolve, reject) => {
                mediaResponse.data.pipe(writer);

                writer.on('finish', () => {
                    // Check if the file was saved successfully
                    fs.access(tempMediaPath, fs.constants.F_OK, (err) => {
                        if (err) {
                            reject(new Error(`File không tồn tại sau khi lưu: ${tempMediaPath}`));
                        } else {
                            resolve(tempMediaPath); // Resolve the path to the saved file
                        }
                    });
                });

                writer.on('error', (err) => {
                    fs.unlink(tempMediaPath, () => {}); // Delete the file if there's an error
                    reject(new Error(`Lỗi khi lưu file: ${err.message}`));
                });
            });

        } catch (error) {
            // Retry logic in case of failure
            if (attempt < MAX_RETRIES) {
                console.warn(`Retrying (${attempt}/${MAX_RETRIES}) due to error: ${error.message}`);
                await new Promise(res => setTimeout(res, 2000)); // Wait before retrying
            } else {
                console.error('Error details:', error.message);
                throw new Error(`Đã có lỗi xảy ra khi lấy media từ API.`);
            }
        }
    }
}

// Exporting the fetchAndSaveMedia function
module.exports = { fetchAndSaveMedia };

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt User to Select Media Stream, then Pass to Video Element and Play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.onplay();
        }
    } catch (error) {
        // Catch Error Here
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});

// On Load
selectMediaStream();
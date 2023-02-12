const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media element, pass to videoElement, then play

async function selectMediaStream() {
   try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
         videoElement.play();
      }
   } catch (err) {
      console.log(`some error occurred in selectMediaStream: ${err}`);
   }
}

selectMediaStream();
button.addEventListener('click', async () => {
   button.disabled = true;
   await videoElement.requestPictureInPicture();
   button.disabled = false;
})
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//  prompt to select media stream, pass to video element, then play 
// async function selectMesianStream() {
//     try {
//         pass
//     }
// } catch (error) {
//     //  catch error here 
//     console.log('whoops,error here: ', error);
// }
// }
button.addEventListener('click', async function () {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = async () => {
        await videoElement.play();
        // Disable button
        // start picture in picture
        await videoElement.requestPictureInPicture();
        // reset button
    }
});
// on load
// selectMesianStream();
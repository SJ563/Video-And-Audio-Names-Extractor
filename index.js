const audioInput = document.getElementById("audioInput");
const videoInput = document.getElementById("videoInput");
const fileNames = document.getElementById("fileNames");

let sequenceNumber = 1;

function handleFileChange(event) {
  const files = event.target.files;
  for (let i = 0; i < files.length && i < 1000; i++) { // Limit to 200 files
    const fileName = files[i].name;
    fileNames.innerHTML += `${sequenceNumber++}. ${fileName}<br>`;
  }
}

audioInput.addEventListener("change", handleFileChange);
videoInput.addEventListener("change", handleFileChange);

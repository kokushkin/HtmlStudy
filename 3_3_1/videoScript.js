var video;
var display;

window.onload = function() {
	video = document.getElementById("videoPlayer");
};

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function speedUp() {
    video.play();
    video.playbackRate = 2;
}

function slowDown() {
    video.play();
    video.playbackRate = 0.5;
}

function normalSpeed() {
    video.play();
    video.playbackRate = 1;
}

function progressUpdate() {
	// Устанавливаем позицию воспроизведения
    var positionBar = document.getElementById("positionBar");
    positionBar.style.width = (video.currentTime / video.duration * 100)  + "%";
	
	// Заполняем текстовую надпись текущим значением
	displayStatus = document.getElementById("displayStatus");
    displayStatus.innerHTML = (Math.round(video.currentTime*100)/100) + " сек";
  }
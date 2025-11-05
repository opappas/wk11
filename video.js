let video = document.querySelector(".video");


window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
 });

 document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowed down");
	console.log("Current speed is ", video.playbackRate);
	video.playbackRate = video.playbackRate - .10;
	console.log("New speed is ", video.playbackRate);
 });

 document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster");
	console.log("Current speed is ", video.playbackRate);
	video.playbackRate = video.playbackRate + .10;
	console.log("New speed is ", video.playbackRate);
 });

 document.querySelector("#skip").addEventListener("click", function() {
	console.log("In skip");
	console.log("Current location is ", video.currentTime);
	video.currentTime += 10;
	video.loop = true;
	console.log("New location is ", video.currentTime);
 });

 document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.muted = true;
	
 });




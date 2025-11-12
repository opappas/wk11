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

document.querySelector("#slider").addEventListener("input", function() {
	let oldVolume = video.volume / 10;
	console.log("Current volume is ", video.volume)
    let newVolume = this.value / 100;
    video.volume = newVolume; 
    document.querySelector("#volume").textContent = this.value + "%";
    console.log("New volume is ", newVolume);
});

 document.querySelector("#mute").addEventListener("click", function() {	

	 if (video.muted === false) {
        video.muted = true;
        mute.innerHTML = "Unmute";
        console.log("Mute");
    } else {
        video.muted = false;
        mute.innerHTML = "Mute";
        console.log("Unmute");
    }
 });

 document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Old School");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    console.log("Original");
    video.classList.remove("oldSchool");
});







var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// Find the video element with the ID 'player1' and assign it to the 'video' variable
	video = document.querySelector("#player1")
	// Set autoplay to false
	video.autoplay= false;
	// Set loop to false
	video.loop = false;
	console.log("autoplay is set to "+video.autoplay)
	console.log("loop is set to "+video.loop)

	// Get the play button element
    var playButton = document.getElementById("play");

    // Add an event listener to the play button
    playButton.addEventListener("click", function() {
        // Play the video
        video.play();
        // Update the volume information
        var volumeSpan = document.getElementById("volume");
        volumeSpan.textContent = video.volume * 100 + "%";
	});
	console.log("Play button is set")

	// Get the pause button element
    var pauseButton = document.getElementById("pause");

    // Add an event listener to the pause button
    pauseButton.addEventListener("click", function() {
        // Pause the video
        video.pause();
    });
	console.log("Pause button is set")

	// Get the slow down button element
    var slowDownButton = document.getElementById("slower");

    // Add an event listener to the slow down button
    slowDownButton.addEventListener("click", function() {
        // Decrease the playback rate by 10%
        video.playbackRate -= 0.1;
    // Log the new speed to the console
    console.log("New speed: " + video.playbackRate);
    });

	// Variable to keep track of the total speed adjustment
    var speedAdjustment = 0;

    // Get the speed up button element
	var speedUpButton = document.getElementById("faster");
	// Add an event listener to the speed up button
	speedUpButton.addEventListener("click", function() {
		// Increase the playback rate by 10%
    	video.playbackRate += 0.1;
    // Log the new speed to the console
    console.log("New speed: " + video.playbackRate);
	});

	// Get the skip ahead button element
    var skipAheadButton = document.getElementById("skip");

    // Add an event listener to the skip ahead button
    skipAheadButton.addEventListener("click", function() {
        // Calculate the new time to skip to
        var newTime = video.currentTime + 10;

        // Check if the new time exceeds the duration of the video
        if (newTime > video.duration) {
            // If it does, go back to the start of the video
            video.currentTime = 0;
        } else {
            // Otherwise, skip ahead by 10 seconds
            video.currentTime = newTime;
        }

        // Log the current location of the video
        console.log("Current location: " + video.currentTime);
    });

	// Get the mute button element
    var muteButton = document.getElementById("mute");

    // Add an event listener to the mute button
    muteButton.addEventListener("click", function() {
        // Toggle the mute status of the video
        video.muted = !video.muted;
        // Update the text in the button based on the mute status
        if (video.muted) {
            muteButton.textContent = "Unmute";
        } else {
            muteButton.textContent = "Mute";
        }
    });

	// Get the volume slider element
    var volumeSlider = document.getElementById("slider");

    // Add an event listener to the volume slider
    volumeSlider.addEventListener("input", function() {
        // Update the volume of the video based on the slider value
        video.volume = volumeSlider.value / 100;

        // Update the volume information
        var volumeSpan = document.getElementById("volume");
        volumeSpan.textContent = volumeSlider.value + "%";
    });

	// Get the original button element
    var originalButton = document.getElementById("orig");

    // Add an event listener to the original button
    originalButton.addEventListener("click", function() {
        // Remove the 'oldSchool' class from the video
        video.classList.remove("oldSchool");
    });

    // Get the vintage button element
    var vintageButton = document.getElementById("vintage");

    // Add an event listener to the vintage button
    vintageButton.addEventListener("click", function() {
        // Add the 'oldSchool' class to the video
        video.classList.add("oldSchool");
    });
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


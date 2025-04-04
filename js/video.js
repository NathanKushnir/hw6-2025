let video;


//load video
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	console.log('auto play is set to ' + video.autoplay);
	video.loop=false;
	console.log('loop is set to ' + video.loop);
});

//Play video and set volume properly
document.querySelector('#play').addEventListener('click', function(){
	console.log('Play video');
	video.play();

	//set volume properly
	let volumeValue = document.getElementById('slider').value;
	video.volume =  volumeValue / 100;
	document.querySelector("#volume").textContent = `${volumeValue}%`;
});

//Pause video
document.querySelector('#pause').addEventListener('click', function(){
	console.log('Pause video');
	video.pause();
});

//slow down
document.querySelector('#slower').addEventListener('click', function(){
	console.log('New speed: ' + video.playbackRate);
	video.playbackRate -= 0.1;
});

//speed up
document.querySelector('#faster').addEventListener('click', function(){
	console.log('New speed: ' + video.playbackRate);
	video.playbackRate += 0.1;
});

//skip
document.querySelector('#skip').addEventListener('click', function(){
	console.log('skip ahead')
	if (video.currentTime + 10 > video.duration){
		video.currentTime = 0;
		console.log('Restarting video to beginning');
	} else{
		video.currentTime += 10;
		console.log(`Current time is now ${video.currentTime.toFixed(2)} seconds`);
	}
});

//mute
document.querySelector('#mute').addEventListener('click', function(){
	//default volume is max
	let previousVolume = 1;

	//going from unmute to mute
	if (video.muted == false){
		console.log('Video muted')
		//store original value
		previousVolume = video.volume;
		video.muted = true;
		video.volume = 0;
		//set volume text to 0
		document.querySelector("#volume").textContent = '0%';
		//set sliders to 0
		document.querySelector("#slider").value = 0;
		//set button back to 'unmute'
		document.querySelector('#mute').innerText = 'Unmute'
	}
	//going from mute back to unmute
	else{
		console.log('Video unmuted')
		video.muted = false;
		video.volume = previousVolume;
		document.querySelector("#volume").textContent = `${previousVolume * 100}%`;
		document.querySelector("#slider").value = previousVolume * 100;
		document.querySelector('#mute').innerText = 'Mute';
	}
});

//change the volume based on the slider
document.querySelector("#slider").addEventListener('change', function(){
	let new_vol = document.querySelector("#slider").value;
	video.volume = new_vol / 100;
	document.querySelector("#volume").textContent = `${new_vol}%`;
});

//utilize old school class
document.querySelector('#vintage').addEventListener('click', function(){
	console.log('Using old school styling');
	video.classList.add('oldSchool');
});

//original style
document.querySelector('#orig').addEventListener('click', function(){
	console.log('Using original styling');
	video.classList.remove('oldSchool');
});
/*
function enableMute() { 
	let el = document.getElementById("bgm"); 
	el.muted = true; 
} 

function disableMute() { 
	let el = document.getElementById("bgm"); 
	el.muted = false; 
} 
*/

function toggleMute() { 
  	let el = document.getElementById("bgm"); 
  	el.muted = !el.muted
  	let btn = document.getElementById("muteButton")
  	btn.innerText = (btn.innerText === "Mute") ? "Unmute" : "Mute"
  	console.log(el)
} 

$(function(){
	$('#Audio-Control button').click(function(){ 
		$('#Audio-Control button').toggleClass('active'); 
	}); 
});

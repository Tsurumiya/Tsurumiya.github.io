function enableMute() { 
	let el = document.getElementById("bgm"); 
	//el.muted = true;
	el.pause();
} 

function disableMute() { 
	let el = document.getElementById("bgm"); 
	//el.muted = false; 
	el.play();
} 

$(function(){
	$('#Audio-Control button').click(function(){ 
		$('#Audio-Control button').toggleClass('active'); 
	}); 
});

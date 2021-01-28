function enableMute() { 
	let el = document.getElementById("bgm"); 
	el.muted = true; 
} 

function disableMute() { 
	let el = document.getElementById("bgm"); 
	el.muted = false; 
} 

$(function(){
	$('#Audio-Control button').click(function(){ 
		$('#Audio-Control button').toggleClass('active'); 
	}); 
});

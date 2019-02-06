
function emote(){
	document.getElementById("res_emote").innerHTML="🙂";
}

function emote2(){
	document.getElementById("res_emote2").innerHTML="🙁";
}

function emote3(){
	document.getElementById("res_emote3").innerHTML="😉";
}











function emoji(){

	var x = document.getElementById("mySelect").value;

	if (x='--') {
		document.getElementById("res_emoji").innerHTML="--";
	}
	else if (x=':)') {
		document.getElementById("res_emoji").innerHTML="🙂";
	}
	else if (x=':(') {
		document.getElementById("res_emoji").innerHTML="🙁";
	}
	else {
		document.getElementById("res_emoji").innerHTML="😉";
	}

}
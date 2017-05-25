// from https://www.youtube.com/watch?v=sSr1s19gND8&t=902s

window.onload = function() { // make sure DOM is loaded

	document.addEventListener("deviceready", onDeviceReady, false); // (fired when cordova/phonegap is loaded)

}

function onDeviceReady() {

	var parentElement = document.getElementById("deviceready");
	var listeningElement = parentElement.querySelector('.listening');
	var receivedElement = parentElement.querySelector('.received');

	listeningElement.setAttribute('style', 'display:none;');
	receivedElement.setAttribut('style', 'display:block;');

	// other stuff in this code ... don't know if applicable for me -- kh

	// DEVICE ********************
//	$("#info").html('Cordova Version: '+device.cordova+'<br>');
//	$("#info").append(device.model+'<br>');
//	#("#info").append(device.platform+' ' +device.version+'<br>');	


}
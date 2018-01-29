document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2018.01.29.7"; 
window.addEventListener('deviceorientation', ondeviceorientation);
window.addEventListener('devicemotion', ondevicemotion);


//----------------------------------------

//----------------------------------------
function ondeviceorientation(event) 
{
	var alpha = event.alpha;
	var beta = event.beta;
	var gamma = event.gamma;
	
	document.getElementById("id_alpha").innerHTML = "alpha = " + Math.round(alpha * 10) / 10;
	document.getElementById("id_beta").innerHTML = "beta = " + Math.round(beta * 10) / 10;
	document.getElementById("id_gamma").innerHTML = "gamma = " + Math.round(gamma * 10) / 10;
	
	//deseneaza_cerc_canvas(gamma, beta);
	// deseneaza_cerc_svg(gamma, beta);
	deseneaza_patrat_canvas(alpha, gamma, beta);
}
//----------------------------------------
function ondevicemotion(event) 
{
	document.getElementById("id_acc").innerHTML = "Acc = " + Math.round(event.acceleration.x * 10) / 10 + " " + Math.round(event.acceleration.y * 10) / 10 + " " + Math.round(event.acceleration.z * 10) / 10;
	
	var ag = event.accelerationIncludingGravity;
	var gamma = -Math.atan(ag.x / ag.z) * 180 / Math.PI;
	var beta = Math.atan(ag.y / ag.z) * 180 / Math.PI;
	
	document.getElementById("id_acc_g").innerHTML = "AccG = " + Math.round(ag.x * 10) / 10 + " " + Math.round(ag.y * 10) / 10 + " " + Math.round(ag.z * 10) / 10 + " gamma = " + Math.round(gamma * 10) / 10 + " beta = " + Math.round(beta * 10) / 10;
	
}
//----------------------------------------

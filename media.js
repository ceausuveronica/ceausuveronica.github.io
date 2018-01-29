document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2018.01.29.1"; 

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");
var rect_canvas = canvas.getBoundingClientRect();
var img = document.getElementById("id_img");
img.onload = function(){
	context.drawImage(img, 120, 120, 120, 120);
	var rect_img = img.getBoundingClientRect();
}
canvas.addEventListener("touchmove", on_touch_move);

//----------------------------------------
function on_touch_move(e)
{
	e.preventDefault();
	
	var touches = e.changedTouches;
	for (var i = 0; i < touches.length; i++){
	}
}
//----------------------------------------

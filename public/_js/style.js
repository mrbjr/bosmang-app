// JavaScript Document


function sizeOfThings(){
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight-60;
	var margin_calc;
	
	if (windowWidth>=1024) margin_calc = 20;
	if (windowWidth<1024) margin_calc = 30;
	
	var display = document.getElementById("display");
	display.style.padding = "10px"
	display.style.margin = margin_calc + "px";
	display.style.minHeight = windowHeight + "px";
	
}

window.addEventListener('load', function(){

		sizeOfThings();

});

window.addEventListener('resize', function(){

		sizeOfThings();

});

function change_bg(x){
	var display = document.getElementById("display");
	var url_bg = "url('./_imge/_bg/0"+x+".jpg')";
	display.style.backgroundImage = url_bg;
}
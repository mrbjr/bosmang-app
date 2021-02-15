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
	display.style.height= windowHeight + "px";
	
	var user_box = document.getElementById("user_box");
	user_box.style.marginTop = (0.25*windowHeight+60)+ "px";
	
}

window.addEventListener('load', function(){
	sizeOfThings();
	
	document.getElementById("input_box").addEventListener('click', function() {
			document.getElementById(this.id).value= "";
		});
		
		document.getElementById("input_box").addEventListener('change', function() {
			user_login(this.id)
		});

	});

window.addEventListener('resize', function(){
	sizeOfThings();
});

function change_bg(x){
	var display = document.getElementById("display");
	var url_bg = "url('./_img/_bg/0"+x+".jpg')";
	display.style.backgroundImage = url_bg;
}

function user_login(x){
			var el = document.getElementById(x);
		//	var rdom = ReactDOM.render(<Login_app />, document.getElementById('root'));
			if (el.value == 42) {alert("Login sucesso"); } else {alert("Login fracasso")}
}
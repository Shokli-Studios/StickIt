// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
function myMove(pr1) {
	  //Remove the previous two buttons and replace them with text boxes
	  if(pr1 == true)
	  {
	  	//move in log in text boxes
	  	logIn();
	  }
	  else if(pr1 == false)
	  {
	  	//move in sign up text boxes
	  	signUp();
	  }
	}

function logIn(){
	var parent = document.getElementsByClassName("button_container");
	var sign = document.getElementById("button_Sign");
	var log = document.getElementById("button_Log");
	parent[0].removeChild(log);
	parent[1].removeChild(sign);

	var par = document.createElement("p");
	var text = document.createTextNode("User Name:");
	par.appendChild(text);
	parent[0].insertBefore(par,document.getElementById("text1"));

	par = document.createElement("p");
	text = document.createTextNode("Password:");
	par.appendChild(text);
	parent[2].insertBefore(par,document.getElementById("text3"));

	par = document.createElement("a");
	text = document.createTextNode("Forgot Password?");
	par.appendChild(text);
	parent[3].appendChild(par);

	var form = document.getElementById("text1");
	form.style.display = "inline";
	form = document.getElementById("text3");
	form.style.display = "inline";


}

function signUp(){
	var parent = document.getElementsByClassName("button_container");
	var sign = document.getElementById("button_Sign");
	var log = document.getElementById("button_Log");
	parent[0].removeChild(log);
	parent[1].removeChild(sign);

	var par = document.createElement("p");
	var text = document.createTextNode("Email:");
	par.appendChild(text);
	parent[0].insertBefore(par,document.getElementById("text1"));

	par = document.createElement("p");
	text = document.createTextNode("User Name:");
	par.appendChild(text);
	parent[1].insertBefore(par,document.getElementById("text2"));

	par = document.createElement("p");
	text = document.createTextNode("Password:");
	par.appendChild(text);
	parent[2].insertBefore(par,document.getElementById("text3"));

	par = document.createElement("p");
	text = document.createTextNode("Confirm Password:");
	par.appendChild(text);
	parent[3].insertBefore(par,document.getElementById("text4"));

	var form = document.getElementById("text1");
	form.style.display = "inline";
	form = document.getElementById("text2");
	form.style.display = "inline";
	form = document.getElementById("text3");
	form.style.display = "inline";
	form = document.getElementById("text4");
	form.style.display = "inline";
}
//The following deals with all post-it note items
function FindDrawSpot(){

}

function DrawSticker(pos, side)
{
	var dys = document.getElementById(side);
	var boxes = dys.getElementsByClassName("sticker");
	var box = boxes[pos];
	var ctx = box.getContext("2d");

}

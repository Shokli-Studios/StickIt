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
//The following deals with all sticker note items
function FindDrawSpot(){

}

function DrawSticker(pos, side)
{
	var dys = document.getElementById(side); //get left or right tags
	var boxes = dys.getElementsByClassName("sticker");//get all the stickers on that tag
	var box = boxes[pos];//get all box by position
	var ctx = box.getContext("2d");//create context for the box
	var wopac = 0.1;//opacity for white square which will fade out sticker
	var opac = 0.1;//opacity for sticker that will fade ins sticker
	var rgb_list = /*getRandomColor()*/"rgba(153,255,102,"+opac+")";

	ctx.beginPath();
	ctx.rect(5, 5, 280, 130);
	if(opac < 1)
	{	
		ctx.fillStyle = rgb_list/*"rgba("+rgb_list[0]+","+rgb_list[1]+","+rgb_list[2]+","+opac+")"*/;
		opac += 0.2; 
	}
	else 
	{
		ctx.fillStyle = "rgba(255,255,255,"+wopac+")";
		wopac += 0.2;
	}
	ctx.fill();
	setTimeout("DrawSticker("+pos+","+side+")", 1);
}

function intervalStickerMaker()
{
	DrawSticker(/*manifesth.floor(Math.random() * 11)*/1,"right");
	setTimeout("intervalStickerMaker()", 100);
}

function getRandomColor()
{
	var num = Math.floor((Math.random() * 5)+1) 
	var clrlst = new Array();

	if(num == 1)
	{//#99ff66
		clrlst[0] = 153;
		clrlst[1] = 255;
		clrlst[2] = 102;
	}
	else if(num == 2)
	{//33cccc 
		clrlst[0] = 51;
		clrlst[1] = 204;
		clrlst[2] = 204;
	}
	else if(num == 3)
	{//cc33ff
		clrlst[0] = 204;
		clrlst[1] = 51;
		clrlst[2] = 255;
	}
	else if(num == 4)
	{//ffff99
		clrlst[0] = 255;
		clrlst[1] = 255;
		clrlst[2] = 153;
	}
	else if(num == 5)
	{//33cccc 
		clrlst[0] = 51;
		clrlst[1] = 204;
		clrlst[2] = 204;
	}
	return clrlst;
}

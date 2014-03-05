// JavaScript Document
window.onload =mostrarMenu();
function mostrarMenu(){
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("Accordion1").innerHTML=xmlhttp.responseText;
	var Accordion1 = new Spry.Widget.Accordion("Accordion1");
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/menu.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cod=seg123");
}
function agregarAlChanguito(id){
var ses_id = window.sessionStorage.getItem("secion");
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    //document.getElementById("Accordion1").innerHTML=xmlhttp.responseText;
	efectoCahnguito();
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/agregar_al_carrito.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pr_id="+id+"&ses_id="+ses_id);
}
function efectoCahnguito(){
	document.getElementById("bg_img").style.visibility="visible";
	document.getElementById("bg_fondo_negro_img").style.visibility="visible";
	setTimeout(function(){document.getElementById("bg_img").style.opacity="0";document.getElementById("bg_fondo_negro_img").style.opacity="0";},500);
	setTimeout(function(){document.getElementById("bg_img").style.visibility="hidden";document.getElementById("bg_fondo_negro_img").style.visibility="hidden";},700);
	setTimeout(function(){document.getElementById("bg_img").style.opacity="1";document.getElementById("bg_fondo_negro_img").style.opacity="0.7";},1200);		
}
// JavaScript Document
// Crear seciones nuevas
window.onload =crearSecion();
function crearSecion(){
	//alert("Entre a crear secion");
	var secion = window.sessionStorage.getItem("secion");// Ver si la secion existe
	var usuario = window.sessionStorage.getItem("usuario");
	//alert("La secion es:"+secion+"y el usuario es: "+usuario);
	if(secion==null){
		// Si no se encunetra secion la crea
		var sec=nuevaSecion();
	}
	if(usuario==null){
		// Si no se encunetra secion la crea
		//alert("entro al log in");
		if(window.location.pathname!='/restoapp/app/index.html'){
			window.location='index.html';
		}
	}else{
		if(window.location.pathname=='/restoapp/app/index.html'){
			window.location='inicio.html';
		}
	}
}
function preguntarSecion(){	
	var secion = window.sessionStorage.getItem("secion");// Ver si la secion existe
	//alert("La secion es:"+ secion);
}
function nuevaSecion(){
	{
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
    value=parseInt(xmlhttp.responseText);
	window.sessionStorage.setItem("secion", value );
	//alert("valor de la secion: "+ value);
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/secion.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cod=seg123");
}
}
function crearUsuario(){
	//alert("entre");
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
    document.getElementById("lg").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/log_in.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cod=seg123");
}

function logUsuario(){
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
    document.getElementById("lg").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/log_in2.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("cod=seg123");
}
function buscarUsuario(){
	mail= document.getElementById("mail").value;
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
    value=parseInt(xmlhttp.responseText);
	//alert(xmlhttp.responseText);
	if(value==0){alert("Mail no encontrado");}
	else{
		window.sessionStorage.setItem("usuario", value );
		window.location="inicio.html";
	}
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/usu_mail_buscar.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("usu_mail="+mail);
}

function crearNuevoUsuario(){
	//alert("entre");
	var mail= document.getElementById("mail").value;
	var usu= document.getElementById("usu").value;
	var tel= document.getElementById("tel").value;
	var dir= document.getElementById("dir").value;
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
    value=parseInt(xmlhttp.responseText);
	//alert(xmlhttp.responseText);
	if(value==0){alert("Error al grabar, intente de nuevo");}
	else{
		window.sessionStorage.setItem("usuario", value );
		window.location="inicio.html";
	}
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/alta_usuarios.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("usu="+usu+"&meail="+mail+"&tel="+tel+"&dir="+dir);
}
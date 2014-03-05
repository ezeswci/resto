// JavaScript Document
window.onload =verformPedir();
function verformPedir(){
var pe_id = window.sessionStorage.getItem("secion");
var cl_id = window.sessionStorage.getItem("usuario");
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
    document.getElementById("menu").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/form_para_pedir.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pe_id="+pe_id+"&cl_id="+cl_id);
}
function formPedir(){
	var pe_id = window.sessionStorage.getItem("secion");
	var cl_id = window.sessionStorage.getItem("usuario");
	var nombre= document.getElementById("nombre").value;
	var mail= document.getElementById("mail").value;
	var tel= document.getElementById("tel").value;
	var dir= document.getElementById("dir").value;
	var tip_pag= document.getElementById("tip_pag").value;
	var pago_efct= document.getElementById("pago_efct").value;
	var detalle= document.getElementById("detalle").value;
	var precio= document.getElementById("precio").value;
	var horario= document.getElementById("horario").value;
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
    document.getElementById("menu").innerHTML=xmlhttp.responseText;
	nuevaSecion();
    }
  }
xmlhttp.open("POST","http://www.swci.com.ar/restoapp/server/includes/realiza_pedido.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("pe_id="+pe_id+"&cl_id="+cl_id+"&nombre="+nombre+"&meail="+mail+"&dir="+dir+"&tel="+tel+"&tip_pag="+tip_pag+"&pago_efct="+pago_efct+"&detalle="+detalle+"&precio="+precio+"&horario="+horario);
}
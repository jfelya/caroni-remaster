function CheckSecurity() {

 if (typeof(window.sessionStorage) != "undefined")
 {

   window.sessionStorage.setItem("IBanking","Y");
   document.forms[0].UserId.focus();

}

else
{
	    //alert("Click Caroni requiere el uso de un Navegador mas Actualizado.\n Favor actualizelo para mayor seguridad");
	    document.getElementById("MSGENTER").innerHTML= "Click Caroni requiere el uso de un Navegador mas Actualizado. Favor actualizelo para mayor seguridad";
	    document.getElementById("MSGENTER").style.color="red";   
	    document.getElementById("CAMPOS").style.display = "none";

   }
}

if (top != self)
{

  top.location = self.location;

}


top.window.moveTo(0,0);

if (document.all)
{

  top.window.resizeTo(screen.availWidth,screen.availHeight);

}

else if (document.layers||document.getElementById)
{

  if (top.window.outerHeight<screen.availHeight||top.window.outerWidth<screen.availWidth)
  {

    top.window.outerHeight = screen.availHeight;
    top.window.outerWidth = screen.availWidth;

 }
}

function sspage(lang) {

  parent.window.location.href='/DIBS_CARONI_VNZ/JSLogIn_INI?LNG=' + lang + '&UTYPE=2';

}

function enviar() {

 if (document.forms[0].UserId.value == "")
 {

   alert("El Identificador de Usuario no puede estar en blanco");
   return false;

}

else
{

   document.forms[0].submit();

}  
}

function FSubmitValidation() {

 if (document.forms[0].UserId.value == "")
 {

   alert("El Identificador de Usuario no puede estar en blanco");
   return false;

}

return true;

}


var newwindow;

function pops() {

 newwindow=window.open('actions_enter_id.jsp?TYPE=1&LGT=2','enter_id','height=450,width=434');

 if (window.focus)
 {

  newwindow.focus()

}

}

function popsConditions() {

 newwindow=window.open('actions_conditions.jsp','enter_id','height=450,width=434');

 if (window.focus) 
 {

   newwindow.focus();

}
}

function popsreclave() {

	newwindow=window.open('actions_enter_id.jsp?TYPE=2&LGT=2','enter_id','height=450,width=434');

	if (window.focus) {

      newwindow.focus();

   }

}
function popsreusuario() {

	newwindow=window.open('actions_enter_id.jsp?TYPE=3&LGT=2','enter_id','height=450,width=434');

	if (window.focus) {
      newwindow.focus()
   }

}

function abrirTecladoVirtual (FIELD, SF) {

  if (document.forms[0].UserId.value == "")
  {

   alert("El Identificador de Usuario no puede estar en blanco");
   document.forms[0].UserId.focus();

}

else
{
  window.open("pop_TecladoVirtual.jsp?PF=" + FIELD + "&SF=" + SF,"","toolbar=no,location=no,directories=no,status=no,scrollbars=no,menubar=no,height=210,width=450,resizable=no");
}

}
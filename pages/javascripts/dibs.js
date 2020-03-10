var fieldName;
var prefix = "/pages/";
var webapp = "/DIBS_CARONI_VNZ";
var imgPath = webapp + "/images/";
var amountformat = true;
var prodenv=true;

var msgRightClick = "Click Caroní";

function blurify() {
	if (prodenv)
	{

		if (event.button == 2 || event.button == 3)
		{

			this.oncontextmenu = false;
			alert(msgRightClick);
			return false;

		}

		if (child_window)
		{

			if (parent_window)
			{

				parent_window.blur();

			}

			child_window.focus();

		}
	}
}

function clickmouse() {

	if (prodenv)
	{

		if (navigator.appName == "Netscape" && btnClick.which == 3)
		{

			alert(msgRightClick); 
			return false;

		}

		else if (navigator.appName =="Microsoft Internet Explorer" && event.button == 2)
		{

			alert(msgRightClick);	
			return false;

		}
	}
}


function format(num,decimal) {

	var count = decimal;
	var result = "";

	if (decimal)
	{

		result = ".";

	}

	while (count--)
	{

		num = num*10;

	}

	num = Math.round(num) + "";
	var len = num.length;
	count = decimal;

	while (count--)
	{

		result = result + num.charAt(len-count-1);

	}

	for (var x=len-decimal-1,count=0;x>=0;x--)
	{

		result = num.charAt(x) + result;

		if (!(++count%3) && x > 0)
		{ 

			result = "," + result; 

		}
	}

	return(result);

}

function CenterWindow(page,w1,h1,tp) {

	var w=screen.width;
	var h=screen.height;
	var posTop=(h-h1)/2;
	var posLeft=(w-w1)/2;
	var position='left='+posLeft+',top='+posTop+',height='+h1+',width='+w1;

	switch (tp)
	{

		case 1:
		listin = window.open(page,'',position);
		break;
		case 2:
		listin = window.open(page,'','toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,'+position);
		break;
		case 3:
		listin = window.open(page,'','scrollbars=yes,'+position);
		break;
		case 4:
		listin = window.open(page,'','toolbar=yes,location=no,directories=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no,'+position);
		break;
		case 5:
		listin = window.open(page,'','toolbar=no,location=no,directories=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,'+position);
		break;

	}
}

function DOBPicker(d1,d2,d3) {

	fieldDate1 = d1;
	fieldDate2 = d2;
	fieldDate3 = d3;
	page= webapp + prefix + "pop_date_picker.jsp";
	CenterWindow(page,300,270,5);

}

function DatePicker(d1,d2,d3)
{

	fieldDate1 = d1;
	fieldDate2 = d2;
	fieldDate3 = d3;
	page= webapp + prefix + "pop_date_picker.jsp";
	CenterWindow(page,350,270,5);

}

function dibsPrint() {

	window.focus();
	window.print();
	return;

}

function replaceAll(value,char) {

	var result = value;
	var posi = value.indexOf(char);

	if (posi > -1)
	{

		while (posi > -1)
		{

			result = value.substring(0,posi);
			result = result + value.substring(posi+1);
			posi = result.indexOf(char);
			value = result;

		}    
	}

	return(result);

}

function formatCCY(num) {

	var num2 = "";
	var result = "";
	var sign = "";
	sign = num.substring(0,1);

	if (sign == "-")
	{

		num = num.substring(1);

	}

	else
	{

		sign="";

	}

	var posi = num.indexOf(".");

	if (posi > -1)
	{

		var x = num.length;
		num2 = num.substring(posi, x); //num.substring(x-3, x);
		num = num.substring(0, posi); //num.substring(0, x-3);

		if (num2.length == 2)
		{

			num2= num2 +"0";

		}

		else if (num2.length > 3)
		{

			num2 = num2.substring(0, 3);

		}
	}

	else
	{

		num2 = ".00";

	}

	var count = 0;
	var y = num.length -1;

	for (x=y;x>-1;x--)
	{
		var nx = num.charAt(x); 
		result = nx + result;
		++count;

		if (count == 3 || count == 6 || count == 9 || count == 12)
		{

			if(x > 0) { result = "," + result; } // add commas

		}

	}

	result = sign + result + num2;
	return(result);

}

function formatValor2(campo,preformat) {

	var	vr = campo.value;
	vr = vr.replace( ".", "" );
	vr = replaceAll( vr, "," );
	var sign = "";

	if (vr.indexOf('-') != -1)
	{

		vr = replaceAll( vr, "-" );
		sign = "-";

	}

	var	tam = (preformat) ? vr.length : vr.length + 1;
	campo.maxLength = 15;

	if ( tam <= 2 )
	{ 

		campo.value = vr ;

	}

	if ( (tam > 2) && (tam <= 5) )
	{

		campo.maxLength = 16;

		campo.value = vr.substr( 0, tam - 2 ) + '.' + vr.substr( tam - 2, tam ) ;

	}

	if ( (tam >= 6) && (tam <= 8) )
	{

		campo.maxLength = 17;

		campo.value = vr.substr( 0, tam - 5 ) + ',' + vr.substr( tam - 5, 3 ) + '.' + vr.substr( tam - 2, tam ) ;

	}

	if ( (tam >= 9) && (tam <= 11) )
	{

		campo.maxLength = 18;

		campo.value = vr.substr( 0, tam - 8 ) + ',' + vr.substr( tam - 8, 3 ) + ',' + vr.substr( tam - 5, 3 ) + '.' + vr.substr( tam - 2, tam );
	}

	if ( (tam >= 12) && (tam <= 14) )
	{

		campo.maxLength = 19;

		campo.value = vr.substr( 0, tam - 11 ) + ',' + vr.substr( tam - 11, 3 ) + ',' + vr.substr( tam - 8, 3 ) + ',' + vr.substr( tam - 5, 3 ) + '.' + vr.substr( tam - 2, tam );

	}
	if ( (tam >= 15) && (tam <= 17) )
	{

		campo.maxLength = 20;

		campo.value = vr.substr( 0, tam - 14 ) + ',' + vr.substr( tam - 14, 3 ) + ',' + vr.substr( tam - 11, 3 ) + ',' + vr.substr( tam - 8, 3 ) + ',' + vr.substr( tam - 5, 3 ) + '.' + vr.substr( tam - 2, tam ) ;

	}
	var pos = campo.value.indexOf('.');

	if (pos != -1)
	{

		vr = campo.value.substr( 0, pos );

		if (vr == "00" || (vr.length == 2 && vr.substr( 0, 1) == "0"))
		{

			campo.value =  campo.value.substr(1, tam);

		}
	}

	campo.value = sign + campo.value;

}

function enterDecimal2() {
	
	var elem=event.srcElement;
	var kcode=event.keyCode;
	var val;
	var newVal="";
	if (amountformat) elem.value = replaceAll(elem.value, "," );
	switch (kcode){
		case 66:
		case 98:
		{
			event.returnValue = false;
			if(elem.value.indexOf('.')==-1) {
				if (elem.value.length > 0) {
					if (parseInt(elem.value)==0)  elem.value = "1000000000.00"; 
					else if (elem.maxLength - elem.value.length > 12) elem.value = elem.value + "000000000.00"; 
				}else elem.value = "1000000000.00";
			} else {
				val = parseFloat(elem.value) * 1000000000.00;
				newVal = "" + val;
				if(newVal.indexOf('.')==-1) newVal=newVal+".00";
				else {
					val = newVal.length - newVal.indexOf('.');
					if(val == 2) newVal = newVal+"0";
				}
				if (newVal=="0.00") elem.value = "1000000000.00";
				else if (elem.maxLength > newVal.length) elem.value = newVal;                                      
			}
			if (amountformat) formatValor2(elem,true);
			break;
		}
		case 72:
		case 104:
		{
			event.returnValue = false;
			if(elem.value.indexOf('.')==-1) {
				if (elem.value.length > 0) {
					if (parseInt(elem.value)==0)  elem.value = "100.00"; 
					else if (elem.maxLength - elem.value.length > 5) elem.value = elem.value + "00.00"; 
				}else elem.value = "100.00";
			} else {
				val = parseFloat(elem.value) * 100.00;
				newVal = "" + val;
				if(newVal.indexOf('.')==-1) newVal=newVal+".00";
				else {
					val = newVal.length - newVal.indexOf('.');
					if(val == 2) newVal = newVal+"0";
				}
				if (newVal=="0.00") elem.value = "100.00";
				else if (elem.maxLength > newVal.length) elem.value = newVal;                          
			}
			if (amountformat) formatValor2(elem,true);
			break;
		}
		case 77:
		case 109:
		{
			event.returnValue = false;
			if(elem.value.indexOf('.')==-1) {
				if (elem.value.length > 0) {
					if (parseInt(elem.value)==0)  elem.value = "1000000.00"; 
					else if (elem.maxLength - elem.value.length > 9) elem.value = elem.value + "000000.00"; 
				}else elem.value = "1000000.00";
			} else {
				val = parseFloat(elem.value) * 1000000.00;
				newVal = "" + val;
				if(newVal.indexOf('.')==-1) newVal=newVal+".00";
				else {
					val = newVal.length - newVal.indexOf('.');
					if(val == 2) newVal = newVal+"0";
				}
				if (newVal=="0.00") elem.value = "1000000.00";
				else if (elem.maxLength > newVal.length) elem.value = newVal;                          
			}
			if (amountformat) formatValor2(elem,true);
			break;
		}
		case 84:
		case 116:
		{
			event.returnValue = false;
			if(elem.value.indexOf('.')==-1) {
				if (elem.value.length > 0) {
					if (parseInt(elem.value)==0)  elem.value = "1000.00"; 
					else if (elem.maxLength - elem.value.length > 6) elem.value = elem.value + "000.00"; 
				}else elem.value = "1000.00";
			} else {
				val = parseFloat(elem.value) * 1000.00;
				newVal = "" + val;
				if(newVal.indexOf('.')==-1) newVal=newVal+".00";
				else {
					val = newVal.length - newVal.indexOf('.');
					if(val == 2) newVal = newVal+"0";
				}
				if (newVal=="0.00") elem.value = "1000.00";
				else if (elem.maxLength > newVal.length) elem.value = newVal;                          
			}
			if (amountformat) formatValor2(elem,true);
			break;
		}
		default: {
			if (amountformat) {
				if ((kcode < 48 || kcode > 57) && kcode != 13)
					{event.returnValue = false;
						formatValor2(elem,true);}
						else if (kcode != 13) formatValor2(elem,false);
					} else {
						if ((kcode < 48 || kcode > 57) && kcode != 46 && kcode != 13)
							{event.returnValue = false;}
						else if (kcode == 46 && elem.value.indexOf('.')!==-1) {event.returnValue = false;}
					}
				}
			}

		}

		function formatValor1(campo,preformat) {
			var	vr = campo.value;
		//vr = vr.replace( ".", "" );
		vr = replaceAll( vr, "." );
		vr = replaceAll( vr, "," );
		campo.value = "";
		var sign = "";
		if (vr.indexOf('-') != -1) {
			vr = replaceAll( vr, "-" );
			sign = "-";
		}	
		var	tam = (preformat) ? vr.length : vr.length + 1;

		campo.maxLength = 15;
		if ( tam <= 2 ){ 
			campo.value = vr ; }
			if ( (tam > 2) && (tam <= 5) ){
				campo.maxLength = 16;
				campo.value = vr.substr( 0, tam - 2 ) + ',' + vr.substr( tam - 2, tam ) ; }
				if ( (tam >= 6) && (tam <= 8) ){
					campo.maxLength = 17;
					campo.value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
					if ( (tam >= 9) && (tam <= 11) ){
						campo.maxLength = 18;
						campo.value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
						if ( (tam >= 12) && (tam <= 14) ){
							campo.maxLength = 19;
							campo.value = vr.substr( 0, tam - 11 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ; }
							if ( (tam >= 15) && (tam <= 17) ){
								campo.maxLength = 20;
								campo.value = vr.substr( 0, tam - 14 ) + '.' + vr.substr( tam - 14, 3 ) + '.' + vr.substr( tam - 11, 3 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + ',' + vr.substr( tam - 2, tam ) ;}
								var pos = campo.value.indexOf(',');
								if (pos != -1) {
									vr = campo.value.substr( 0, pos );
									if (vr == "00" || (vr.length == 2 && vr.substr( 0, 1) == "0")) campo.value =  campo.value.substr(1, tam);
								}
								campo.value = sign + campo.value;	
							}

							function enterDecimal1(){
								var elem=event.srcElement;
								var kcode=event.keyCode;
								var val;
								var newVal="";
								if (amountformat) elem.value = replaceAll(elem.value, "," );
								switch (kcode){
									case 66:
									case 98:
									{
										event.returnValue = false;
										if(elem.value.indexOf(',')==-1) {
											if (elem.value.length > 0) {
												if (parseInt(elem.value)==0)  elem.value = "1000000000,00"; 
												else if (elem.maxLength - elem.value.length > 12) elem.value = elem.value + "000000000,00"; 
											}else elem.value = "1000000000,00";
										} else {
											val = parseFloat(elem.value) * 1000000000,00;
											newVal = "" + val;
											if(newVal.indexOf(',')==-1) newVal=newVal+",00";
											else {
												val = newVal.length - newVal.indexOf(',');
												if(val == 2) newVal = newVal+"0";
											}
											if (newVal=="0,00") elem.value = "1000000000,00";
											else if (elem.maxLength > newVal.length) elem.value = newVal;                                      
										}
										if (amountformat) formatValor1(elem,true);
										break;
									}
									case 72:
									case 104:
									{
										event.returnValue = false;
										if(elem.value.indexOf(',')==-1) {
											if (elem.value.length > 0) {
												if (parseInt(elem.value)==0)  elem.value = "100,00"; 
												else if (elem.maxLength - elem.value.length > 5) elem.value = elem.value + "00,00"; 
											}else elem.value = "100,00";
										} else {
											val = parseFloat(elem.value) * 100.00;
											newVal = "" + val;
											if(newVal.indexOf(',')==-1) newVal=newVal+",00";
											else {
												val = newVal.length - newVal.indexOf(',');
												if(val == 2) newVal = newVal+"0";
											}
											if (newVal=="0,00") elem.value = "100,00";
											else if (elem.maxLength > newVal.length) elem.value = newVal;                          
										}
										if (amountformat) formatValor1(elem,true);
										break;
									}
									case 77:
									case 109:
									{
										event.returnValue = false;
										if(elem.value.indexOf(',')==-1) {
											if (elem.value.length > 0) {
												if (parseInt(elem.value)==0)  elem.value = "1000000,00"; 
												else if (elem.maxLength - elem.value.length > 9) elem.value = elem.value + "000000,00"; 
											}else elem.value = "1000000,00";
										} else {
											val = parseFloat(elem.value) * 1000000.00;
											newVal = "" + val;
											if(newVal.indexOf(',')==-1) newVal=newVal+",00";
											else {
												val = newVal.length - newVal.indexOf(',');
												if(val == 2) newVal = newVal+"0";
											}
											if (newVal=="0,00") elem.value = "1000000,00";
											else if (elem.maxLength > newVal.length) elem.value = newVal;                          
										}
										if (amountformat) formatValor1(elem,true);
										break;
									}
									case 84:
									case 116:
									{
										event.returnValue = false;
										if(elem.value.indexOf(',')==-1) {
											if (elem.value.length > 0) {
												if (parseInt(elem.value)==0)  elem.value = "1000,00"; 
												else if (elem.maxLength - elem.value.length > 6) elem.value = elem.value + "000,00"; 
											}else elem.value = "1000,00";
										} else {
											val = parseFloat(elem.value) * 1000.00;
											newVal = "" + val;
											if(newVal.indexOf(',')==-1) newVal=newVal+",00";
											else {
												val = newVal.length - newVal.indexOf('.');
												if(val == 2) newVal = newVal+"0";
											}
											if (newVal=="0,00") elem.value = "1000,00";
											else if (elem.maxLength > newVal.length) elem.value = newVal;                          
										}
										if (amountformat) formatValor1(elem,true);
										break;
									}
									default: {
										if (amountformat) {
											if ((kcode < 48 || kcode > 57) && kcode != 13)
												{event.returnValue = false;
													formatValor1(elem,true);}
													else if (kcode != 13) formatValor1(elem,false)
														else formatValor1(elem,true); 
												} else {
													if ((kcode < 48 || kcode > 57) && kcode != 46 && kcode != 13)
														{event.returnValue = false;}
													else if (kcode == 46 && elem.value.indexOf(',')!==-1) {event.returnValue = false;}
												}
											}
										}

									}

									function enterSignCCY() {
										var elem=event.srcElement;
										var kcode=event.keyCode;
										var val;
										var newVal="";
										switch (kcode){
											case 45:
											{
												event.returnValue = false;
												if(elem.value.indexOf('-')==-1) elem.value = "-" + elem.value; 
												break;
											}
											case 43:
											{
												event.returnValue = false;
												if(elem.value.indexOf('-')!==-1) elem.value = elem.value.substring(1,elem.value.length);           
												break;
											}
											default: {
												enterDecimal();
											}
										}
									}   

									function roundFCCY(num) {
										var num2 = "";
										var result = 0;
										var num1 = replaceAll("" + num,",");
										var sign = num1.substring(0,1);
										if(sign == "-") num1 = num1.substring(1);
										else sign="";
										var posi = num1.indexOf(".");
										if (posi != -1) {
											num2 = num1.substring(posi +1, num1.length);
											if (num2.length > 2) {
												if (parseInt(num2.substring(2, 3)) > 5) {
													result = parseFloat(num1.substring(0,posi + 3)) + 0.01;
													return(sign + result);
												} else return( sign + num1.substring(0,posi + 3));
											} else return("" + num);
										} else return("" + num);

									}

									function enterSignDecimal() {
										var elem=event.srcElement;
										var kcode=event.keyCode;
										var val;
										var newVal="";
										switch (kcode){
											case 66:
											case 98:
											{
												event.returnValue = false;
												if(elem.value.indexOf('.')==-1) {
													if (elem.value.length > 0) {
														if (parseInt(elem.value)==0)  elem.value = "1000000000.00"; 
														else if (elem.maxLength - elem.value.length > 12) elem.value = elem.value + "000000000.00"; 
													}else elem.value = "1000000000.00";
												} else {
													val = parseFloat(elem.value) * 1000000000.00;
													newVal = "" + val;
													if(newVal.indexOf('.')==-1) newVal=newVal+".00";
													else {
														val = newVal.length - newVal.indexOf('.');
														if(val == 2) newVal = newVal+"0";
													}
													if (newVal=="0.00") elem.value = "1000000000.00";
													else if (elem.maxLength > newVal.length) elem.value = newVal;                                      
												}
												break;
											}
											case 72:
											case 104:
											{
												event.returnValue = false;
												if(elem.value.indexOf('.')==-1) {
													if (elem.value.length > 0) {
														if (parseInt(elem.value)==0)  elem.value = "100.00"; 
														else if (elem.maxLength - elem.value.length > 5) elem.value = elem.value + "00.00"; 
													}else elem.value = "100.00";
												} else {
													val = parseFloat(elem.value) * 100.00;
													newVal = "" + val;
													if(newVal.indexOf('.')==-1) newVal=newVal+".00";
													else {
														val = newVal.length - newVal.indexOf('.');
														if(val == 2) newVal = newVal+"0";
													}
													if (newVal=="0.00") elem.value = "100.00";
													else if (elem.maxLength > newVal.length) elem.value = newVal;                          
												}
												break;
											}
											case 77:
											case 109:
											{
												event.returnValue = false;
												if(elem.value.indexOf('.')==-1) {
													if (elem.value.length > 0) {
														if (parseInt(elem.value)==0)  elem.value = "1000000.00"; 
														else if (elem.maxLength - elem.value.length > 9) elem.value = elem.value + "000000.00"; 
													}else elem.value = "1000000.00";
												} else {
													val = parseFloat(elem.value) * 1000000.00;
													newVal = "" + val;
													if(newVal.indexOf('.')==-1) newVal=newVal+".00";
													else {
														val = newVal.length - newVal.indexOf('.');
														if(val == 2) newVal = newVal+"0";
													}
													if (newVal=="0.00") elem.value = "1000000.00";
													else if (elem.maxLength > newVal.length) elem.value = newVal;                          
												}
												break;
											}
											case 84:
											case 116:
											{
												event.returnValue = false;
												if(elem.value.indexOf('.')==-1) {
													if (elem.value.length > 0) {
														if (parseInt(elem.value)==0)  elem.value = "1000.00"; 
														else if (elem.maxLength - elem.value.length > 6) elem.value = elem.value + "000.00"; 
													}else elem.value = "1000.00";
												} else {
													val = parseFloat(elem.value) * 1000.00;
													newVal = "" + val;
													if(newVal.indexOf('.')==-1) newVal=newVal+".00";
													else {
														val = newVal.length - newVal.indexOf('.');
														if(val == 2) newVal = newVal+"0";
													}
													if (newVal=="0.00") elem.value = "1000.00";
													else if (elem.maxLength > newVal.length) elem.value = newVal;                          
												}
												break;
											}
											case 45:
											{
												event.returnValue = false;
												if(elem.value.indexOf('-')==-1) elem.value = "-" + elem.value; 
												break;
											}
											case 43:
											{
												event.returnValue = false;
												if(elem.value.indexOf('-')!==-1) elem.value = elem.value.substring(1,elem.value.length);           
												break;
											}
											default: {
												if ((kcode < 48 || kcode > 57) && kcode != 46 && kcode != 13)
													{event.returnValue = false;}
												else if (kcode == 46 && elem.value.indexOf('.')!==-1) {event.returnValue = false;}
											}
										} 
									}

									function enterInteger() {
										var elem=event.srcElement;
										var kcode=event.keyCode;
										switch (kcode){
											case 66:
											case 98:
											{
												event.returnValue = false;
												if (elem.value.length > 0) {
													if (parseInt(elem.value)==0)  elem.value = "1000000000"; 
													else if (elem.maxLength - elem.value.length > 9) elem.value = elem.value + "000000000"; 
												}else elem.value = "1000000000";
												break;
											}
											case 72:
											case 104:
											{
												event.returnValue = false;
												if (elem.value.length > 0) {
													if (parseInt(elem.value)==0)  elem.value = "100"; 
													else if (elem.maxLength - elem.value.length > 2) elem.value = elem.value + "00"; 
												}else elem.value = "100";
												break;
											}
											case 77:
											case 109:
											{
												event.returnValue = false;
												if (elem.value.length > 0) {
													if (parseInt(elem.value)==0)  elem.value = "1000000"; 
													else if (elem.maxLength - elem.value.length > 6) elem.value = elem.value + "000000"; 
												}else elem.value = "1000000";    	 
												break;
											}
											case 84:
											case 116:
											{
												event.returnValue = false;
												if (elem.value.length > 0) {
													if (parseInt(elem.value)==0)  elem.value = "1000"; 
													else if (elem.maxLength - elem.value.length > 3) elem.value = elem.value + "000"; 
												}else elem.value = "1000";
												break;
											}
											default: {
												if ((kcode < 48 || kcode > 57) && kcode != 13) event.returnValue = false;
											}
										}
									}

									function formatCCY(num) {
										var num2 = "";
										var result = "";
										var sign = "";
										sign = num.substring(0,1);
										if(sign == "-") num = num.substring(1);
										else sign="";

										var posi = num.indexOf(".");
										if(posi > -1){
											var x = num.length;
	 num2 = num.substring(posi, x); //num.substring(x-3, x);
	 num = num.substring(0, posi); //num.substring(0, x-3);
	 if (num2.length == 2) num2= num2 +"0";
	 else if (num2.length > 3) num2 = num2.substring(0, 3) 
	}
else{
	num2 = ".00";
}
var count = 0;
var y = num.length -1;
for(x=y;x>-1;x--) {
	var nx = num.charAt(x); 
	result = nx + result;
	++count;
	if(count == 3 || count == 6 || count == 9 || count == 12){
	  		if(x > 0) { result = "," + result; } // add commas
	  	}

	  }

	  result = sign + result + num2;
	  return(result);
	}


// Capture keyboard events to filter valid characters only.
function validCharacters(){
	var code = event.keyCode;
	if (((code>64&&code<91)	    ||
		(code>96&&code<123)	    ||
		(code>47&&code<58)       ||
		(code==164) 				||
		(code==165) 				||
		(code==32))){
		return true;
}
else{
	return false;
}      
}

function validCharactersUser(){
	var code = event.keyCode;
	if (((code>64&&code<91)	    ||
		(code>96&&code<123)	    ||
		(code>47&&code<58)       ||
		(code==164) 				||
		(code==165))){
		return true;
}
else{
	return false;
}      
}

function validNumber(){
	var code = event.keyCode;
	if (code>47&&code<58){
		return true;
	}
	else{
		return false;
	}      
}

function validInteger(){
	var code = event.keyCode;
	if (code>47 && code<59){
		event.returnValue = true;
	}
	else{
		event.returnValue = false;
	}      
}	

function enterDecimalComa() {
	var elem=event.srcElement;
	var kcode=event.keyCode;
	var val;
	var newVal="";
	if (amountformat) elem.value = replaceAll(elem.value, "," );
	switch (kcode){
		case 66:
		case 98:
		{
			event.returnValue = false;
			if(elem.value.indexOf(',')==-1) {
				if (elem.value.length > 0) {
					if (parseInt(elem.value)==0)  elem.value = "1000000000,00"; 
					else if (elem.maxLength - elem.value.length > 12) elem.value = elem.value + "000000000,00"; 
				}else elem.value = "1000000000,00";
			} else {
				val = parseFloat(elem.value) * 1000000000,00;
				newVal = "" + val;
				if(newVal.indexOf(',')==-1) newVal=newVal+",00";
				else {
					val = newVal.length - newVal.indexOf(',');
					if(val == 2) newVal = newVal+"0";
				}
				if (newVal=="0,00") elem.value = "1000000000,00";
				else if (elem.maxLength > newVal.length) elem.value = newVal;                                      
			}
			if (amountformat) formatValor(elem,true);
			break;
		}
		case 72:
		case 104:
		{
			event.returnValue = false;
			if(elem.value.indexOf(',')==-1) {
				if (elem.value.length > 0) {
					if (parseInt(elem.value)==0)  elem.value = "100,00"; 
					else if (elem.maxLength - elem.value.length > 5) elem.value = elem.value + "00,00"; 
				}else elem.value = "100,00";
			} else {
				val = parseFloat(elem.value) * 100.00;
				newVal = "" + val;
				if(newVal.indexOf(',')==-1) newVal=newVal+",00";
				else {
					val = newVal.length - newVal.indexOf(',');
					if(val == 2) newVal = newVal+"0";
				}
				if (newVal=="0,00") elem.value = "100,00";
				else if (elem.maxLength > newVal.length) elem.value = newVal;                          
			}
			if (amountformat) formatValor(elem,true);
			break;
		}
		case 77:
		case 109:
		{
			event.returnValue = false;
			if(elem.value.indexOf(',')==-1) {
				if (elem.value.length > 0) {
					if (parseInt(elem.value)==0)  elem.value = "1000000,00"; 
					else if (elem.maxLength - elem.value.length > 9) elem.value = elem.value + "000000,00"; 
				}else elem.value = "1000000,00";
			} else {
				val = parseFloat(elem.value) * 1000000.00;
				newVal = "" + val;
				if(newVal.indexOf(',')==-1) newVal=newVal+",00";
				else {
					val = newVal.length - newVal.indexOf(',');
					if(val == 2) newVal = newVal+"0";
				}
				if (newVal=="0,00") elem.value = "1000000,00";
				else if (elem.maxLength > newVal.length) elem.value = newVal;                          
			}
			if (amountformat) formatValor(elem,true);
			break;
		}
		case 84:
		case 116:
		{
			event.returnValue = false;
			if(elem.value.indexOf(',')==-1) {
				if (elem.value.length > 0) {
					if (parseInt(elem.value)==0)  elem.value = "1000,00"; 
					else if (elem.maxLength - elem.value.length > 6) elem.value = elem.value + "000,00"; 
				}else elem.value = "1000,00";
			} else {
				val = parseFloat(elem.value) * 1000.00;
				newVal = "" + val;
				if(newVal.indexOf(',')==-1) newVal=newVal+",00";
				else {
					val = newVal.length - newVal.indexOf('.');
					if(val == 2) newVal = newVal+"0";
				}
				if (newVal=="0,00") elem.value = "1000,00";
				else if (elem.maxLength > newVal.length) elem.value = newVal;                          
			}
			if (amountformat) formatValor(elem,true);
			break;
		}
		default: {
			if (amountformat) {
				if ((kcode < 48 || kcode > 57) && kcode != 13)
					{event.returnValue = false;
						formatValor(elem,true);}
						else if (kcode != 13) formatValor(elem,false)
							else formatValor(elem,true); 
					} else {
						if ((kcode < 48 || kcode > 57) && kcode != 46 && kcode != 13)
							{event.returnValue = false;}
						else if (kcode == 46 && elem.value.indexOf(',')!==-1) {event.returnValue = false;}
					}
				}
			}

		}


		function trim(value)
		{

			var i = 0;
			var front = false;
			var rear = false;
			var j = value.length;

			while ((j > 0) && ((front == false) || (rear == false))){

				if (value.charAt(i) != " "){front = true;}
				else {
					value = value.substring(i+1);
					j = value.length -1;}

					if (value.charAt(j) != " "){
						rear = true;}
						else if (i == j-1) {
							value = value.charAt(i);
							rear = true;
						}
						else{
							value = value.substring(0,j-1);
							j = value.length -1;
						}
					}
					return value;
				} 

				function radioClick(name,idx) {
					var oObject = document.all.item(name);
					if (oObject != null){
						if (oObject.length != null){
							oObject(idx).click();
						}
						else{
							oObject.click();
						}
					} 
				}

				function go1(op) {
					var dist= op -1
					dataDiv.scrollTop= dataDiv.clientHeight * dist;
				}

				function adjustEquTables(Table1,Table2,Div1,rb,footTb) {
					var T1= Table1.rows[0];
					var T2= Table2.rows[0];
					var wT1=0;
					var wT2=0;
					var maxCol=0;
					var incr=0;
					var maxWidth=0;
					var adjPerCol=0;
					var adjust=0;
					var mainTb= Table1.parentNode;

					if ( Table2.rows.length >= 1 ) {

						maxCol= T2.cells.length;
						incr= maxCol * 2;


						for(var i=0;i<maxCol;i++){
							T1.cells[i].style.pixelWidth=0;
							T2.cells[i].style.pixelWidth=0;

							wT1= T1.cells[i].clientWidth;  
							wT2= T2.cells[i].clientWidth;

							T1.cells[i].style.pixelWidth= ( wT1 >= wT2 ) ? wT1: wT2;
							T2.cells[i].style.pixelWidth= ( wT1 >= wT2 ) ? wT1: wT2;
							maxWidth= ( wT1 >= wT2 ) ? maxWidth + wT1: maxWidth + wT2;

						}


						if (footTb) {
							footTable.rows[0].cells[0].style.pixelWidth= (maxWidth + 8 ) - T1.cells[maxCol-1].style.pixelWidth;
							footTable.rows[0].cells[1].style.pixelWidth= T1.cells[maxCol-1].style.pixelWidth;
						}
						maxWidth += incr;


						Table1.width= maxWidth;
						Table2.width= Table1.width;
						if (footTb) { footTable.width= Table1.width;}

   //incr= (footTb) ? 21 : 40;

   if ( Table1.clientWidth < mainTb.clientWidth ){
   	incr= (Div1.style.overflowY=="scroll") ? Table1.clientWidth + 23: Table1.clientWidth;
   	adjust= mainTb.clientWidth - incr ;
   	adjPerCol= adjust / (maxCol - rb);
   	adjPerCol= Math.round(adjPerCol);

   	for(k=0;k<maxCol;k++){ 
   		wT1= T1.cells[k].style.pixelWidth;	
   		T1.cells[k].style.pixelWidth= ( k == (rb-1) ) ? wT1: wT1 + adjPerCol;
   		wT2= T2.cells[k].style.pixelWidth;
   		T2.cells[k].style.pixelWidth= ( k == (rb-1) ) ? wT2: wT2 + adjPerCol;       
   	}
   	if (footTb) {
   		footTable.rows[0].cells[0].style.pixelWidth += adjPerCol * 5 ;
   		footTable.rows[0].cells[1].style.pixelWidth += adjPerCol;
   	}
   }	

}
else{Table1.width="100%"} 

}

function adjustDifTables(Table1,Table2,Div1,column,rb) {
	var T1= Table1.rows[0];
	var T11= Table1.rows[1];
	var maxT11Col = T11.cells.length -1;
	var wT1= 0;
	var wT2= 0;
	var n= column;
	var maxWidth=0;
	var adjPerCol=0;
	var adjust=0;
   var mainTb= Table1.parentNode; //TD

   if ( Table2.rows.length >= 1 ) {

   	var T2= Table2.rows[0];
   	var maxCol=Table2.rows[0].cells.length;
   	var incr= maxCol * 2;

   	for(i=0;i<n;i++){
   		T1.cells[i].style.pixelWidth=0;
   		T2.cells[i].style.pixelWidth=0;
   		wT1= T1.cells[i].offsetWidth;   
   		wT2= T2.cells[i].offsetWidth;
   		if ( wT1 > wT2 ) {
   			T1.cells[i].style.pixelWidth = wT1;
   			T2.cells[i].style.pixelWidth = wT1;
   		}else{		
   			T1.cells[i].style.pixelWidth = wT2;
   			T2.cells[i].style.pixelWidth = wT2;
   		}
   		maxWidth= ( wT1 > wT2 ) ? maxWidth + wT1: maxWidth + wT2;
   	}

   	for(i=n;i<maxCol;i++){

   		if ( i>=n && i<=(n+maxT11Col) ) { 
   			T11.cells[i-n].style.pixelWidth=0;
   			wT1= T11.cells[i-n].offsetWidth;
   		} else {
   			T1.cells[i-maxT11Col].style.pixelWidth=0;
   			wT1= T1.cells[i-maxT11Col].offsetWidth; }

   			T2.cells[i].style.pixelWidth=0;  
   			wT2= T2.cells[i].offsetWidth;

   			if ( wT1 > wT2 ) {
   				T2.cells[i].style.pixelWidth=wT1;
   				if (  i>=n && i<=(n+maxT11Col) ) {
   					T11.cells[i -n].style.pixelWidth=wT1;
   				} else {
   					T1.cells[i -maxT11Col].style.pixelWidth=wT1; 
   				}
   			} else {
   				T2.cells[i].style.pixelWidth=wT2;
   				if ( i>=n && i<=(n+maxT11Col) ) {
   					T11.cells[i -n].style.pixelWidth=wT2;
   				} else {
   					T1.cells[i -maxT11Col].style.pixelWidth=wT2; 
   				}
   			}
   			maxWidth= ( wT1 > wT2 ) ? maxWidth + wT1: maxWidth + wT2;
   		}

   		maxWidth += incr;
   		Table1.width= maxWidth;
   		Table2.Width= Table1.Width;

   		if ( Table1.clientWidth < mainTb.clientWidth ){
   			incr= (Div1.style.overflowY=="scroll") ? Table1.clientWidth + 18: Table1.clientWidth;
   			adjust= mainTb.clientWidth - incr ;
   			adjPerCol= adjust / (maxCol - rb);
   			adjPerCol= Math.round(adjPerCol);

   			for(k=0;k<n;k++){ 
   				wT1= T1.cells[k].style.pixelWidth;	
   				T1.cells[k].style.pixelWidth= ( k == (rb-1) ) ? wT1: wT1 + adjPerCol;
   				wT2= T2.cells[k].style.pixelWidth;
   				T2.cells[k].style.pixelWidth= ( k == (rb-1) ) ? wT2: wT2 + adjPerCol;       
   			}

   			for(k=n;k<maxCol;k++){
   				if ( k>=n && k<=(n+maxT11Col) ) {
   					wT1= T11.cells[k - n].style.pixelWidth;
   					T11.cells[k - n].style.pixelWidth= ( k == (rb-1) ) ? wT1: wT1 + adjPerCol;
   				}  else {
   					wT1= T1.cells[k - maxT11Col].style.pixelWidth;	
   					T1.cells[k - maxT11Col].style.pixelWidth= ( k == (rb-1) ) ? wT1: wT1 + adjPerCol; }
   					wT2= T2.cells[k].style.pixelWidth;
   					T2.cells[k].style.pixelWidth= ( k == (rb-1) ) ? wT2: wT2 + adjPerCol;       
   				}

   			}

   		}
   		else{ Table1.width="100%" } 
   	}  

   function GetCurrency(name,bank){
   	fieldName=name;
   	BankNumber = "?BankNumber=" + bank;
   	page= webapp +  "/JSHelpCCY" + BankNumber + "&PB=H";
   	listin = window.open(page,'','height=260,width=480,scrollbars=yes');
   }

   function autotab(){ 
   	var elem=event.srcElement;
   	var coll=document.forms[0];
   	var i=0;
  if (event.keyCode==9 || event.keyCode==16) return; //TAB=9 and SHIFT=16
  if (elem.type=="text" || elem.type=="password") {
  	if (elem.value.length > (elem.maxLength-1)){
  		while (i<coll.length){
  			if (coll[i]==elem) { break;} else {i++;}
  		}
  		i++;
  		while (i < coll.length) { 
  			if (coll[i].type=="hidden" || coll[i].readOnly || coll[i].style.visibilty =="hidden") {i++;} 
  			else {
  				coll[i].focus();
  				if (coll[i].tagName !=="SELECT") { coll[i].select();}
  				break;}
  			}

  		}
  	}
  }

  document.onkeyup=autotab;    

  function getMSIEVer(){
  	var ver=0;
  	var start= (navigator.appVersion.indexOf("MSIE ") != -1) ? navigator.appVersion.indexOf("MSIE ") : 0;
  	var end= (start > 0) ? navigator.appVersion.indexOf(";",start) : 0;

  ver= parseFloat(navigator.appVersion.substring(start + 5,end)); // +5 because length("MSIE ")=5
  return(ver);
  
}

if ( getMSIEVer() < 5.5 ) {
	var tempStyle = "<STYLE>"+
	".TDADDINFO{ filter:BlendTrans(duration=1);}"+
	"</STYLE>"
	document.write(tempStyle);
}

// date validation .

function getActualDate(DTFMT, firstDay){
	var now = new Date();
	var year = now.getYear();
	var month = now.getMonth() + 1;

	if (firstDay) var day = "01";
	else var day  = now.getDate();
	var today = '';
	if (month < 10) month = '0' + month;
	if (day < 10) day = '0' + day; 
	if (DTFMT == 'MDY') today = month + '/' + day + '/' + year;
	else if (DTFMT == 'DMY') today = day + '/' + month + '/' + year;
	else if (DTFMT == 'YMD') today = year + '/' + day + '/' + month;

	return today;
}

function GetActualTime(){
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var currentTime = '';
	if (hours < 10) hours = '0' + hours;
	currentTime = ' ' + hours + ':' + minutes + 'hrs.';
	return currentTime;    
}


//////// Check whether string s is empty.
function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}

// isYear (STRING s)
// 
// isYear returns true if string s is a valid 
// Year number.  Must be 2 or 4 digits only.
//
function isYear (s)
{   if (isEmpty(s)) return false;
	return ((s.length == 2) || (s.length == 4));
}

// isMonth (STRING s)
// 
// isMonth returns true if string s is a valid 
// month number between 1 and 12.
//
function isMonth (s)
{   if (isEmpty(s)) return false;
	return (parseInt(s,10) >=1 && parseInt(s,10) <=12);
}

// isDay (STRING s)
// 
// isDay returns true if string s is a valid 
// day number between 1 and 31.
//
function isDay (s)
{   if (isEmpty(s)) return false;
	return (parseInt(s,10) >=1 && parseInt(s,10) <=31);
}

// daysInFebruary (INTEGER year)
// 
// Given integer argument year,
// returns number of days in February of that year.
function daysInFebruary (year)
{   // February has 29 days in any year evenly divisible by four,
    // EXCEPT for centurial years which are not also divisible by 400.
    return (  ((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0) ) ) ? 29 : 28 );
 }


//validate date
function isDate (year, month, day)
{   
	if (! (isYear(year) && isMonth(month) && isDay(day)) ) return false;
	var intYear = parseInt(year,10);
	var intMonth = parseInt(month,10);
	var intDay = parseInt(day,10);
	if ((intMonth == 2) && (intDay > daysInFebruary(intYear))) return false;
	return true;
}

//format date ,fills day & month with leading zeroes, and year with century
function fDate(vDate, fmtDate){
	var dateArray=vDate.split("/");
	var day = "";
	var month = "";
	var year = "";
	if (fmtDate == "MDY") { 
		day = dateArray[1];
		month = dateArray[0];
		year = dateArray[2];
	} else if (fmtDate == "DMY") {
		day = dateArray[0];
		month = dateArray[1];
		year = dateArray[2];
	} else if (fmtDate == "YMD") {
		day = dateArray[2];
		month = dateArray[1];
		year = dateArray[0];}
		else return "";
		day = ((day.length == 1)?"0"+day:day);
		month = ((month.length == 1)?"0"+month:month);
		year = ((year.length == 2)? ((parseInt(year,10)>50)?"19":"20") + year:year);
		if (fmtDate == "MDY") return (month+'/'+day+'/'+year);
		else if (fmtDate == "DMY") return (day+'/'+month+'/'+year);
		else if (fmtDate == "YMD") return (year+'/'+month+'/'+day);
		else return "";
	}

//yy/mm/dd
function isDateValid (year, month, day)
{   
	day = ((day.length == 1)?"0"+day:day);
	month = ((month.length == 1)?"0"+month:month);
	year = ((year.length == 2)? ((parseInt(year,10)>50)?"19":"20") + year:year);

	return isDate(year,month,day);
}

// disable click right
function right() {
	if (navigator.appName == 'Microsoft Internet Explorer' && 
		(event.button == 2 || event.button == 3)) {
		if (!(event.srcElement.type=="text")){
			alert("eIBS \nDatapro, inc.\n" + msgRightClick);
			return false;}
		}
		return true;
	} 

	function trim(value){
		var i = 0;
		var front = false;
		var rear = false;
		var j = value.length;

		while ((j > 0) && ((front == false) || (rear == false))){
			if (value.charAt(i) != " "){front = true;}
			else {
				value = value.substring(i+1);
				j = value.length -1;}
				if (value.charAt(j) != " "){
					rear = true;}
					else if (i == j-1) {
						value = value.charAt(i);
						rear = true;
					}
					else{
						value = value.substring(0,j-1);
						j = value.length -1;
					}
				}
				return value;
			} 

			function notifyout(t, n, f){
				if(t.length>n){
					alert("Ud. tiene "+t.length+" caracteres, este campo solo puede tener "+n+" caracteres.") 
					f.focus()
					return false
				}	
			}

			function doPrint(){
				if (!window.print) {
					var msg =       "Dear Customer:\n";
					msg = msg + "to use the print boton,\n";
					msg = msg + "please upgrade your browser.";
					alert(msg);

					return;
				}

				window.focus();
				window.print();

				return;
			}

			function GetBranch(name,bank){
				fieldName=name;
				page = "/DIBS_CARONI_VNZ/JSHelpBranch?BankNumber=" + bank;
				listin = window.open(page,'','height=260,width=500,scrollbars=yes');
			}  

			function isValidEmail(str) {
				if ((str.indexOf(".") > 2) && (str.indexOf("@") > 0)){
				}
				else{
					alert("Dirección de Correo Electronico, Invalida");
				}
			}

			function selectAll(value, form) {
				for (i = 1; i < form.elements.length; i++) {
					if (form.elements[i].name.substr(0, 4) == 'CHK_') {
						form.elements[i].checked = value;
					}
				}
			}
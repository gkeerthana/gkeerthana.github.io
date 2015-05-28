function settext(k)
{
document.getElementById("screen").innerHTML += k;
}

function resettext()
{
document.getElementById("screen").innerHTML = "";
document.getElementById("delchar").innerHTML = "DEL";

}

function evaluateexp()
{
	var a = eval(document.getElementById("screen").innerHTML);
	document.getElementById("screen").innerHTML = a;
	document.getElementById("delchar").innerHTML = "RESET";
}

function delchar()
{
	if(document.getElementById("delchar").innerHTML=="DEL")
	{
		var i = document.getElementById("screen").innerHTML;
		i=i.substring(0,i.length-1);
		document.getElementById("screen").innerHTML=i;
	}
	else
	if(document.getElementById("delchar").innerHTML=="RESET")
	{
		resettext();
	}
}

function settext(k)
{
document.getElementById("screen").innerHTML += k;
}

function resettext()
{
document.getElementById("screen").innerHTML = "";
}

function evaluateexp()
{
	var a = eval(document.getElementById("screen").innerHTML);
	document.getElementById("screen").innerHTML = a;
}

function delchar()
{
var i = document.getElementById("screen").innerHTML;
i=i.substring(0,i.length-1);
document.getElementById("screen").innerHTML=i;
}

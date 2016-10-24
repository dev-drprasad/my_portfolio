

showDivs(1);
function showDivs(n)
{
	var n;
	var x = document.getElementsByClassName("myBox");
	var quotes = document.getElementById("quotes")
	var i;

	for(i=0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}
	if(n > 0)
	{
		x[n - 1].style.display = "block";
		quotes.style.display = "none";
	}
}
	
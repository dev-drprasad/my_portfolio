

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


carousel = (function(){
  var box = document.querySelector('.carouselbox');
  var next = document.querySelector('.next');
  var prev = document.querySelector('.prev');
  var items = document.querySelectorAll('.carouselbox .content > li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();
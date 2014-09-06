var beginBut = document.getElementById("begin");
var title = document.getElementById("Title");
var subtitle = document.getElementById("subTitle");
var options = document.getElementById("options");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var box1 = document.getElementById("A");
var box2 = document.getElementById("B");
var box3 = document.getElementById("C");
var box4 = document.getElementById("D");
var input = document.getElementsByTagName("input");

beginBut.addEventListener('click', function(){
	beginBut.style.visibility = 'hidden';
	subTitle.style.display = 'none';
	options.style.display = 'inherit';
	title.innerHTML = 'Choose The Emotiion That Best Fits You'
});
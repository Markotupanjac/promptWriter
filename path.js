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
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
beginBut.addEventListener('click', function(){
	beginBut.style.visibility = 'hidden';
	subTitle.style.display = 'none';
	options.style.display = 'inherit';
	title.innerHTML = 'Choose The Emotion That Best Fits You'
});
box1.addEventListener('click', function(){
count1++;
localStorage.setItem("box1Num", count1);

})
box2.addEventListener('click', function(){
count2++;
localStorage.setItem("box2Num", count2);

})
box3.addEventListener('click', function(){
count3++;
localStorage.setItem("box3Num", count3);

})
box4.addEventListener('click', function(){
count4++;
localStorage.setItem("box4Num", count4);

})
	function q2(){
		if(one.innerHTML == 'Happy'){
		title.innerHTML = 'Out of the Choices Below, What Are Your Favorite Genres?';
		one.innerHTML = 'Comedy';
		two.innerHTML = 'Horror';
		three.innerHTML = 'Thriller';
		four.innerHTML = 'Drama';
		box1.checked = false;
		box2.checked = false;
		box3.checked = false;
		box4.checked = false;
	}
	}

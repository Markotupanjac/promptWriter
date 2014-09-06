var beginBut = document.getElementById("begin");
var title = document.getElementById("Title");
var subtitle = document.getElementById("subTitle");
var stuff = document.getElementById("stuff");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var box1 = document.getElementById("A");
var box2 = document.getElementById("B");
var box3 = document.getElementById("C");
var box4 = document.getElementById("D");
var input = document.getElementsByTagName("input");
var yay = document.getElementById("yay");
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
beginBut.addEventListener('click', function(){
	beginBut.style.display = 'none';
	image.style.display = 'none';
	title.style.display = 'inherit';
	subTitle.style.display = 'none';
	yay.style.display = 'inherit';
	
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
		title.style.visibility = 'true';
		one.innerHTML = 'Happy';
		two.innerHTML = 'Sad';
		three.innerHTML = 'Angry';
		four.innerHTML = 'Confused';
		box1.checked = false;
		box2.checked = false;
		box3.checked = false;
		box4.checked = false;
	}
	if(count1 + count2 + count3 + count4 == 1){
		title.innerHTML = 'true';
		one.innerHTML = 'hi';
		two.innerHTML = 'hi';
		three.innerHTML = 'hi';
		four.innerHTML = 'hi';
	}
	}
	
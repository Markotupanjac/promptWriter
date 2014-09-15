var Comedy = [
"Kanye West is one of the four Kanye's. The other three being Kanye North, Kanye South, and Kanye East. What happens when they all meet.",
"A Mime is a witness to a murder, explain how he tells the police of what he saw. Remember: Mimes cannot speak.",
];
var Horror = [
	"A wife kills her husband, make the reader sympathize with both characters.",
	"A suicide hotline operator realizes that the person he's talking down is a wanted serial killer",
	"You've just been selected for jury duty. As the trial begins, the opening prosecutor details a gruesome murder that you instantly recognize..because you committed it and the defendant is being framed.",
	"A crazy man gets admitted to a mental institution where he meets another crazy man who hears the same voices as him. Write of the man's expierence.",
	"You are legally allowed to commit murder once, but you must fill out the proper paperwork and your proposed victim will be notified of your intentions",
];
var Thriller = [
	"You are legally allowed to commit murder once, but you must fill out the proper paperwork and your proposed victim will be notified of your intentions",
	"You've just been selected for jury duty. As the trial begins, the opening prosecutor details a gruesome murder that you instantly recognize..because you committed it and the defendant is being framed.",
	"Harry Potter is sitting at home sixty years after the battle of Hogwarts, an old man now, when suddenly his scar hurts.",
	"An old genie grants you three wishes. After granting your first two, you tell him the third. He is horrified, and begs you to reconsider. Describe The entire event.",
];
var Drama = [
"A wife kills her husband, mae the reader sympathize with both characters.",
"A crazy man get admitted to a mental institution where he meets another crazy man who hears the same voices as him. Write of the man's expierence.",
"An old genie grants you three wishes. After granting your first two, you tell him the third. He is horrified, and begs you to reconsider. Describe The entire event.",
];
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
var math1 = Math.random();


beginBut.addEventListener('click', function(){
	beginBut.style.display = 'none';
	image.style.display = 'none';
	title.style.display = 'inherit'
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
	if((count1 + count2 + count3 + count4) + 1 === 1){
		title.innerHTML = 'What is Your Favorite Genre?';
		one.innerHTML = 'Comedy';
		two.innerHTML = 'Horror';
		three.innerHTML = 'Thriller';
		four.innerHTML = 'Drama';
	}
	if((count1 + count2 + count3 + count4) + 1 === 2){
		title.innerHTML = 'What would you do if confronted by a grizzly bear?';
		one.innerHTML = 'Juggle for the bear in hopes of distracting him';
		two.innerHTML = 'Run for your life into an abandoned house';
		three.innerHTML = 'Fight that furry beast with a knife';
		four.innerHTML = 'Sacrafice your friend to save your life';
		box1.checked = false;
		box2.checked = false;
		box3.checked = false;
		box4.checked = false;
	}
	if((count1 + count2 + count3 + count4) + 1 === 3){
		title.innerHTML = 'If you had to have one of these superpowers, which would it be?';
		one.innerHTML = "Flying, but you can't wear pants while flying";
		two.innerHTML = 'Run for your life into an abandoned house';
		three.innerHTML = 'Teleporting but you randomly teleport once a week';
		four.innerHTML = 'Invisibility you can only control it in the summer';
		box1.checked = false;
		box2.checked = false;
		box3.checked = false;
		box4.checked = false;
	}
	if((count1 + count2 + count3 + count4) + 1 === 4){
		title.innerHTML = 'What is your favorite color?';
		one.innerHTML = "Blue";
		two.innerHTML = 'Black';
		three.innerHTML = 'Red';
		four.innerHTML = 'Green';
		box1.checked = false;
		box2.checked = false;
		box3.checked = false;
		box4.checked = false;
	} 
	if(count1 + 1 >= 3){
		if(Math.random()<=0.5){
    title.innerHTML = 'You Tested To Be In A Relaxed/Comical State of Mind, Try Writing About This: ' + " "  + Comedy[0];
    options.style.display = 'none';
    title.style.fontSize = '40px';
}else{
	title.innerHTML = "You Tested To Be In A Relaxed/Comical State of Mind, Try Writing About This:" + " " + Comedy[1];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}
}

if(count2 + 1 >= 3){
		if(math1 <= 0.20){
    title.innerHTML = 'You Tested To Be In A Stressed/Nervous State of Mind, Try Writing About This: ' + " "  + Horror[0];
    options.style.display = 'none';
    title.style.fontSize = '40px';
}
else if(0.20 < math1 <= 0.40){
	title.innerHTML = "You Tested To Be In A Stressed/Nervous State of Mind, Try Writing About This:" + " " + Horror[1];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}
 else if(0.4 < math1 <= 0.6){
	title.innerHTML = "You Tested To Be In A Stressed/Nervous State of Mind, Try Writing About This:" + " " + Horror[2];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}
else if(0.6 < math1 <= 0.8){
	title.innerHTML = "You Tested To Be In A Stressed/Nervous State of Mind, Try Writing About This:" + " " + Horror[3];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}else if(0.8 < math1 <= 1){
	title.innerHTML = "You Tested To Be In A Stressed/Nervous State of Mind, Try Writing About This:" + " " + Horror[4];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}
	}
	if(count3 + 1 >= 3){
		if(math1 <= 0.25){
    title.innerHTML = 'You Tested To Be In An Excited State of Mind, Try Writing About This: ' + " "  + Thriller[0];
    options.style.display = 'none';
    title.style.fontSize = '40px';
}
else if(0.25 < math1 <= 0.50){
	title.innerHTML = "You Tested To Be In An Excited State of Mind, Try Writing About This:" + " " + Thriller[1];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}
 else if(0.5 < math1 <= 0.75){
	title.innerHTML = "You Tested To Be In An Excited State of Mind, Try Writing About This:" + " " + Thriller[2];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}
else if(0.75 < math1 <= 1){
	title.innerHTML = "You Tested To Be In An Excited State of Mind, Try Writing About This:" + " " + Thriller[3];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}
	}
	if(count4 + 1 >= 3){
		if(math1 <= 0.33){
    title.innerHTML = 'You Tested To Be In An Dramatic/Disoriented State of Mind, Try Writing About This: ' + " "  + Drama[0];
    options.style.display = 'none';
    title.style.fontSize = '40px';
}
else if(0.33 < math1 <= 0.66){
	title.innerHTML = "You Tested To Be In An Dramatic/Disoriented State of Mind, Try Writing About This:" + " " + Drama[1];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}
 else if(0.66 < math1 <= 1){
	title.innerHTML = "You Tested To Be In An Dramatic/Disoriented State of Mind, Try Writing About This:" + " " + Drama[2];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}

}
if(count1 + count2 + 1 >= 4){

if(math1 <= 0.5){
	title.innerHTML = "You Tested To Be In An Relaxed/monkey State of Mind, Try Writing About This:" + " " + Comedy[Math.floor((Math.random()*2))];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}
else{
	title.innerHTML = "You Tested To Be In An Stressed State of Mind, Try Writing About This:" + " " + Horror[Math.floor((Math.random()*5))];
	options.style.display = 'none';
    title.style.fontSize = '40px';
}

}

}


	
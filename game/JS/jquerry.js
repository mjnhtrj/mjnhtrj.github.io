



	var cards =[1 ,2 ,3 ,4,5,6,7,8,9,10,11,12];
	var current=null;
	var count =0;
	var  remainingTime;
	var run;
	
function progressBarSim(al) {
  var bar = document.getElementById('progressBar');
  var status = document.getElementById('status');
  status.innerHTML = al+"%";
  bar.value = al;
  al--;
	var sim = setTimeout("progressBarSim("+al+")", 1000);
	if(al == 0){
	  status.innerHTML = "100%";
	  bar.value = 0;
	  clearTimeout(sim);
	  var finalMessage = document.getElementById('finalMessage');
	  finalMessage.innerHTML = "Process is complete";
	}
}
var amountLoaded = 0;




	function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}
   

cards=cards.concat(cards);
shuffle(cards);

 var zzzz="";

 // var test ="";





for(var e=0;e<cards.length;e++){

  	// test ='<div class="timer"><div class="progressbar" style="display: inline;"><progress max="100" value="'+e+'"></progress></div></div>'

	 zzzz+='<div class="grid"><div class="card" data="'+cards[e]+'" onclick="flip(this)"><div class="front"><img src="./img/back.jpg"/></div><div class="back"><img src="./img/'+cards[e]+'.png"/></div></div></div>';

	}
	
	// $(".wrap").html(test);

	$(".content").html(zzzz);

	




    function flip(card){
        
        $(card).toggleClass('flipped');
        $(card).css('pointer-events', 'auto');

        
        if(!current){
        	current = $(card);
        	$(card).css('pointer-events', 'none');
        	
        }else{
        	if(current.attr('data') !=$(card).attr('data') ){

        		console.log(' Khác nhau');





        		
        	setTimeout(function(){	
        		$(card).toggleClass('flipped');
        		current.toggleClass('flipped');	
        		
        		current = null;	
        		},500);


        	}else{
        		console.log('Giống nhau');
        		

        		setTimeout(function(){
        		$(card).css('opacity','0');
        		current.css('opacity','0');
        		current = null;

        		document.getElementById('bg-music').play();

        	},200);


        		count++;

        		if(count ==12)	{
        			alert('ban da chien thang');

        						}
        		
        		
        	}
        	$('.card').css('pointer-events', 'auto');
        }




    };


    
document.getElementById('bg-mus2ic').play();






function startGame(n){

	document.getElementById('bg-musicc').play();

	progressBarSim(amountLoaded);
	$(".modal").css('display','none');

if(n==1){
	remainingTime =10;

	

}else {
	
}
run=setInterval(function(){
	remainingTime--;
	console.log(remainingTime);


	if(remainingTime==0){
		clearInterval(run);
		// document.getElementById('bg-music2').play();

		alert("Ban da thua cuoc");

		hehe='<button class="btn btn-start normal" onclick="startGame(1)">Normal</button>'




	}
	},5000);

}





























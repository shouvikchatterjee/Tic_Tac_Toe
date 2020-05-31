//created by Shouvik on 30/05/2020 -- 31/05/2020
$(document).ready(function(){
	var turn = "p1";
	$(".button").click(function(){	
		var btn = $(this).attr('id');
		if(turn == "p2"){
			if(!$(this).hasClass("occupied")){
				$(this).addClass("occupied");
				$(this).addClass("tick");
				$(this).html("&#9899;");
				turn = "p1";
				$(".player").html("Player 1 Turn!");
			}else{
				$(this).css("background-color", "red"); 
				setTimeout(function(){
					$(".occupied").css("background-color", "black"); 
				},800);
			}
		}else{
			if(!$(this).hasClass("occupied")){
				$(this).addClass("occupied");
				$(this).addClass("cross");
				$(this).html("&#10006;");
				turn = "p2";
				$(".player").html("Player 2 Turn!");
			}else{
				$(this).css("background-color", "red"); 
				setTimeout(function(){				
					$(".occupied").css("background-color", "black"); 
				},800);
			}
		}
		
		checkWinner();
	});
	
	function checkWinner(){
		if($("#button1").hasClass("tick") && $("#button2").hasClass("tick") && $("#button3").hasClass("tick")){
			common();
			player2Common($("#button1"),$("#button2"),$("#button3"));
			addGlow($("#button1"),$("#button2"),$("#button3"));
		}else if($("#button1").hasClass("tick") && $("#button4").hasClass("tick") && $("#button7").hasClass("tick")){
			common();
			player2Common($("#button1"),$("#button4"),$("#button7"));
			addGlow($("#button1"),$("#button4"),$("#button7"));
		}else if($("#button1").hasClass("tick") && $("#button5").hasClass("tick") && $("#button9").hasClass("tick")){
			common();
			player2Common($("#button1"),$("#button5"),$("#button9"));
			addGlow($("#button1"),$("#button5"),$("#button9"));
		}else if($("#button2").hasClass("tick") && $("#button5").hasClass("tick") && $("#button8").hasClass("tick")){
			common();
			player2Common($("#button2"),$("#button5"),$("#button8"));
			addGlow($("#button2"),$("#button5"),$("#button8"));
		}else if($("#button3").hasClass("tick") && $("#button6").hasClass("tick") && $("#button9").hasClass("tick")){
			common();
			player2Common($("#button3"),$("#button6"),$("#button9"));
			addGlow($("#button3"),$("#button6"),$("#button9"));
		}else if($("#button3").hasClass("tick") && $("#button5").hasClass("tick") && $("#button7").hasClass("tick")){
			common();
			player2Common($("#button3"),$("#button5"),$("#button7"));
			addGlow($("#button3"),$("#button5"),$("#button7"));
		}else if($("#button4").hasClass("tick") && $("#button5").hasClass("tick") && $("#button6").hasClass("tick")){
			common();
			player2Common($("#button4"),$("#button5"),$("#button6"));
			addGlow($("#button4"),$("#button5"),$("#button6"));
		}else if($("#button7").hasClass("tick") && $("#button8").hasClass("tick") && $("#button9").hasClass("tick")){
			common();
			player2Common($("#button7"),$("#button8"),$("#button9"));
			addGlow($("#button7"),$("#button8"),$("#button9"));
		}else if($("#button1").hasClass("cross") && $("#button2").hasClass("cross") && $("#button3").hasClass("cross")){
			common();
			player1Common($("#button1"),$("#button2"),$("#button3"));
			addGlow($("#button1"),$("#button2"),$("#button3"));
		}else if($("#button1").hasClass("cross") && $("#button4").hasClass("cross") && $("#button7").hasClass("cross")){
			common();
			player1Common($("#button1"),$("#button4"),$("#button7"));
			addGlow($("#button1"),$("#button4"),$("#button7"));
		}else if($("#button1").hasClass("cross") && $("#button5").hasClass("cross") && $("#button9").hasClass("cross")){
			common();
			player1Common($("#button1"),$("#button5"),$("#button9"));
			addGlow($("#button1"),$("#button5"),$("#button9"));
		}else if($("#button2").hasClass("cross") && $("#button5").hasClass("cross") && $("#button8").hasClass("cross")){
			common();
			player1Common($("#button2"),$("#button5"),$("#button8"));
			addGlow($("#button2"),$("#button5"),$("#button8"));
		}else if($("#button3").hasClass("cross") && $("#button6").hasClass("cross") && $("#button9").hasClass("cross")){
			common();
			player1Common($("#button3"),$("#button6"),$("#button9"));
			addGlow($("#button3"),$("#button6"),$("#button9"));
		}else if($("#button3").hasClass("cross") && $("#button5").hasClass("cross") && $("#button7").hasClass("cross")){
			common();
			player1Common($("#button3"),$("#button5"),$("#button7"));
			addGlow($("#button3"),$("#button5"),$("#button7"));
		}else if($("#button4").hasClass("cross") && $("#button5").hasClass("cross") && $("#button6").hasClass("cross")){
			common();
			player1Common($("#button4"),$("#button5"),$("#button6"));
			addGlow($("#button4"),$("#button5"),$("#button6"));
		}else if($("#button7").hasClass("cross") && $("#button8").hasClass("cross") && $("#button9").hasClass("cross")){
			common();
			player1Common($("#button7"),$("#button8"),$("#button9"));
			addGlow($("#button7"),$("#button8"),$("#button9"));
		}else{
			checkAllFilled();
		}
	}
	function common(){
		$(".button").unbind("click");
		$(".button").css("cursor","default");
		$(".replay").css('display','block');
	}
	function player1Common(btn1,btn2,btn3){
		btn1.css('color','red');
		btn2.css('color','red');
		btn3.css('color','red');
		$(".player").html("Player 1 wins!!");
		$(".player").css('color','red');
	}
	function player2Common(btn1,btn2,btn3){
		btn1.css('color','green');
		btn2.css('color','green');
		btn3.css('color','green');
		$(".player").html("Player 2 wins!!");
		$(".player").css('color','green');
	}
	function addGlow(btn1,btn2,btn3){
		btn1.addClass("glow");
		btn2.addClass("glow");
		btn3.addClass("glow");
	}
	function checkAllFilled(){
		if($("#button1").hasClass("occupied") && $("#button2").hasClass("occupied") && $("#button3").hasClass("occupied") && $("#button4").hasClass("occupied") && $("#button5").hasClass("occupied") && $("#button6").hasClass("occupied") && $("#button7").hasClass("occupied") && $("#button8").hasClass("occupied") && $("#button9").hasClass("occupied")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$(".button").css('color','yellow');
			$(".player").css('color','yellow');
			$(".player").html("Game Draw!!");
			$(".replay").css('display','block');
		}
	}
	
	$(".replay").click(function(){
		$(".button").bind({
			click : function(){
				var btn = $(this).attr('id');
				if(turn == "p2"){
					if(!$(this).hasClass("occupied")){
						$(this).addClass("occupied");
						$(this).addClass("tick");
						$(this).html("&#9899;");
						turn = "p1";
						$(".player").html("Player 1 Turn!");
					}else{
						$(this).css("background-color", "red"); 
						setTimeout(function(){
							$(".occupied").css("background-color", "black"); 
						},800);
					}
				}else{
					if(!$(this).hasClass("occupied")){
						$(this).addClass("occupied");
						$(this).addClass("cross");
						$(this).html("&#10006;");
						turn = "p2";
						$(".player").html("Player 2 Turn!");
					}else{
						$(this).css("background-color", "red"); 
						setTimeout(function(){				
							$(".occupied").css("background-color", "black"); 
						},800);
					}
				}
				
				checkWinner();
			}
		});
		turn = "p1";
		$(".button").removeClass("occupied").removeClass("tick").removeClass("cross");
		$(".button").html("");
		$(".button").css("cursor","pointer");
		$(".button").css("color","white");
		$(".button").removeClass("glow");
		$(".player").css("color","white");
		$(".player").html("Player 1 Turn!");
		$(".replay").css('display','none');
	});
});
//created by Shouvik on 30/05/2020 -- 
$(document).ready(function(){
	var turn = "p1";
	$(".button").click(function(){	
		var btn = $(this).attr('id');
		if(turn == "p1"){
			if(!$(this).hasClass("occupied")){
				$(this).addClass("occupied");
				$(this).addClass("tick");
				$(this).html("&#10004;");
				turn = "p2";
				$(".player").html("Player 2 Turn!");
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
				turn = "p1";
				$(".player").html("Player 1 Turn!");
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
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button1").css('color','green');
			$("#button2").css('color','green');
			$("#button3").css('color','green');
			$(".player").html("Player 1 wins!!");
			$(".player").css('color','green');
			$(".replay").css('display','block');
		}else if($("#button1").hasClass("tick") && $("#button4").hasClass("tick") && $("#button7").hasClass("tick")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button1").css('color','green');
			$("#button4").css('color','green');
			$("#button7").css('color','green');
			$(".player").html("Player 1 wins!!");
			$(".player").css('color','green');
			$(".replay").css('display','block');
		}else if($("#button1").hasClass("tick") && $("#button5").hasClass("tick") && $("#button9").hasClass("tick")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button1").css('color','green');
			$("#button5").css('color','green');
			$("#button9").css('color','green');
			$(".player").html("Player 1 wins!!");
			$(".player").css('color','green');
			$(".replay").css('display','block');
		}else if($("#button2").hasClass("tick") && $("#button5").hasClass("tick") && $("#button8").hasClass("tick")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button2").css('color','green');
			$("#button5").css('color','green');
			$("#button8").css('color','green');
			$(".player").html("Player 1 wins!!");
			$(".player").css('color','green');
			$(".replay").css('display','block');
		}else if($("#button3").hasClass("tick") && $("#button6").hasClass("tick") && $("#button9").hasClass("tick")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button3").css('color','green');
			$("#button6").css('color','green');
			$("#button9").css('color','green');
			$(".player").html("Player 1 wins!!");
			$(".player").css('color','green');
			$(".replay").css('display','block');
		}else if($("#button3").hasClass("tick") && $("#button5").hasClass("tick") && $("#button7").hasClass("tick")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button3").css('color','green');
			$("#button5").css('color','green');
			$("#button7").css('color','green');
			$(".player").html("Player 1 wins!!");
			$(".player").css('color','green');
			$(".replay").css('display','block');
		}else if($("#button4").hasClass("tick") && $("#button5").hasClass("tick") && $("#button6").hasClass("tick")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button4").css('color','green');
			$("#button5").css('color','green');
			$("#button6").css('color','green');
			$(".player").html("Player 1 wins!!");
			$(".player").css('color','green');
			$(".replay").css('display','block');
		}else if($("#button7").hasClass("tick") && $("#button8").hasClass("tick") && $("#button9").hasClass("tick")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button7").css('color','green');
			$("#button8").css('color','green');
			$("#button9").css('color','green');
			$(".player").html("Player 1 wins!!");
			$(".player").css('color','green');
			$(".replay").css('display','block');
		}else if($("#button1").hasClass("cross") && $("#button2").hasClass("cross") && $("#button3").hasClass("cross")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button1").css('color','red');
			$("#button2").css('color','red');
			$("#button3").css('color','red');
			$(".player").html("Player 2 wins!!");
			$(".player").css('color','red');
			$(".replay").css('display','block');
		}else if($("#button1").hasClass("cross") && $("#button4").hasClass("cross") && $("#button7").hasClass("cross")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button1").css('color','red');
			$("#button4").css('color','red');
			$("#button7").css('color','red');
			$(".player").html("Player 2 wins!!");
			$(".player").css('color','red');
			$(".replay").css('display','block');
		}else if($("#button1").hasClass("cross") && $("#button5").hasClass("cross") && $("#button9").hasClass("cross")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button1").css('color','red');
			$("#button5").css('color','red');
			$("#button9").css('color','red');
			$(".player").html("Player 2 wins!!");
			$(".player").css('color','red');
			$(".replay").css('display','block');
		}else if($("#button2").hasClass("cross") && $("#button5").hasClass("cross") && $("#button8").hasClass("cross")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button2").css('color','red');
			$("#button5").css('color','red');
			$("#button8").css('color','red');
			$(".player").html("Player 2 wins!!");
			$(".player").css('color','red');
			$(".replay").css('display','block');
		}else if($("#button3").hasClass("cross") && $("#button6").hasClass("cross") && $("#button9").hasClass("cross")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button3").css('color','red');
			$("#button6").css('color','red');
			$("#button9").css('color','red');
			$(".player").html("Player 2 wins!!");
			$(".player").css('color','red');
			$(".replay").css('display','block');
		}else if($("#button3").hasClass("cross") && $("#button5").hasClass("cross") && $("#button7").hasClass("cross")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button3").css('color','red');
			$("#button5").css('color','red');
			$("#button7").css('color','red');
			$(".player").html("Player 2 wins!!");
			$(".player").css('color','red');
			$(".replay").css('display','block');
		}else if($("#button4").hasClass("cross") && $("#button5").hasClass("cross") && $("#button6").hasClass("cross")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button4").css('color','red');
			$("#button5").css('color','red');
			$("#button6").css('color','red');
			$(".player").html("Player 2 wins!!");
			$(".player").css('color','red');
			$(".replay").css('display','block');
		}else if($("#button7").hasClass("cross") && $("#button8").hasClass("cross") && $("#button9").hasClass("cross")){
			$(".button").unbind("click");
			$(".button").css("cursor","default");
			$("#button7").css('color','red');
			$("#button8").css('color','red');
			$("#button9").css('color','red');
			$(".player").html("Player 2 wins!!");
			$(".player").css('color','red');
			$(".replay").css('display','block');
		}else{
			checkAllFilled();
		}
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
				if(turn == "p1"){
					if(!$(this).hasClass("occupied")){
						$(this).addClass("occupied");
						$(this).addClass("tick");
						$(this).html("&#10004;");
						turn = "p2";
						$(".player").html("Player 2 Turn!");
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
						turn = "p1";
						$(".player").html("Player 1 Turn!");
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
		$(".player").css("color","white");
		$(".player").html("Player 1 Turn!");
		$(".replay").css('display','none');
	});
});
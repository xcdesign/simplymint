/*$(function() {
	$('#logo').animate({top:"30px",left:"50px"},500);
	$('#logo img').animate({width:'400px'},450,function(){
		$('#content').css('opacity','1');
		$('#slide').animate({'opacity':'1'},500);
	});
});*/
function backgroundSize(){
	var img = document.getElementById('wall'); 
	var height = img.clientHeight; 
	$( "#slide" ).css( "height",height );
}
    
window.onload=function(){
	var slide = $("#slide");
	backgroundSize();
	if($(window).width()<=800){
		slide.hide(function(){
			hideSlide();
		});
	}
	$('#logo').animate({top:"30px",left:"50px"},500);
	$('#logo img').animate({width:'400px'},500,function(){
		$('#slide').animate({'opacity':'1'},500,function(){
			
		});
		$('#content').animate({'opacity':'1'},500,function(){
			
		});
	});
};

function gotospecial(num){
	contentCover(0);
	var height = $("#box"+num).offset().top-document.getElementById('wall').clientHeight;
	//alert(height);
	$('html, body').animate({
		scrollTop: height,
		}, 500);
}
function showKey(num){
	var key = "key"+num;
	$(".hide").css('display','none');
	$("#"+key).fadeIn(500);//show("slide",{direction: 'left'},400);
}
function contentCover(flag){
	var height=document.getElementById('wall').clientHeight;
	$("#nav").css({"position":"fixed",top:"0%",right:"0%"});
	$("#logo").css("position","fixed");
	
	$("#slide")
	.css("position","fixed")
	.css("top","150px");

	$("#content")
	.css("margin-top",height+"px")
	.animate({"margin-top":"150px"},500,'easeOutQuint',function(){
		if($('html, body').scrollTop != 0 && flag ==1){
			$('html, body').animate({
				scrollTop: 0,
				}, 500);
		}
	});
	
	$("#bell img").attr("src", "images/bellup.png");
	$("#bell").css({"position":"fixed",top:"50%","text-align":"left"});
}

function contentUncover(){
	var height=document.getElementById('wall').clientHeight;
	height=0-height;
	$("#nav").css({"position":"relative"});
	$("#logo").css("position","absolute");
	
	$("#slide").css({"position":"relative","top":'0px'});

	$("#content")
	.css("margin-top",height+"px")
	.animate({"margin-top":"0%"},500,'easeOutBounce');
	
	$('html, body').animate({
		scrollTop: 0,
		}, 500);
	
	$("#bell img").attr("src", "images/bell.png");
	$("#bell").css({"position":"absolute",top:"-150px","text-align":"center"});
}

$(function(){
	$("#bell img").bind("click",function(){
		if($(window).width()>=800){
			if($("#slide").css("position")=="fixed"){
				contentUncover();
			}
			else{
				contentCover(1);
			}
		}
	});
});

$(function(){
	
		$("#bell img")
		.mouseenter(function(){
			if($("#slide").css("position")!="fixed"){
				$("#content").animate({top:"-=50px"},300,'easeOutBack',function(){
					$("#content").animate({top:"+=50px"},300,'easeOutBounce');
				});
			}	
		});
	
});

$(function(){
	$("#right")
	.mouseenter(function(){
		$(".stool").animate({left:"-=4%"},450);
		$(".table").animate({left:"-=3%"},450);
		$(".back").animate({left:"-=2%"},450);
	})
	.mouseleave(function(){
		$(".stool").animate({left:"+=4%"},450);
		$(".table").animate({left:"+=3%"},450);
		$(".back").animate({left:"+=2%"},450);
	});
});

$(function(){
	$("#left")
	.mouseenter(function(){
		$(".stool").animate({left:"+=4%"},450);
		$(".table").animate({left:"+=3%"},450);
		$(".back").animate({left:"+=2%"},450);
	})
	.mouseleave(function(){
		$(".stool").animate({left:"-=4%"},450);
		$(".table").animate({left:"-=3%"},450);
		$(".back").animate({left:"-=2%"},450);
	});
});

$(window).resize(function(){
	responsive();
	/*
	}
	var timeoutResize;
    if(typeof timeoutResize != 'undefined') clearTimeout(timeoutResize);
    timeoutResize = setTimeout(function(){responsive();},50);
    */

});

function showSlide(){
	var nav = $("#nav");
	$("#logo").css("position","absolute");
	$("#nav").css("position","relative");
	$("#content").css({"min-width":"1024px","margin-top":"0px"});
	$("#bell img").attr("src", "images/bell.png");
	$("#bell").css({"position":"absolute",top:"-150px","text-align":"center","margin-top":"0px"});
	$("#slide").slideDown(500,"easeOutBounce",function(){
		backgroundSize();
	});

	nav.css({"min-width":"1024px"});
}

function hideSlide(){
	$("#logo").css("position","fixed");
	$("#nav").css({"position":"fixed",top:"0%",right:"0%"});
	$("#content").css({"margin-top":"150px","min-width":"0px"});
	$("#bell").css({"position":"absolute",top:"-150px","text-align":"center","margin-top":"0px"});
	//change box1 background image 
	//im_box1
}

function responsive(){
	backgroundSize();
	var slide = $("#slide");
	if($(window).width()<=800){
		//go to mobile view
		$("#slide").hide(function(){
			hideSlide();
		});
	}
	else{
			if(slide.css('display')=='none'){
				//from mobile view
				slide.css({'position':'relative','top':'0px'});
				showSlide();
			}
	}
}

var lastScrollTop = 0;

$(window).scroll(function(){
		
		var flag = ($("#slide").css("position")=="fixed");
		if(flag){
			var yPos = 0;
	        var coords ='';
	        if($('#box1').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box2').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box1").css({ "background-position": coords});
	        }
	        else if($('#box2').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box3').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box2").css({ "background-position": coords});
	        }
	        else if($('#box3').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box4').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box3").css({ "background-position": coords});
	        }
	        else if($('#box4').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box3').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box4").css({ "background-position": coords});
	        }
	        else if($('#box5').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box4').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box5").css({ "background-position": coords});
	        }
	        else if($('#box6').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box3').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box6").css({ "background-position": coords});
	        }
	        else if($('#box7').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box4').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box7").css({ "background-position": coords});
	        }
	        else if($('#box8').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box3').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box8").css({ "background-position": coords});
	        }
	        else if($('#box9').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box4').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box9").css({ "background-position": coords});
	        }
		}
		
		var st = $(this).scrollTop();
		
    if($("#slide").css("display")!="none" && (st>lastScrollTop)){
    	var ratio = document.getElementById('wall').clientHeight/document.documentElement.scrollTop;
    	if(ratio<=2 && !flag){
    		contentCover(1);
    	}
    	else{
    		if(flag&&document.documentElement.scrollTop==0){
    			//contentUncover();
    		}
    	}
    }
    lastScrollTop = st;
});


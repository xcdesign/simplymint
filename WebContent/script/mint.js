function showKey(num){
	var key = "key"+num;
	$(".hide").css('display','none');
	$("#"+key).fadeIn(500);//show("slide",{direction: 'left'},400);
}
function contentCover(){
	var height=document.getElementById('wall').clientHeight;
	$("#nav").css({"position":"fixed",top:"0%",right:"0%"});
	$("#logo").css("position","fixed");
	
	$("#slide")
	.css("position","fixed")
	.css("top","150px");

	$("#content")
	.css("margin-top",height+"px")
	.animate({"margin-top":"150px"},500,'easeOutQuint',function(){
		$('html, body').animate({
			scrollTop: 0,
			}, 500);
	});
	 
}

function contentUncover(){
	var height=document.getElementById('wall').clientHeight;
	height=0-height;
	$("#nav").css({"position":"relative"});
	$("#logo").css("position","absolute");
	
	$("#slide").css({"position":"relative","top":'0px'});

	$("#content")
	.css("margin-top",height+"px")
	.animate({"margin-top":"-5%"},500,'easeOutBounce');
}

$(function(){
	$("#fold_control").bind("click",function(){
		if($(window).width()>=650){
			if($("#slide").css("position")=="fixed"){
				contentUncover();
			}
			else{
				contentCover();
			}
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

function backgroundSize(){
	var img = document.getElementById('wall'); 
	var height = img.clientHeight; 
	$( "#slide" ).css( "height",height );
}

window.onload=function(){
	var slide = $("#slide");
	backgroundSize();
	if($(window).width()<=650){
		slide.hide(function(){
			hideSlide();
		});
	}
};


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
	$("#content").css({"margin-top":"-5%","min-width":"1024px"});
	$("#slide").slideDown(500,"easeOutBounce",function(){
		backgroundSize();
		$("#up").text("up");	
	});

	nav.css({"min-width":"1024px"});
}

function hideSlide(){
	$("#logo").css("position","fixed");
	$("#nav").css({"position":"fixed",top:"0%",right:"0%"});
	$("#content").css({"margin-top":"150px","min-width":"0px"});
	//change box1 background image 
	//im_box1
}

function responsive(){
	backgroundSize();
	var slide = $("#slide");
	if($(window).width()<=650){
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

$(window).scroll(function(){
		
		var flag = ($("#slide").css("position")=="fixed");
		if(flag){
			var yPos = 0;
	        var coords ='';
	        if($('#box2').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box2').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box2").css({ "background-position": coords});
	        }
	        else if($('#box3').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box3').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box3").css({ "background-position": coords});
	        }
	        else if($('#box4').offset().top==0){
	        	yPos = -(($window.scrollTop()-$('#box4').offset().top) / 10);
	        	coords = '50% '+ yPos + 'px';
	        	 $("#box4").css({ "background-position": coords});
	        }
		}
    if($("#slide").css("display")!="none"){
    	var ratio = document.getElementById('wall').clientHeight/document.documentElement.scrollTop;
    	if(ratio<=2 && !flag){
    		contentCover();
    	}
    	else{
    		if(flag&&document.documentElement.scrollTop==0){
    			//contentUncover();
    		}
    	}
    }
	
});


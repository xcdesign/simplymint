$(function(){
	$("#up").bind("click",function(){
		var height=document.getElementById('wall').clientHeight;
		height=height+150;
		$("#nav").css({"position":"fixed",top:"0%",right:"0%"});
		$("#logo").css("position","fixed");
		$("#slide").css("position","fixed");
		$("#slide").css("top","150px");
		$("#content").show();
		$("#readMore").hide();
		$("#content").css("margin-top",height+"px");
		$("#content").animate({"margin-top":"130px"},500);
		
	});
});

$(function(){
	$("#right")
	.mouseenter(function(){
		$(".stool").animate({left:"-=4%"},450);
		$("#bar").animate({left:"-=3%"},450);
		$("#wall").animate({left:"-=2%"},450);
	})
	.mouseleave(function(){
		$(".stool").animate({left:"+=4%"},450);
		$("#bar").animate({left:"+=3%"},450);
		$("#wall").animate({left:"+=2%"},450);
	});
});

$(function(){
	$("#left")
	.mouseenter(function(){
		$(".stool").animate({left:"+=4%"},450);
		$("#bar").animate({left:"+=3%"},450);
		$("#wall").animate({left:"+=2%"},450);
	})
	.mouseleave(function(){
		$(".stool").animate({left:"-=4%"},450);
		$("#bar").animate({left:"-=3%"},450);
		$("#wall").animate({left:"-=2%"},450);
	});
});

function backgroundSize(){
	//alert("here");
	var img = document.getElementById('wall'); 
	//or however you get a handle to the IMG
	var height = img.clientHeight; 
	//alert(height);
	$( "#slide" ).css( "height",height );
}

window.onload=function(){
	backgroundSize();
	if($(window).width()<=650){
		$("#slide").hide(function(){
			hideSlide();
		});
	}
	else{
			$("#content").css({"margin-top":"-6%","min-width":"1024px"});
			if($(window).width()/$(window).height()<1.7){
					$("#slide").css("position","relative");
					$("#content").slideDown();
					$("#readMore").hide();
			}
			else{
					$("#content").hide();
					showSlide();
					$("#readMore").show();
			}
		}
};

$(window).resize(function() {
		responsive();
});


function showSlide(){
	$("#slide").css("background-image","");
	$("#logo").css("position","absolute");
	$("#nav").css("position","relative");
	$("#slide").slideDown(500,"easeOutBounce",function(){
		backgroundSize();
		$("#up").text("up");	
		$("#nav").css({"opacity":"1"});
	});
	//$("#content").hide();
	$("#nav").css({"min-width":"1024px"});
}

function hideSlide(){
	$("#logo").css("position","fixed");
	$("#nav").css({"position":"fixed",top:"0%",right:"0%"});
	//hide readmore
	$("#content").css({"margin-top":"150px","min-width":"0px"});
	$("#content").show();
	//change box1 background image 
	//im_box1
}

function responsive(){
	backgroundSize();
	if($(window).width()<=650){
		$("#slide").hide(function(){
			hideSlide();
		});
	}
	else{
		if($("#slide").css("display")=="none" || $("#slide").css("position") != "fixed"){
			$("#content").css({"margin-top":"-6%","min-width":"1024px"});
			if($(window).width()/$(window).height()<1.7){
				if($("#slide").css("display") == "none"){
					$("#readMore").hide();
					showSlide();
				}
				else{
					$("#slide").css("position","relative");
					if($("#content").css("display") == "none"){	
						$("#content").slideDown();
						$("#readMore").hide();
					}
				}
			}
			else{
				if($("#slide").css("position") != "fixed"){
					$("#content").hide();
					showSlide();
					$("#readMore").show();
				}
			}
		}
	}
}

$(window).scroll(function(){
	var ratio = document.getElementById('wall').clientHeight/document.documentElement.scrollTop;
	if(ratio<=2 && $("#slide").css("position")!="fixed"){
		var height=document.getElementById('wall').clientHeight;
		height=height+150;
		$("#nav").css({"position":"fixed",top:"0%",right:"0%"});
		$("#logo").css("position","fixed");
		$("#slide").css("position","fixed");
		$("#slide").css("top","150px");
		$("#content").show();
		$("#readMore").hide();
		$("#content").css("margin-top",height+"px");
		//alert(document.getElementById('nav').clientHeight);
		$("#content").animate({"margin-top":"150px"},500);
	}
});


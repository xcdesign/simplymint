/*function blurzoom(){
	//$('#large').bind('click', function () {
		//$("#zoom").css({"display":"none"});
		$("#large").animate({opacity:0},500,function(){
			$("#blur").animate({width:"100%",top: "25%", left: "25%",opacity:0},800,function(){});
			
	});    
}
function slideup(){
	$("#blur").css({opacity:0});
	$("#large").hide(1000,function(){});
}

function slidedown(){
	//$("#blur").css({opacity:0});
	//$("#large").css({opacity:0});
	$("#zoom").css({"display":"none","z-index":"10",opacity:0});
	$(".large").animate({opacity:0},1000,function(){});
	$("#zoom")
	.show({ effect: "scale", direction: "horizontal" },
			{
		        duration: 1500,
		        easing: "easeOutBounce"
		    })
	.animate({ opacity : 1 }, { duration: 1500, queue: false });
	
}*/

function zoomblur(){
	//$("#zoom").css({"display":"none"});
	/*$("#zoom").show("scale",
			{
		        duration: 600,
		        //easing: "easeOutBounce"
		    },
			function(){});*/
	$(".large").animate({opacity:0.5},50,function(){
		$(".large").animate({width:"300%",top: "-50%",
	        left: "-50%"},2000,function(){});
		$(".large").animate({opacity:0},500,function(){});
	});	
	
	
}

$(function(){
	$("#up").bind("click",function(){
		if($("#slide").css("display") == "none"){
			$("#slide").slideDown(function(){
				$("#up").text("up");
				$("#content").fadeOut();
				$("#logo").css("position","absolute");
				$("#nav").css("position","relative");
				$("#nav").css({"opacity":"1"});
			});
		}
		else{
			$("#slide").slideUp(function(){
				$("#up").text("down");
				$("#content").slideDown();
				$("#logo").css("position","fixed");
				$("#nav").css({"position":"fixed"});
				$("#nav").animate({"opacity":"0.75"},500);
			});
		}
	});
}
);

$(function(){
	$("#right")
	.mouseenter(function(){
		$(".stool").animate({left:"-=5%"},500);
		$("#bar").animate({left:"-=3%"},400);
		$("#slide").animate({"background-position":"+=3%"},300)
	})
	.mouseleave(function(){
		$(".stool").animate({left:"+=5%"},500);
		$("#bar").animate({left:"+=3%"},400);
		$("#slide").animate({"background-position":"-=3%"},300)
	});
});

$(function(){
	$("#left")
	.mouseenter(function(){
		$(".stool").animate({left:"+=5%"},500);
		$("#bar").animate({left:"+=3%"},400);
		$("#slide").animate({"background-position":"-=3%"},300)
	})
	.mouseleave(function(){
		$(".stool").animate({left:"-=5%"},500);
		$("#bar").animate({left:"-=3%"},400);
		$("#slide").animate({"background-position":"+=3%"},300)
	});
});

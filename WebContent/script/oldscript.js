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

/*
$(function(){
	//changed part
	$("#abc").bind("click",function(){
		if($("#slide").css("display") == "none"){
			$("#slide").css("background-image","");
			$("#logo").css("position","absolute");
			$("#nav").css("position","relative");
			//$("#content").css("margin-top","150px");
			$("#slide").slideDown(500,"easeOutBounce",function(){
				backgroundSize();
				$("#up").text("up");	
				$("#nav").css({"opacity":"1"});
			});
			$("#content").hide();
			$("#nav").css({"min-width":"1024px"});
			
		}
		else{
			
			$("#slide").slideUp(500,"easeInBack",function(){
				$("#up").text("down");
				$("#nav").css({"min-width":"650px"});
				$("#logo").css("position","fixed");
				$("#nav").css({"position":"fixed",top:"0%",right:"0%"});
				$("#nav").animate({"opacity":"0.75"});
				$("#slide").css("background-image","url('../images/wall.png')");
			});
			$("#content").slideDown(600);
		}
	});
}
);
*/

/*$(window).resize(function() {
backgroundSize();
if($( window ).width()<=650){
$("#slide").slideUp(500,"easeInBack",function(){
	$("#up").text("down");
	$("#content").slideDown(600);
	$("#nav").css({"min-width":"650px"});
	$("#logo").css("position","fixed");
	$("#nav").css({"position":"fixed",top:"0%",right:"0%"});
	$("#nav").animate({"opacity":"0.75"});
});
}
else if($(window).width()/$(window).height() < 1.7){
	$("#content").css("margin-top","0px");
	$("#content").slideDown(1000, function(){
		
	});
}

});

window.onload=function(){
backgroundSize();
if($(window).width()<=650){
	$("#slide").hide(function(){
		$("#up").text("down");
		$("#content").css("display","inline");
		$("#nav").css({"min-width":"650px"});
		$("#logo").css("position","fixed");
		$("#nav").css({"position":"fixed",top:"0%",right:"0%"});
		$("#nav").animate({"opacity":"0.75"});
	});
}
else if($(window).width()/$(window).height() < 1.7){
	$("#content").css("margin-top","0px");
	$("#content").slideDown(500, function(){
		
	});
}
};
*/
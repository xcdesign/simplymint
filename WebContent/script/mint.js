function blurzoom(){
	//$('#large').bind('click', function () {
		//$("#zoom").css({"display":"none"});
		$("#large").animate({opacity:0},500,function(){
			$("#blur").animate({width:"100%",top: "25%", left: "25%",opacity:0},800,function(){});
			
	});    
}

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
	        left: "-50%"},800,function(){});
		$(".large").animate({opacity:0},10,function(){});
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
	
}
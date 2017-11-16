window.onload = function(){
	//表头
	$("#dh1").mouseenter(function(){
		$(this).find("#ol1")
			   .css({"display":"block","background":"#fff"})
	})
	$("#dh1").mouseleave(function(){
		$(this).find("#ol1")
			   .css("display","none")
	})
	$("#wx").mouseenter(function(){
		$(this).find("#wximg")
		.css({
			"display":"block","background":"#fff"
		})
	})
	$("#wx").mouseleave(function(){
		$(this).find("#wximg")
		.css("display","none")
	})
	$("#ewm").mouseenter(function(){
		$(this).find("#ewmimg")
			   .css({"display":"block","background":"#fff"})
	})
	$("#ewm").mouseleave(function(){
		$(this).find("#ewmimg")
				.css("display","none")
	})			
	$("#mj").mouseenter(function(){
		$(this).find("#mjzx")
				.css({"display":"block","background":"#fff"})
	})
	$("#mj").mouseleave(function(){
		$(this).find("#mjzx")
		       .css("display","none")
	})	
	/*
	 */
	$("#wzdh").mouseenter(function(){
		$(this).find("#dh")
		        .css("display","block")
	})
	$("#wzdh").mouseleave(function(){
		$(this).find("#dh")
			.css("display","none")
	})
	$(".tb").mouseenter(function(){
		$(this).css("")
	})
	//搜索框
	$(".searchcont").mouseover(function(){
		$(this).find("#spdp").css({"display":"block","background":"#fff"})
	})
	$(".searchcont").mouseleave(function(){
		$(this).find("#spdp").css("display","none")
	})
	$(".active").css({
		"color":"red"
	})

	$("#hotsearch a").mouseenter(function(){
		$(this).css("color","red")
		       .siblings()
		       .not(".active")
		       .css("color","black") 
	})
	
	
	$(".li1").css({
		"color":"red"
	})
	$("#navli li").hover(function(){
		$(this).find("a")
				.css("color","red")
		       .siblings()
		       .not(".li1")
		       .css("color","black") 
	})
	$("#navli li").mouseleave(function(){
		$(this).find("a")
				.css("color","black")
		       .siblings()
		       .not(".li1")
		       .css("color","black") 
	})
//banner
	var timer =setInterval(autoplay,2000);
	var index = 0;
	function autoplay(){
		index++;
		if(index == 6){
			index = 0;
		}
		$("#lb li").eq(index)
		    .css("background","red")
			.addClass("current")
			.siblings()
			.css("background","#fff")
			.removeClass("current");
		$(".bannerimg img").eq(index)
				  .fadeIn(1000)
				  .siblings()
				  .fadeOut(1000);
	}
	$("#lb li").eq(0)
			   .css({
			   	"background":"red"
			   })
}
	

window.onload = function(){
//导航
	$(".xd").click(function(){
		var _top = $(".xd").eq($(this).index()).offset().top;
		$("body,html").animate({"scrollTop":_top},1000)
		
	})
	$(window).scroll(function(e){
		if($(this).scrollTop() >600){
			//console.log($(".xd"))
			$(".xd").show();
		}
	})
	$(window).scroll(function(e){
		if($(this).scrollTop()<250)
		$(".xd").hide();
	})
//

  //点击楼层号    定位滚动条垂直方向滚走的距离  为  该楼层的top值  (根据楼层号的下标 找楼层

$(".you").click(function(){
	var _top=$(".you").eq($(this).index()).offset().top;//获取一个高度
	$("body，html").animate({"scrollTop":_top},1000)
})
$(window).scroll(function(e){
	if($(this).scrollTop() > 550){
		$(".you").show();
	}
})
$(window).scroll(function(e){
	if($(this).scrollTop() < 250){
		$(".you").hide();
	}
})




//$("#navli li").not("#li1").find("a").mouseenter(function(){
//	$(this) .css("color","red")
//		    .siblings()    
//		    .css("color","#666")		   
//}).mouseleave(function(){
//	$(this).css("color","black");
//})

$("#li1 a").mouseenter(function(){
	$(this).css("color","red")
})

$("#navli li").mouseleave(function(){
	$(this).find("a")
		   .css("color","red")
		   .siblings()  
		   .css("color","#666")
		   
})

	$(this).find("a")
	       .css("color","#666")
	       .siblings()
	       .css("color","#666")
}




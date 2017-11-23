window.onload = function(){
	
	$(".rr li").hover(function(){
		$(this).css({"padding-right":"1px"})
		       .siblings()
		       .css({"padding-right":"0"})
	},function(){
		$(this).css({"padding-right":"0"})
//		       .siblings()
//		       .css({"padding-right":"0"})
	})
	
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
//
$("#hot li").mouseenter(function(){
	$(this).css("color","red")
	       .siblings()
	       .css("color","#2c2c2c")
	       
	       
})
$("#hot li").mouseleave(function(){
	$(this).css("color","#2c2c2c")              
})

$("#hot li").find("a").mouseenter(function(){
	$(this).css("color","red")	
})
$("#hot li").find("a").mouseleave(function(){
	$(this).css("color","#2c2c2c")
})
//
$(".gd a").mouseenter(function(){
	$(this).css("color","red")	
})
$(".gd a").mouseleave(function(){
	$(this).css("color","#2c2c2c")
})
//白酒
$("#baijiu li").mouseenter(function(){
	$(this).css("color","red")
		    .siblings()
		    .css("color","#2c2c2c")
})
$("#baijiu li").mouseleave(function(){
	$(this).css("color","#2c2c2c")              
})
$("#baijiu li").find("a").mouseenter(function(){
	$(this).css("color","red")
		    
})
$("#baijiu li").find("a").mouseleave(function(){
	$(this).css("color","#2c2c2c")
})

	$("#li1").css({
		"color":"red"
	})
	$("#navli li").not("#li1").hover(function(){
		$(this).find("a")
				.css("color","red")
		       .siblings()
		       .not(".li1")
		       .css("color","black") 
	})
	$("#navli li").not("#li1").mouseleave(function(){
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






//
/*$("small-banner").find(".img1").click(function(){
	$(this).css("opacity",")
})*/
//二级菜单

$("#classify").hover(function(){
	$(this).show();
	
},function(){
	$(this).hide();
})

$("#itemone").mouseenter(function(){
	$(this).css("background","#323b42")
	$("#classify").show();
	$("#classify").html(`
		<div id="classifyleft">
		<ul>
			<h3>品牌</h3>
			<li><a href="#">泸州老窖</a></li>
			<li><a href="#">洋河</a></li>
			<li><a href="#">剑南春</a></li>
			<li><a href="#">牛栏山</a></li>
			<li><a href="#">红星</a></li>
			<li><a href="#">西凤</a></li>
			<li><a href="#">国窖1573</a></li>
			<li><a href="#">小糊涂仙</a></li>
			<li><a href="#">郎酒</a></li>
			<li><a href="#">习酒</a></li>
			<li><a href="#">鸭溪窑</a></li>
			<li><a href="#">汾酒</a></li>
			<li><a href="#">董酒</a></li>
			<li><a href="#">酒鬼酒</a></li>
			<li><a href="#">一道泓</a></li>
			<li><a href="#">五粮醇</a></li>
			<li><a href="#">衡水老白干</a></li>
			<li><a href="#">更多</a></li>
		    </ul>
		<ul>
			<h3>香型</h3>
			<li><a href="#">酱香型</a></li>
			<li><a href="#">浓香型</a></li>
			<li><a href="#">绵柔型</a></li>
			<li><a href="#">凤香型</a></li>
			<li><a href="#">董香型</a></li>
		</ul>
		<ul>
			<h3>产地</h3>
			<li><a href="#">贵州</a></li>
			<li><a href="#">江西</a></li>
			<li><a href="#">四川</a></li>
			<li><a href="#">江苏</a></li>
			<li><a href="#">山西</a></li>
			<li><a href="#">内蒙</a></li>
			<li><a href="#">青海</a></li>
		</ul>
	</div>
	<div id="classifyright">
		<dl>
			<dt>推荐品牌</dt>
			<dd><a href="#"><img src="images/cd1.jpg"/></a></dd>
		</dl>
	</div>
		`)
})
$("#itemone").mouseleave(function(){
	$(this).css("background","#3d4851")
	$("#classify").hide();
		
})


$("#itemtwo").mouseenter(function(){
	$(this).css("background","#323b42")
	$("#classify").show();
	$("#classify").html(`
		<div id="classifyleft">
		<ul>
			<h3>品牌</h3>
			<li><a href="#">黄尾袋鼠</a></li>
			<li><a href="#">佩西</a></li>
			<li><a href="#">乐船</a></li>
			<li><a href="#">小龙船</a></li>
			<li><a href="#">特拉托</a></li>
			<li><a href="#">圣迪斯</a></li>
			<li><a href="#">奔富</a></li>
			<li><a href="#">康迪</a></li>
			
		    </ul>
		<ul>
			<h3>类型</h3>
			<li><a href="#">干红葡萄酒</a></li>
			<li><a href="#">干白葡萄酒</a></li>
			<li><a href="#">气泡/香槟</a></li>
			<li><a href="#">冰酒</a></li>
			<li><a href="#">果酒</a></li>
			<li><a href="#">甜白</a></li>
		</ul>
		<ul>
			<h3>产地</h3>
			<li><a href="#">法国</a></li>
			<li><a href="#">西班牙</a></li>
			<li><a href="#">智利</a></li>
			<li><a href="#">阿根廷</a></li>
			<li><a href="#">澳大利也</a></li>
			<li><a href="#">中国</a></li>
			<li><a href="#">美国</a></li>
		</ul>
	</div>
	<div id="classifyright">
		<dl>
			<dt>推荐品牌</dt>
			<dd><a href="#"><img src="images/cd2.jpg"/></a></dd>
		</dl>
	</div>
		`)
})
$("#itemtwo").mouseleave(function(){
	$(this).css("background","#3d4851")
	$("#classify").hide();
})
//three
$("#itemthree").mouseenter(function(){
	$(this).css("background","#323b42")
	$("#classify").show();
	$("#classify").html(`
		<div id="classifyleft">
		<ul>
			<h3>品牌</h3>
			<li><a href="#">皇家贝斯</a></li>
			<li><a href="#">深蓝</a></li>
			<li><a href="#">百利甜</a></li>
			<li><a href="#">绝对伏特加</a></li>
			<li><a href="#">杰克丹尼</a></li>
			<li><a href="#">百龄坛</a></li>
			<li><a href="#">百加得</a></li>
			<li><a href="#">尊尼获加</a></li>
			<li><a href="#">轩尼诗</a></li>
			<li><a href="#">皇家礼炮</a></li>
			<li><a href="#">摩根船长</a></li>
			
		    </ul>
		<ul>
			<h3>适用</h3>
			<li><a href="#">聚会用酒</a></li>
			<li><a href="#">商务用酒</a></li>
		</ul>
		<ul>
			<h3>产地</h3>
			<li><a href="#">中国</a></li>
			<li><a href="#">英国</a></li>
			<li><a href="#">法国</a></li>
			<li><a href="#">美国</a></li>
		</ul>
	</div>
	<div id="classifyright">
		<dl>
			<dt>推荐品牌</dt>
			<dd><a href="#"><img src="images/cd3.jpg"/></a></dd>
		</dl>
	</div>
		`)
})
$("#itemthree").mouseleave(function(){
	$(this).css("background","#3d4851")
	$("#classify").hide();
})
//four
$("#itemfour").mouseenter(function(){
	$(this).css("background","#323b42")
	$("#classify").show();
	$("#classify").html(`
		<div id="classifyleft">
		<ul>
			<h3>适用</h3>
			<li><a href="#">女儿红</a></li>
			<li><a href="#">古越龙山</a></li>
			<li><a href="#">石库门</a></li>
			<li><a href="#">劲酒</a></li>
			<li><a href="#">会嵇山</a></li>
		</ul>
		<ul>
			<h3>适用</h3>
			<li><a href="#">聚会用酒</a></li>
			<li><a href="#">礼节用酒</a></li>
			<li><a href="#">婚庆用酒</a></li>
		</ul>
	</div>
	<div id="classifyright">
		<dl>
			<dt>推荐品牌</dt>
			<dd><a href="#"><img src="images/cd4.jpg"/></a></dd>
		</dl>
	</div>
		`)
})
$("#itemfour").mouseleave(function(){
	$(this).css("background","#3d4851")
	$("#classify").hide();
})

//five

$("#itemfive").mouseenter(function(){
	$(this).css("background","#323b42")
	$("#classify").show();
	$("#classify").html(`
		<div id="classifyleft">
		<ul>
			<h3>品牌</h3>
			<li><a href="#">礼盒</a></li>
			<li><a href="#">五粮液</a></li>
			<li><a href="#">汾酒</a></li>
			<li><a href="#">茅台</a></li>
			<li><a href="#">剑南春</a></li>
			<li><a href="#">张裕</a></li>
			<li><a href="#">拉菲</a></li>
			
		    </ul>
		<ul>
			<h3>适用</h3>
			<li><a href="#">酱香型</a></li>
			<li><a href="#">浓香型</a></li>
			<li><a href="#">干红葡萄酒</a></li>
			<li><a href="#">干白葡萄酒</a></li>
		</ul>
		
		<ul>
			<h3>产地</h3>
			<li><a href="#">四川</a></li>
			<li><a href="#">贵州</a></li>
			<li><a href="#">法国</a></li>
			<li><a href="#">美国</a></li>
		</ul>
	</div>
	<div id="classifyright">
		<dl>
			<dt>推荐品牌</dt>
			<dd><a href="#"><img src="images/cd5.jpg"/></a></dd>
		</dl>
	</div>
		`)
})
$("#itemfive").mouseleave(function(){
	$(this).css("background","#3d4851")
	$("#classify").hide();
})

//six

$("#itemsix").mouseenter(function(){
	$(this).css("background","#323b42")
	$("#classify").show();
	$("#classify").html(`
		<div id="classifyleft">
		<ul>
			<h3>品牌</h3>
			<li><a href="#">剑南春</a></li>
			<li><a href="#">泸州老窖</a></li>
			<li><a href="#">伊莎特</a></li>
			<li><a href="#">佩西</a></li>
			<li><a href="#">卡莎玛利亚</a></li>
			<li><a href="#">龙船康帝</a></li>
			<li><a href="#">郎酒</a></li>
			
		    </ul>
		<ul>
			<h3>适用</h3>
			<li><a href="#">白酒</a></li>
			<li><a href="#">红酒</a></li>
			<li><a href="#">洋酒</a></li>
			<li><a href="#">起泡酒</a></li>
			<li><a href="#">黄酒</a></li>
		</ul>
		
		<ul>
			<h3>产地</h3>
			<li><a href="#">贵州</a></li>
			<li><a href="#">四川</a></li>
			<li><a href="#">澳大利亚</a></li>
			<li><a href="#">法国</a></li>
			<li><a href="#">英国</a></li>
		</ul>
	</div>
	<div id="classifyright">
		<dl>
			<dt>推荐品牌</dt>
			<dd><a href="#"><img src="images/cd6.jpg"/></a></dd>
		</dl>
	</div>
		`)
})
$("#itemsix").mouseleave(function(){
	$(this).css("background","#3d4851")
	$("#classify").hide();
})



 /*1  点击楼层号    定位滚动条垂直方向滚走的距离  为  该楼层的top值  (根据楼层号的下标 找楼层)
	 2 点击top  回到顶部
	 3、 滚动条操作  控制楼层号的改变 (根据楼层的下标 找楼层号) 	
	 */
//楼层
$("#lc li").click(function(){
	$(this).find("span")
		   .show()
		   .end()
		   .siblings()
		   .find("span")
		   .hide()
	var _top = $(".floorbox").eq($(this).index() ).offset().top;
$("body ,html").animate({"scrollTop":_top},1000);
//2 点击top  回到顶部
$(".last li").click(function(){
	$("body,html").animate({"scrollTop":0},1000);
})
})
$(window).scroll(function(e){
//console.log($(".floorbox").offset().top)
	if($(this).scrollTop() > 1300 ){
		console.log(1)
	$("#lc").show();	
}
})
$(window).scroll(function(e){
//console.log($(".floorbox").offset().top)
	if($(this).scrollTop() > 3800){
	$("#lc").hide();	
}
})



//$("#lc li:not(.last)").click(function(){
//	$(this).addClass("active")
//		   .end()
//		   .siblings()
//		   .find("span")
//		   .removeClass("active")
//})
//获取某个楼层的top值    根据这个top值 确定滚动条的位置
//右侧栏
$(function(){
	$("#sideleftbox li").mouseenter(function(){
		$(this).addClass("activeLi")
		.find("i")
		.addClass("activeLi")
		$(this).find("span").css({"background":"#313131","display":"block"}).stop().animate({left:-75},1000);
	
	}).mouseleave(function(){
		$(this).removeClass("activeLi")
		
		.find("i")
		.removeClass("activeLi")
		$(this).find("span").css("background","#7a6e6e").stop().animate({left : 45},600);
	})
})


/*$(".footernav dd").mouseenter(function(){
	$(this).css("opacity","0.9")
})*/
}
	

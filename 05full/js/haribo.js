$(document).ready(function(){
			$("#fullpage").fullpage({
				anchors:["1st","2st","3st","4st"],
				menu:"#topMenu",
				navigation:true,
				slidesNavigation:true,
				navigationPosition:'right',
				navigationTooltips:["P<span>roducts</span>","H<span>istory</span>","O<span>ur Candy</span>","C<span>ontact</span>"],
				fitToSection:true,
				afterLoad:function(anchorslink,index){
					console.log("anchor:"+anchorslink+", index:"+index);
					if(index == 2){
						$("#onView").addClass("move");
					}else{
						$("#onView").removeClass("move");
					}if(index == 3){
						$(".onview").addClass("move");
						$(".onview1").addClass("move");
					}else{
						$(".onview").removeClass("move");
						$(".onview1").removeClass("move");
					}
				}
			});
			$(".toggleMenu").click(function(){
				var myClass = $(this).attr("class");
				console.log(myClass);
				if(myClass == "toggleMenu"){
					$(this).addClass("change");
					$("#main_menu").stop().animate({right:0},300);
				}else{
					$(this).removeClass("change");
					$("#main_menu").stop().animate({right:"-100%"},300)
				}
			});

			$("#main_menu>ul>li").hover(function(){
					$(this).find(".sub-m").stop().slideDown();
				}, function(){
					$(this).find(".sub-m").stop().slideUp();
				});
		});
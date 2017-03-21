$(function() {
	//banner轮播图
	var swiper = new Swiper('.swiper-container', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: true
	});

	//上下滚动
	function autoPlay() {
		var h1 = $(".myul").scrollTop();
		var h2 = $(".myul").height();
		if (h1 > h2) {
			$(".myul").scrollTop(0);
		} else {
			$(".myul").scrollTop(h1 + 1);
		}
	}
	setInterval(autoPlay, 100);
	//优选留学方案
	var flag = 1;
	$(".change").click(function() {
		if (flag == 1) {
			$(this).css("transform", "rotate(180deg)");
			$(".spread").slideDown();
			flag = 2;
		} else if (flag == 2) {
			$(this).css("transform", "rotate(0)");
			$(".spread").slideUp();
			flag = 1;
		}
	});

	//侧边栏
	$("#side_appear").click(function() {
		if (flag == 1) {
			$(this).attr("src", "images/ico_btn2.png");
			$("aside").css("right", "0");
			$("#main_page").css("transform", "translate(-2.54rem)");
			flag = 2;
		} else if (flag == 2) {
			$(this).attr("src", "images/ico_btn2_hov.png");
			$("aside").css("right", "-2.54rem");
			$("#main_page").css("transform", "translate(0)");
			flag = 1;
		}
	});

	//点击加载更多(收起更多)
	$(".more").click(function() {
		if (flag == 1) {
			$(".add").show();
			$(this).text("点击收起更多");
			flag = 2;
		} else if (flag == 2) {
			$(".add").hide();
			$(this).text("点击加载更多");
			flag = 1;
		}
	});

	//遍历选择地区
	$("#area_choose").find("li").each(function(index) {
		$(this).hover(function() {
			$(this).addClass("beijing").siblings().removeClass("beijing");
			$(".area_main").hide().eq(index).show();
		});
	});

	//动画按钮（左）
	$("#main_button").click(function() {
		if (flag == 1) {
			$(this).attr("src", "images/ico_btn23.png");
			$("#qq").animate({
				"left": "1.2rem"
			}, 500);
			$("#wecat").animate({
				"left": "2.1rem"
			}, 500);
			$("#message").animate({
				"left": "3rem"
			}, 500);
			$("#star").animate({
				"left": "3.94rem"
			}, 500);
			$("#goTop").animate({
				"left": "4.82rem"
			}, 500);
			flag = 2;
		} else if (flag == 2) {
			$(this).attr("src", "images/ico_btn22.png");
			$("#qq").animate({
				"left": "0.14rem"
			}, 500);
			$("#wecat").animate({
				"left": "0.14rem"
			}, 500);
			$("#message").animate({
				"left": "0.14rem"
			}, 500);
			$("#star").animate({
				"left": "0.14rem"
			}, 500);
			$("#goTop").animate({
				"left": "0.14rem"
			}, 500);
			flag = 1;
		}
	});
	//返回顶部
	$("#goTop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
	});

	//弹窗
	$(".right_button").click(function() {
		$(".alert").show();
		$(this).hide();
		$(".back").show();
	});
	//弹窗关闭
	$("#alert_close").click(function() {
		$(".alert").hide();
		$(".right_button").show();
		$(".back").hide();
	});

	//弹窗隔段时间出现
	function alertShow() {
		$(".alert").show();
		$(".back").show();
	}
	setInterval(alertShow, 5000);


	// 底部变化
	$("footer ul li:first-child").addClass('red');
	$("footer ul li").each(function(index) {
		$(this).click(function() {
			$(this).addClass('red').siblings().removeClass('red');
		});
	});
});
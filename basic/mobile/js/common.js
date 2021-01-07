$(function(){
	layerPop();
	layerClose();
	scrollLock();
})

function layerPop(){
	var _pop = $(".layer_pop_widget");
	$(".pop_on").click(function(){
		_pop.fadeIn(200);
	});

	var popInnerStart = setTimeout(function() {
		popupInnerScroll();
	}, 300);

	$(window).resize(function() {
		popupInnerScroll();
	});
	scrollLock();
}

function layerClose(){
	var _pop = $(".layer_pop_widget");
	var _popBg = $(".layer_pop_bg");
	$(".close_btn").click(function(){
		$(".layer_pop_widget").fadeOut(200);
	})

	_popBg.click(function(){
		_pop.fadeOut(200);
	})

	scrollLock();
}

//팝업창 스크롤 자동 적용
function popupInnerScroll() {
	var widgetEl = $('.pop_widget');
	var widgetHeight = widgetEl.prop("scrollHeight");
	var windowHeight = $(window).height();
	var scrollClass = 'pop_scroll';
	if(widgetHeight > windowHeight) {
		widgetEl.addClass(scrollClass);
	}else{
		widgetEl.removeClass(scrollClass);
	}
}

function scrollLock(close) {
	if(close === true) {
		$('body').addClass('default');
	}else if(close === false){
		$('body').removeClass('default');
	}
}

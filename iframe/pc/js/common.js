$(function(){
	layerPop();
	layerClose();
})

function layerPop(ev){
	$('.pop_on').on('click', function(ev){
		var _pop = $(".layer_pop_widget");
		var _popLeft = ($(window).width() - _pop.width()) / 2;
		var _popTop = (ev.clientY) - ( _pop.height() / 2 ) + 150;
		_pop.css({ "left": _popLeft, "top": _popTop});
		_pop.fadeIn(200);
	});

	var popInnerStart = setTimeout(function() {
		popupInnerScroll();
	},);

	$(window).resize(function() {
		popupInnerScroll();
	});
}

function layerClose(){
	$(".close_btn").click(function(ev){
		var _pop = $(".layer_pop_widget");
		var _popBg = $(".layer_pop_bg");
		_pop.fadeOut();
	});
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

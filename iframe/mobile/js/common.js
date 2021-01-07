$(function(){
	layerPop();
	layerClose();

})

function layerPop(){
	var _pop = $(".layer_pop_widget");
	$(".pop_on").click(function(){
		_pop.fadeIn(200);
	});
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
}

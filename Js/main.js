(function () {
	
	'use strict';

	var setTextAlignment = function(){
		$("input").click(function(){
			var property = $(this).val();
			$(".text-align").css("text-align", property);
		});
    };

$(function(){
		
		setTextAlignment();
	});
}());
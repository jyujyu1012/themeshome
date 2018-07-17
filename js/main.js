$(function(){	
	$('.page').find('.link-list').find('li:nth-child(1)').find('a').mouseenter(function() {
		$('.page').css({'background-image':'url("images/back01.jpg")'});
	}).mouseleave(function() {
		$('.page').css({'background-image':''});
	});
	$('.page').find('.link-list').find('li:nth-child(2)').find('a').mouseenter(function() {
		$('.page').css({'background-image':'url("images/back02.jpg")'});
	}).mouseleave(function() {
		$('.page').css({'background-image':''});
	});
	$('.page').find('.link-list').find('li:nth-child(3)').find('a').mouseenter(function() {
		$('.page').css({'background-image':'url("images/back03.jpg")'});
	}).mouseleave(function() {
		$('.page').css({'background-image':''});
	});
});
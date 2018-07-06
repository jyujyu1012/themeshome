$(function(){

	$('#t8ul').trunk8({
	  lines: 10
	});

	$('#t8ul').resizable({
	  resize: function (event, ui) {
	    /* trunk8 on resize. */
	    $('#t8ul').trunk8();
	  }
	}); // depends on jQuery.resizable
	/* handle browser resize too */
	$(window).resize(function (event) {
	  $('#t8ul').trunk8();
	});

	$('#t8ul').trunk8({
	    fill: '&hellip; <a id="read-more" href="#">もっと読む</a>'
	});
	$('#read-more').on('click', function (event) {
	    $(this).parent().trunk8('revert').append(' <a id="read-less" href="#">やっぱり隠す</a>');
	    return false;
	});
	$('#read-less').on('click', function (event) {
	    $(this).parent().trunk8();
	    return false;
	});
});
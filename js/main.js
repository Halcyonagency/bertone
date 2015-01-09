$(document).ready(function(){


	$('.box').mouseover(function() {
    	$(this).find('.box-text').css("height", "120px");
    	$(this).find('.box-text').find('h3').css("opacity", "1");
  })
  .mouseout(function() {
    $(this).find('.box-text').css("height", "0px");
    $(this).find('.box-text').find('h3').css("opacity", "0");
  });


});
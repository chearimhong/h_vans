// vans_newsbox_slide.js
(function($){
var news01 = $('.news_01');
var news02 = $('.news_02');
var news03 = $('.news_03');
var news04 = $('.news_04');


var screenH = $(window).outerHeight();

var top_01 = news01.offset().top;
var top_02 = news02.offset().top;
var top_03 = news03.offset().top;
var top_04 = news04.offset().top;

$(window).on('scroll',function(){
  var nowScroll =$(this).scrollTop();
if(nowScroll > top_01-(screenH)){ news01.addClass('active');}
if(nowScroll > top_02-(screenH)){ news02.addClass('active');}
if(nowScroll > top_03-(screenH)){ news03.addClass('active');}
if(nowScroll > top_04-(screenH)){ news04.addClass('active');}

});



})(jQuery);
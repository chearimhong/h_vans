// vans_adbox_slide.js
(function($){
var slipon = $('.slip_on');
var banner_03 = $('.bannerbox_03');


var screenH = $(window).outerHeight();

var slipon_top = slipon.offset().top;
var bn03_top = banner_03.offset().top;

$(window).on('scroll',function(){
  var nowScroll = $(this).scrollTop();
if(nowScroll > slipon_top-(screenH/3*2)){ slipon.addClass('active'); }
if(nowScroll > bn03_top-(screenH)){ banner_03.addClass('active'); }

});


})(jQuery);
// vans_mob_effect.js
(function($){
var pd_01 = $('.pro_01');
var pd_02 = $('.pro_02');
var pd_03 = $('.pro_03');
var pd_04 = $('.pro_04');

var mob_ba_01 = $('.mob_bn');
var mob_ba_02 = $('.mob_bn_01');


var screenH = $(window).outerHeight();

var pd_top_01 = pd_01.offset().top;
var pd_top_02 = pd_02.offset().top;
var pd_top_03 = pd_03.offset().top;
var pd_top_04 = pd_04.offset().top;
var mob_top_01 = mob_ba_01.offset().top;
var mob_top_02 = mob_ba_02.offset().top;

$(window).on('scroll',function(){
  var nowScroll = $(this).scrollTop();
if(nowScroll > pd_top_01-(screenH)){ pd_01.addClass('active');}
if(nowScroll > pd_top_02-(screenH)){ pd_02.addClass('active');}
if(nowScroll > pd_top_03-(screenH)){ pd_03.addClass('active');}
if(nowScroll > pd_top_04-(screenH)){ pd_04.addClass('active');}
if(nowScroll > mob_top_01-(screenH)){ mob_ba_01.addClass('active'); }
if(nowScroll > mob_top_02-(screenH)){ mob_ba_02.addClass('active'); }
});


})(jQuery);
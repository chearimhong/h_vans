// vans_mob_slide.js

(function($){

var indi = $('.indicater');
var indiLi = indi.find('li');
var winW = $(window).outerWidth();

var banner =$('.adbox_wrap');
var j = 0;

if (winW <= 480){


indiLi.on('click', function(e){
  e.preventDefault();

  $(this).addClass('active');
  $(this).siblings('li').removeClass('active'); //클릭한 것만 색나오게함

     j = $(this).index(); //클릭한 것의 순서값파악 
  banner.stop().animate({marginLeft:j * -100 +'%'});

});


setInterval(function(){ //몇초마다 수행해라
  if(j >= 2){j=0} else {j += 1}
  banner.stop().animate({marginLeft:j * -100 +'%'});
  indiLi.eq(j).addClass('active');
  indiLi.eq(j).siblings('li').removeClass('active');
},3000);

}

$(window).on('resize',function(){
var nowW = $(window).outerWidth();
if(winW !== nowW){
  location.reload();
}
});


})(jQuery);
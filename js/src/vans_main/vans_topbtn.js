// vans_topbtn.js
(function($){
var adbox = $('#adbox').outerHeight();
console.log(adbox);
var topbtn = $('.top_btn');
var winW =$(window).outerWidth();

var borwser = function(){
 
    var scroll = $(window).scrollTop();
    if(scroll <= adbox){
    topbtn.hide();
    }else {
    topbtn.show();
    }

    $(window).on('scroll', function(){
    var btn = $(window).scrollTop();
    if(btn <= adbox){
    topbtn.hide();
    }else {
    topbtn.show();
    }

    })

  
}

borwser();

$(window).on('resize',function(){
  var nowW = $(window).outerWidth();
  if(winW !== nowW){
  location.reload();
  }
});



})(jQuery);

// vans_mob_gnb.js
(function($){
var winW = $(window).outerWidth();
var naviBtn = $('.btn');
var naviBox = $('.mob_navi_onbox');
var navili = naviBox.children('li');
var sidebox = navili.children('a');




  naviBtn.on('click',function(e){
  naviBox.stop().toggle(500);
  $(this).children('button').toggleClass('active');

});


sidebox.on('click focus',function(){
  sidebox.next('ol').hide();
  $(this).next('ol').show();
});

// navili.on('mouseleave', function(){
//   sidebox.next('ol').hide();
// });


})(jQuery);
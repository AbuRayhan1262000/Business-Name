$(function(){
    $('.banner-slider').slick({
        prevArrow:'<i class="fas fa-chevron-left previous-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-right next-arrow"></i>',
        autoplay:false,
        dots:true,
    });
    //gallery filter
    var mixer =mixitup('.gallery-content');
    // gallery light box
    $('.venobox').venobox();
       //wow js for animate css
   new WOW().init();  
    
   });
  

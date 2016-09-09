$(document).ready(function(){

  $(".fullSize").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $(".fullSize").css({height:$(window).innerHeight()})
  });

  (function() {
      var bLazy = new Blazy();
  })();

  var loading = new TimelineMax();

  var exit = $('.exit'),
      paletteButton = $(".paletteButton"),
      hex = $('.hex'),
      menu = $('.menu'),
      menuContent = $('.menuContent'),
      contactLink = $('.contact'),
      moon = $('.moonHold'),
      colors = $('.colors'),

      planetItem = $('.planetItem'),
      stars = $('.stars'),

      name = $("#name"),
      email = $("#email"),
      message = $("#message");



  TweenMax.set(planetItem, {scale:0, autoAlpha:0});
  TweenMax.set(moon, {opacity:0});

  TweenMax.set(hex, {autoAlpha:0});
  TweenMax.set(exit, {autoAlpha:0});
  TweenMax.set(contactLink, {autoAlpha:0});
  TweenMax.set(menuContent, {autoAlpha:0, xPercent:100, yPercent:100});



  //banner animation START
    loading
      .staggerTo(planetItem, 2, {scale:1, autoAlpha:1, ease:Elastic.easeOut.config(1, 0.8)}, 0.2)
      .to(moon, 1, {opacity:1, ease:Power3.easeIn}, 3);

    TweenMax.to(moon, 19, {rotation:360, transformOrigin:"center right", ease:Linear.easeNone, repeat:-1})

    TweenMax.set(stars, {scale:0})
    TweenMax.to(stars, 2, {scale:1, delay:2})

  //banner animation END












  //menu START
    var menuCounter = 1;
    $('.menu').on("click", function(){
      menuCounter++;
        if(menuCounter%2=== 0){
          menuOpen();
         }else if(menuCounter%2===1){
          menuClose();
        }
    })

    function menuOpen(){
      TweenMax.to(menuContent, 0.1, { autoAlpha:1})
      TweenMax.to(menuContent, 0.6, {xPercent:0, yPercent:0})
      TweenMax.to(contactLink, 0.5, {autoAlpha:1, delay:0.0})
    }

    function menuClose(){
      TweenMax.to(menuContent, 0.6, {xPercent:100, yPercent:100})
      TweenMax.to(menuContent, 0.1, {autoAlpha:0, delay:1})
      TweenMax.to(contactLink, 0.6, {autoAlpha:0, y:30})
    }




    $(".paletteButton").on('click', function(){
      TweenMax.to($(this).parent('.tint'), 1, {backgroundColor:"rgba(0,0,0,1.0)"})
      TweenMax.to($(this), 0.8, {autoAlpha:0})
      TweenMax.to($(this).siblings('.exit'),  0.8, {autoAlpha:1})
      TweenMax.to($(this).siblings('.palette').find('.hex'), 1 ,{autoAlpha:0.8, delay:0.5})
    })

    $('.exit').on('click', function(){
      TweenMax.to($(this).parent('.tint'), 1, {backgroundColor:"rgba(0,0,0,0.0)"})
      TweenMax.to($(this).siblings('.paletteButton'),  0.8, {autoAlpha:1})
      TweenMax.to($(this), 0.8, {autoAlpha:0})
      TweenMax.to($(this).siblings('.palette').find('.hex'), 0.4, {autoAlpha:0})
    })
  //menu END












  //contact form animation START
    $('#name').on('focus', function(){
      TweenMax.to(name, 0.5, {backgroundColor:'#4A7184'})
    })
    $('#email').on('focus', function(){
      TweenMax.to(email, 0.5, {backgroundColor:'#4A7184'})
    })
    $('#message').on('focus', function(){
      TweenMax.to(message, 0.5, {backgroundColor:'#4A7184'})
    })

    $('#name').on('focusout', function(){
      if($("#name").val().length >= 1){
        return ;
      }
      if($("#name").val().length == 0){
        TweenMax.to(name, 0.5, {backgroundColor:'transparent'})
      }
    })
    $(' #email').on('focusout', function(){
      if($("#email").val().length >= 1){
        return ;

      }
      if($("#email").val().length == 0){
        TweenMax.to(email, 0.5, {backgroundColor:'transparent'})
      }
    })
    $('#message').on('focusout', function(){
      if($("#message").val().length >= 1){
        return ;
      }
      if($("#message").val().length == 0){
        TweenMax.to(message, 0.5, {backgroundColor:'transparent'})
      }
    })
  //contact form animation END

})//end main.js

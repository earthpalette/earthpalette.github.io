$(document).ready(function(){
  $(".fullSize").css({height:$(window).innerHeight()})
  $(window).resize(function(){
    $(".fullSize").css({height:$(window).innerHeight()})
  });
  (function() {
      // Initialize
      var bLazy = new Blazy();
  })();

  var exit = $('.exit'),
      paletteButton = $(".paletteButton"),
      hex = $('.hex'),
      menu = $('.menu'),
      menuContent = $('.menuContent'),
      moon = $('.moon'),
      colors = $('.colors');

  var mercury = $(".mercury"),
      venus = $(".venus"),
      earth = $(".earth"),
      mars = $(".mars"),
      jupiter = $(".jupiter"),
      saturn = $(".saturn"),
      uranus = $(".uranus"),
      neptune = $(".neptune");


  $('.test').on('click', function(){
    TweenMax.to($('.four .palette'), 0.7, {width:380})
  })
  $('.test2').on('click', function(){
    TweenMax.staggerTo(colors, 2, {autoAlpha:1, y:0, ease:Elastic.easeOut.config(1, 0.3)}, 0.05)
  })



  //TweenMax.set(colors, {autoAlpha:0, y:30})




  TweenMax.to(moon, 19, {rotation:360, transformOrigin:"300% 300%", ease:Linear.easeNone, repeat:-1})


  TweenMax.to(mercury, 2, {rotation:360, transformOrigin:"0% -1200%", ease:Linear.easeNone, repeat:-1})
  TweenMax.to(venus, 4, {rotation:360, transformOrigin:"0% -850%", ease:Linear.easeNone, repeat:-1})
  TweenMax.to(earth, 8, {rotation:360, transformOrigin:"0% -875%", ease:Linear.easeNone, repeat:-1})
  TweenMax.to(mars, 15, {rotation:360, transformOrigin:"0% -1350%", ease:Linear.easeNone, repeat:-1})
  TweenMax.to(jupiter, 35, {rotation:360, transformOrigin:"0% -610%", ease:Linear.easeNone, repeat:-1})
  TweenMax.to(saturn, 40, {rotation:360, transformOrigin:"0% -890%", ease:Linear.easeNone, repeat:-1})
  TweenMax.to(uranus, 60, {rotation:360, transformOrigin:"0% -1350%", ease:Linear.easeNone, repeat:-1})
  TweenMax.to(neptune, 80, {rotation:360, transformOrigin:"0% -1300%", ease:Linear.easeNone, repeat:-1})

  TweenMax.set(hex, {autoAlpha:0})
  TweenMax.set(exit, {autoAlpha:0})
  TweenMax.set(menuContent, {autoAlpha:0, xPercent:100, yPercent:100})

  function menuOpen(){
    TweenMax.to(menuContent, 0.1, { autoAlpha:1})
    TweenMax.to(menuContent, 0.6, {xPercent:0, yPercent:0})
  }

  function menuClose(){
    TweenMax.to(menuContent, 0.6, {xPercent:100, yPercent:100})
    TweenMax.to(menuContent, 0.1, {autoAlpha:0, delay:1})
  }

  var menuCounter = 1;
  $('.menu').on("click", function(){
    menuCounter++;
      if(menuCounter%2=== 0){
        menuOpen();
       }else if(menuCounter%2===1){
        menuClose();
      }
  })


  $(".paletteButton").on('click', function(){
    TweenMax.to($(this).parent('.tint'), 1, {backgroundColor:"rgba(0,0,0,1.0)"})
/*
    TweenMax.to(paletteButton, 0.8, {autoAlpha:0})
    TweenMax.to(exit, 0.8, {autoAlpha:1})
    TweenMax.fromTo(hex,0.2 ,{scale:0}, {scale:1,autoAlpha:1, delay:0.6})

    */
    TweenMax.to($(this), 0.8, {autoAlpha:0})
    TweenMax.to($(this).siblings('.exit'),  0.8, {autoAlpha:1})
    //TweenMax.fromTo($(this).siblings('.palette').find('.hex'), 0.2 ,{scale:0}, {scale:1,autoAlpha:1, delay:0.6})
    TweenMax.to($(this).siblings('.palette').find('.hex'), 1 ,{autoAlpha:0.8, delay:0.5})
  })

  $('.exit').on('click', function(){
    TweenMax.to($(this).parent('.tint'), 1, {backgroundColor:"rgba(0,0,0,0.0)"})
/*
    TweenMax.to(paletteButton, 0.8, {autoAlpha:1})
    TweenMax.to(exit, 0.8, {autoAlpha:0})
    TweenMax.to(hex, 0.4, {autoAlpha:0})
*/
    TweenMax.to($(this).siblings('.paletteButton'),  0.8, {autoAlpha:1})
    TweenMax.to($(this), 0.8, {autoAlpha:0})
    //TweenMax.to($(this).siblings('.palette').find('.hex'), 0.4, {autoAlpha:0})
    TweenMax.to($(this).siblings('.palette').find('.hex'), 0.4, {autoAlpha:0})

  })

})

var scrollNext = function(e, n) {
  if (!(e.target instanceof HTMLAnchorElement)) {
    $('html, body').animate({ scrollLeft: $(n).offset().left-16 }, 1000);
  }
};

$(function(){

/*
  $('html, body').mousewheel(function(event, delta, deltaX, deltaY) {
    this.scrollLeft -= deltaY * 40;
    event.preventDefault();
  });
*/

  $('#box1').click(function(e){ scrollNext(e, "#box2"); });
  $('#box2').click(function(e){ scrollNext(e, "#box3"); });
  $('#box3').click(function(e){ scrollNext(e, "#box4"); });
  $('#box4').click(function(e){ scrollNext(e, "#box5"); });
  $('#box5').click(function(e){ scrollNext(e, "#box1"); });

});

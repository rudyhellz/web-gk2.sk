$(function(){
  $('html, body').mousewheel(function(event, delta, deltaX, deltaY) {
    this.scrollLeft -= deltaY * 40;
    event.preventDefault();
  });
});

$(function(){
  $('body').mousewheel(function(event, delta, deltaX, deltaY) {
    this.scrollLeft -= deltaY * 60;
    event.preventDefault();
  });
});

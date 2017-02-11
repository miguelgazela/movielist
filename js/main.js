$(document).ready(function() {

  $('.movielist').masonry({
    // options
    itemSelector: '.movieitem',
    columnWidth: 260
  });

  $('.pagetitle').each(function(index, element){

    var counter = $(this).next().children().length;

    var $counter = $($(this).children('.movie-counter')[0]);
    $counter.html(counter);
  });

});

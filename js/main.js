$(document).ready(function() {

  // $('.pagetitle').each(function(index, element){
  //
  //   var counter = $(this).next().children().length;
  //
  //   var $counter = $($(this).children('.movie-counter')[0]);
  //   $counter.html(counter);
  // });

  $.getJSON("movies.json", function(json) {

    var yearListTmpl = $.templates("#yearListTemplate");
    var $yearsList = $('#years');

    var queue = json.queue;

    var queueInfo = {year: "queue", movies: queue, numMovies: queue.length};
    $yearsList.append(yearListTmpl.render(queueInfo));

    $.each(json.years, function(index, yearObj) {

      var yearInfo = {year: yearObj.year, movies: yearObj.movies, numMovies: yearObj.movies.length};

      $yearsList.append(yearListTmpl.render(yearInfo));
    });

    $('.movielist').masonry({
      // options
      itemSelector: '.movieitem',
      columnWidth: 260
    });

  });
});

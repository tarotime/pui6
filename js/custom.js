// $("button").click(function(e) {
//       e.preventDefault();
//       $('#details div').fadeOut('slow');
//       $('#' + $(this).data('rel')).fadeIn('slow');
// });

// Show tip details

$( ".tip" ).not(".produce").hide();

$("button").click(function(e) {
      // e.preventDefault();
      $('.tip').not(('.' + $(this).data('rel'))).hide();
      $('.' + $(this).data('rel')).fadeIn('slow');
      $('.' + $(this).data('rel')).children().fadeIn('slow');

});

var multiple = new Multiple({
  selector: 'button',
  background: 'linear-gradient(#273463, #8B4256)'
});

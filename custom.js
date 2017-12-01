//Animate on Scroll
AOS.init();

// Show tip details (right side)

$( ".tip" ).not(".produce").hide();

$("button").click(function(e) {
      // e.preventDefault();
      $('.tip').not(('.' + $(this).data('rel'))).hide();
      $('.' + $(this).data('rel')).show();
      $('.' + $(this).data('rel')).children().show();
});



function onDocumentReady() {
  console.log('document ready');
  $('#fade-toggle').on('click', fadePanel);
  $('#slide-toggle').on('click', slidePanel);
  $('#play-animation').on('click', customAnimation);
}

function fadePanel(event) {
  console.log('event', event);

  var displayProperty = $('#panel').css('display');
  console.log('displayProperty', displayProperty);
  
  if (displayProperty !== 'block') {
    $('#panel').fadeIn();
  } else {
    $('#panel').fadeOut();
  }
}

function slidePanel() {
  var hasAnimated = $('#panel').hasClass('animated');

  if (hasAnimated) {
    $("#panel").slideUp("fast").removeClass('animated');
  } else {
    $("#panel").slideDown("slow").addClass('animated');
  }
}

function customAnimation() {
  // $( "#panel" ).animate({
    // CSS Properties and values
  // }, 5000, "linear", function() {
    // Completion Handler
  // });

  var left = 0;
  $(".img-item").each(function(i,val) {
    $(this).animate({
      left: left,
      opacity: 1
    }, 1500 );

    left += 360;
  });

  left = 0;
  $(".img-item2").each(function(i,val) {
    $(this).animate({
      left: left,
      opacity: 1
    }, 2500 );

    left += 360;
  });
}

$(document).ready(onDocumentReady);
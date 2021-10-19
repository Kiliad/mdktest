	$('#menu-toggle').change(function() {
  if ($('#menu-toggle').is(":checked")) {
    $('body').css('overflow','hidden');
  } else {
    $('body').css('overflow','auto');
  }
});
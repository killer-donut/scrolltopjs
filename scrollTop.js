<script type="text/javascript">
	1
	(function($) {
		2
$(document).ready(function(){
		3
  // Add smooth scrolling to all links
4
	$(".smoothscroll a").on('click', function(event) {
		5
      var mastheadHeight = $('div.masthead').height();
	6
	console.log ("mastheadHeight = " + mastheadHeight);
	7

	8

	9
	// Make sure this.hash has a value before overriding default behavior
	10
	if (this.hash !== "") {
		11
      // Prevent default anchor click behavior
12
	event.preventDefault();
	13

	14
	// Store hash
	15
	var hash = this.hash;
	16

	17

	18
	$('html, body').animate({
		19
    //    scrollTop: $(hash).offset().top + (-242)
20
	scrollTop: $(hash).offset().top + (-mastheadHeight)
	21
      }, 800, function(){
		22
​
23
	// Add hash (#) to URL when done scrolling (default click behavior)
	24
	//window.location.hash = hash;
	25
	history.pushState('', '', hash);
	26
      });
	27
    } // End if
	28
  });
	29
});
	30
    })(jQuery);
	31

</script>
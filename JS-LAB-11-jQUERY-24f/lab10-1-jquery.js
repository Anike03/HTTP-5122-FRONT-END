//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way
$(document).ready(function () {
	

	//Inside of here is your jQuery/JavaScript
	// Initially hide all paragraphs
	$(".contentBox").hide();

	
	//ADD CLICK EVENT TO <h2>
	$("h2").on("click", function () {
		// Close all other open tabs
		$(".contentBox").not($(this).next(".contentBox")).slideUp(3000);
	
		// Slide toggle the current paragraph
		$(this).next(".contentBox").slideToggle(3000);
	  });
	
	//CHANGE <p> BACKGROUND ON HOVER
	$(".contentBox").hover(
	  function () {
		$(this).addClass("textHovered");
	  },
	  function () {
		$(this).removeClass("textHovered");
	  }
	);
  });
  

	


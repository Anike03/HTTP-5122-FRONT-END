//LAB 10 - 2 INVENTORY PAGE

jQuery(window).on("load", function () {
		
	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>

	//Hide descriptions initially
	$("td.desc").hide();

	// ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>
	$("#tblInventory tbody tr").on("mouseover", function () {

	// When mouse enters, add 'hover' class to change background color and text color
	$(this).addClass("hover");
		  }).on("mouseout", function () {

	// When mouse leaves, remove 'hover' class to reset the row styles
	$(this).removeClass("hover");
		  });


	//ADD CLICK EVENT TO <tr>
	$("#tblInventory tbody tr").on("click", function () {
		
	  // Hide all descriptions first
	  $("td.desc").hide();
  
	  // Show the description for the clicked row only
	  $(this).find(".desc").show();
	});
  });


	
	
	
// CHECK/UNCHECK items
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// DELETE an item
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// ADD new item
$("input[type='text']").keypress(function(event){
	// listen to ENTER key
	if(event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		//clear input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

// toggle the todo input
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
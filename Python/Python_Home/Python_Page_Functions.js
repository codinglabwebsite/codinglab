//Open Instructions
$(document).ready(function () 
{
	$("#preview-toggle").click(function () 
	{
		$("#preview").removeClass("hidden");
		$(".toggle").addClass("open");
	});
	
	$("#preview-close").click(function () 
	{
		$("#preview").addClass("hidden");
		$(".toggle").removeClass("open");
	});
});

//Searchbar Hightlight Text
$('#searchBar').keyup(function() 
{
  var search_term = $('#searchBar').val();
  $('.search-elements').removeHighlight().highlight(search_term);
});

$('#searchBar').on('input', function (_e)
{
	$('.search-elements').removeHighlight();
});

/*Reload Page*/
window.history.back = function()
{
	location.reload();
}

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

//Open Instructions2
$(document).ready(function () 
{
	$("#preview-toggle-2").click(function () 
	{
		$("#preview-2").removeClass("hidden-2");
		$(".toggle-2").addClass("open-2");
	});
	
	$("#preview-close-2").click(function () 
	{
		$("#preview-2").addClass("hidden-2");
		$(".toggle-2").removeClass("open-2");
	});
});

//Open Instructions3
$(document).ready(function () 
{
	$("#preview-toggle-3").click(function () 
	{
		$("#preview-3").removeClass("hidden-3");
		$(".toggle-3").addClass("open-3");
	});
	
	$("#preview-close-3").click(function () 
	{
		$("#preview-3").addClass("hidden-3");
		$(".toggle-3").removeClass("open-3");
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

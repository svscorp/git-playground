$(document).ready(function() {
   // place your javascripts 

   $("a.btn").click(function(){
	    var block = $( "#block" );

	    block.html('Hello!');
	    block.animate({
		    width: "70%",
		    opacity: 0.4,
		    marginLeft: "0.6in",
		    fontSize: "3em",
		    borderWidth: "10px"
		}, 1500 );
	});
});
$(document).ready(function(){
		$(".b").each(function(){
		var scroller = this;
		$(window).scroll(function(){
			var scrolled = $(window).scrollTop();
			var ypos = -(0.1 * $(scroller).data("speed") * scrolled) + "px";
			$(scroller).css("top", ypos);
		});
	});
});

var open = false;

$(document).ready(function() {

	$( "#nav-clicky" ).click(function() {
		if (open == false){
			animateIn();
			open = true;
		} else {
			animateOut();
			open = false;
		}
	});
});

function animateIn(){
	$("#mobile-menu").animate({'right':'80vw'}, 250, 'swing', function(){
	});
};

function animateOut(){
	$("#mobile-menu").animate({'right':'0'}, 250, 'swing', function(){
	});
};

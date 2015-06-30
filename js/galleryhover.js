var cover = function() {
	$('.item').hover(function() {
		$('.cover', this).animate({top: '-100px'}, 25);
		$('.view', this).animate({bottom: '32px'}, 250);
	}, function() {
		$('.cover', this).animate({top: '0px'}, 300);
		$('.view', this).animate({bottom: '-50px'}, 200);
	}

	);

};

$(document).ready(cover);
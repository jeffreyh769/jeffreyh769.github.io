$(document).ready(function(){

	workLoad();

	logoAnimate();

	$('.menu-button').on({
		click: function(){
			openDropdown();
		}
	})

	$('.closedropdown').on({
		click: function(){
			closeDropdown();
		}
	})

	$('.dropdown').on({
		click: function(event){
			if (event.target == this){
				closeDropdown();
			}
		}
	})

	$('.background').parallax({
	  relativeInput: true,
	  scalarX: 15,
	  scalarY: 30,
	})

	$('.post-title').fitText(0.8);

	$('.grid-item', this).on({
		click: function(){
			workShow();
		}
	})

	$('.project-close').on({
		click: function(){
			var $projectElement = $('.project-element, .caption, .description');
			$projectElement.removeClass('project-loaded');
			workHide();
		}
	})

	gridHover();


});

$(window).load(function() {
  $("body").addClass("loaded");
  $('.title-transition').delay(800).addClass('title-transition-loaded');
});

function projectFade(){
	$('.project-element, .caption, .description').addClass('project-loaded');
}

function openDropdown(){
	$('html').addClass('opendropdown');
}

function closeDropdown(){
	$('html').removeClass('opendropdown');
}

function workShow(){
	$('html').addClass('project-overlay-show');
	$('body').css('overflow', 'hidden');
}

function workHide(){
	$('html').removeClass('project-overlay-show');
	$('body').css('overflow', 'auto');
}

function  workLoad() {
  $.ajaxSetup({ cache: true });
  
  $('.grid-item').click(function() {
    var $this = $(this),
        newFolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'projects/'+ newFolder +'.html';

    $('.project-load').html(spinner).load(newHTML);
    setTimeout(projectFade, 900);
  });
}

function logoAnimate() {
	 $('.logo-static').on({
    mouseover: function() {
      $(this).css('visibility', 'hidden');
      $('.logo-out').css('visibility','hidden');
      $('.logo-in').css('visibility','visible');
    },
    mouseout: function() {
	  $('.logo-in').css('visibility', 'hidden')
	  $('.logo-out').css('visibility', 'visible')
	    }
	});
}

function gridHover() {
	$('.grid-item').hover(function(){
		$('.grid-item-overlay', this).toggleClass('overlay-on');
		$('.grid-item-inside', this).toggleClass('grid-text-on');
		$(this).toggleClass('grid-item-hover');
	});
}



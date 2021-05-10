// JavaScript Document
var SiteMain = (function() {

	function init(){
		playVideo();
		$('ul.sf-menu').superfish();
	}

	function playVideo() {
		var myPlayer = videojs('video-news');
		if(myPlayer) {
			$('.play-video').click(function(){
				if (myPlayer.paused()) {
			    $(this).find('.fa').removeClass('fa-play').addClass('fa-pause')
					myPlayer.play();
					if($(window).width() > 922) {
						$('.video-custom-controls').hide();
					}
			  }
			  else {
			    $(this).find('.fa').removeClass('fa-pause').addClass('fa-play')
					myPlayer.pause();
					$('.video-custom-controls').show();
			  }
			})
		}

	}

	function openGridMenu(idMenu) {
		$(idMenu).toggleClass('opened');
	}

	function openPopup(idDiv){

	}
	function closePopup(idDiv){

	}

	function expandCategory(idCategory) {
		$(idCategory).toggleClass('expanded')
		//scrollToDiv(idCategory)
	}

	return {
		init:init,
		openPopup:openPopup,
		closePopup:closePopup,
		playVideo:playVideo,
		openGridMenu:openGridMenu	
	}

})();

$(document).ready( function() {
	SiteMain.init();
});

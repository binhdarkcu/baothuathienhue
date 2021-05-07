// JavaScript Document
var SiteMain = (function() {

	function init(){
		
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
	}

})();

$(document).ready( function() {
	SiteMain.init();
});

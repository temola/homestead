//
//	Equal height - by Lewi Hussey
//

var matchHeight = function () {

	function init() {
		eventListeners();
		matchHeight();
	}

	function eventListeners(){
		$(window).on('resize', function() {
			matchHeight();
		});
	}

	function matchHeight(){
		var groupName = $('[data-match-height]');
		var groupHeights = [];

		groupName.css('min-height', 'auto');

		groupName.each(function() {
			groupHeights.push($(this).outerHeight());
		});

		var maxHeight = Math.max.apply(null, groupHeights);
		groupName.css('min-height', maxHeight);
	};

	return {
		init: init
	};

} ();

function matchHeigh2t(){
	var group2 = $('[data-match-height]');
	var group2Heights = [];

	group2.css('min-height', 'auto');

	group2.each(function() {
		group2Heights.push($(this).outerHeight());
	});

	var maxHeight = Math.max.apply(null, group2Heights);
	group2.css('min-height', maxHeight);
};

return {
	init: init
};

} ();

$(document).ready(function() {
	matchHeight.init();
});

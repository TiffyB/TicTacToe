$(document).ready(function() {
    console.log( "ready!" );
    var numTurns = 0;
    var markers = ["X", "O"];
    var tracker;
    $('div button').on('click', function() {
    	console.log('clicked')
    	var marker;
    	if (numTurns % 2 === 0) {
    		marker = markers[0];
    	} else {
    		marker = markers[1];
    	}
    	$(this).text(marker)
    	var classnames = 
    	numTurns++
    })

    $('.x_0').on('click', function() {
    	console.log('clicked 0, 1')
    	var valAbove = $('.y_0 .x_0').text()
    	var valBelow = $('.y_2 .x_0').text()
    	var val = $('.y_1 .x_0').text();
    	if (val === valBelow && valBelow === valAbove) {
    		console.log(val, " wins");
    		var winningStr = val + " wins";
    		$('body').append(winningStr)
    	}
    })

    $('.x_2').on('click', function() {
    	console.log('clicked 0, 1')
    	var valAbove = $('.y_0 .x_2').text()
    	var valBelow = $('.y_2 .x_2').text()
    	var val = $('.y_1 .x_2').text();
    	if (val === valBelow && valBelow === valAbove) {
    		console.log(val, " wins");
    		var winningStr = val + " wins";
    		$('body').append(winningStr)
    	}
    })

    $('.y_2').on('click', function() {
    	var middle = $('.y_2 .x_1').text();
    	var left = $('.y_2 .x_0').text();
    	var right = $('.y_2 .x_2').text();
    	if (middle === left && left === right) {
    		var winningStr = val + " wins";
    		$('body').append(winningStr)
    	}
    })
    $('.y_0').on('click', function() {
    	var middle = $('.y_0 .x_1').text();
    	var left = $('.y_0 .x_0').text();
    	var right = $('.y_0 .x_2').text();
    	if (middle === left && left === right) {
    		console.log(middle, "wins");
    		var winningStr = val + " wins";
    		$('body').append(winningStr)
    	}
    })

    $('.y_0 .x_0').on('click', function() {
    	var leftCorner = $('.y_0 .x_0').text();
    	var middle = $('.y_1 .x_1').text();
    	var rightCorner = $('.y_2 .x_2').text();
    	if (leftCorner === middle && middle === rightCorner) {
    		console.log(middle, "wins");
    		var winningStr = val + " wins";
    		$('body').append(winningStr)
    	}
    })

    $('.y_2 .x_2').on('click', function() {
    	var leftCorner = $('.y_0 .x_0').text();
    	var middle = $('.y_1 .x_1').text();
    	var rightCorner = $('.y_2 .x_2').text();
    	if (leftCorner === middle && middle === rightCorner) {
    		console.log(middle, "wins");
    		var winningStr = val + " wins";
    		$('body').append(winningStr)
    	}
    })

    $('.y_0 .x_2').on('click', function() {
    	var leftCorner = $('.y_0 .x_2').text();
    	var middle = $('.y_1 .x_1').text();
    	var rightCorner = $('.y_2 .x_0').text();
    	if (leftCorner === middle && middle === rightCorner) {
    		console.log(middle, "wins");
    		var winningStr = val + " wins";
    		$('body').append(winningStr)
    	}
    })

    $('.y_2 .x_0').on('click', function() {
    	var leftCorner = $('.y_2 .x_0').text();
    	var middle = $('.y_1 .x_1').text();
    	var rightCorner = $('.y_0 .x_2').text();
    	if (leftCorner === middle && middle === rightCorner) {
    		console.log(middle, "wins");
    		var winningStr = val + " wins";
    		$('body').append(winningStr)
    	}
    })
});





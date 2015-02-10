var data_one = [
	['Apples',   45.0],
	['Oranges',       26.8],
	['Pears',    8.5],
	['Grapes',     6.2],
	['Bananas',   0.7]
];

var data_two = [
	['Apples',   4.2],
	['Oranges',       56],
	['Pears',   12.8],
	['Grapes',    9.4],
	['Bananas',   34]
];

function winOpen(e){
	$.pie_one.loadChart('Pie One', data_one);
	$.pie_two.loadChart('Pie Two', data_two);
}

$.index.open();

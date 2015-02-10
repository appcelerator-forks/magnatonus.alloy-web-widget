function loadChart(title,data){
	$.chartWebView.url=WPATH('/html/pie.html');
	$.chartWebView.addEventListener('load', function() {
		Ti.API.info('chartWebView ready');
		$.chartWebView.evalJS('plotChart('+JSON.stringify(title)+','+JSON.stringify(data)+')');	 
	});
}

exports.loadChart=loadChart;
(function() {

	$(document).ready(function() {

		console.log("document is ready");

		setTimeout(() => {
			$('#hello-text').addClass('animated shake');
		}, 1000);

	});

})(document);

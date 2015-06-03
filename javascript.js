$(document).ready(function() {
	
	$('#button1').click(function() {
		$('img').toggle(function() {
		$('img').attr('src','images/turnoff.png');
	}, function() {
		$('img').attr('src','images/turnon.png');
	})
	});
	
	$('#button2').click(function() {
		$('#button1').css('color','green');
		$('#button2').css('color','blue');
		$('#button3').css('color','yellow');
		$('h1').css('font-family','Verdana, sans-serif');
	});
	
	$('#button3').click(function() {
		$('#mainnav').css('width','800px');
		$('#mainnav').css('opacity','0.75');
	});
});
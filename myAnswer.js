$(document).ready(function() {
	$('#BA').click(function () {
		if ($('input.Q1').val() === '') {
			alert('Inputs could not be blank.')
		} else if (typeof $('input.Q2').val() != 'number') {
			alert('Inputs should be numbers.');
		} else {
			function() {
				var v1 = $('input[name=v1]').val();
				var v2 = $('input[name=v2]').val();
				var v3 = $('input[name=v3]').val();
				if (v1 * v2 > v3) {
					alert (v1 + ' * ' + v2 + ' > ' +v3 + ' is true!');
				} else {
					alert (v1 + ' * ' + v2 + ' > ' +v3 + ' is false!');
				};
			};
		};
	});
	
	$('#BB').click(function () {
		if (typeof $('input.Q2').val() != 'number') {
			alert('Inputs should be numbers.');
		} else {
			function() {
				var n1 = $('input[name=n1]').val();
				var n2 = $('input[name=n2]').val();
				var n3 = $('input[name=n3]').val();
				var n4 = $('input[name=n4]').val();
				var n5 = $('input[name=n5]').val();
				var n6 = $('input[name=n6]').val();
				var n7 = $('input[name=n7]').val();
				var n8 = $('input[name=n8]').val();
				var n9 = $('input[name=n9]').val();
				var s1 = n1 + n2 + n3;
				var s2 = n4 + n5 + n6;
				var s3 = n7 + n8 + n9;
				var s4 = n1 + n4 + n7;
				var s5 = n2 + n5 + n8;
				var s6 = n3 + n6 + n9;
				var s7 = n1 + n5 + n9;
				var s8 = n3 + n5 + n7;
				if (s1 === s2 === s3 === s4 === s5 === s6 === s7 === s8) {
					$('div').html('<p>' + s1 + '</p>');
				} else {
					alert('The sums do not equal. Please try again.');
				};
			};
		};
	});
});
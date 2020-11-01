<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script>
		$(document).ready(function () {
			$('select[name="country"]').bind('change', function () {
				// clear select with city
				$('select[name="cities"]').empty();

				// method of ajax -> get
				// (to where we send, what parameters we send, what we do if success)
				$.get("countryCheck.php", {country: $('select[name="country"]').val()}, function (data) {
					// decode json format from coutryCheck.php
					data = JSON.parse(data);
					// iterate elem in loop
					for (var id in data){
						$('select[name="cities"]').append($('<option value="' + id + '">'+data[id]+'</option>'))
					}
				});
			});
		});
	</script>
</head>

<body>
	<label for="country">Choose your country</label>
	<select name="country" id="country">
		<option value="0" selected="selected"></option>
		<option value="1">America</option>
		<option value="2">Italy</option>
	</select>
	<label for="cities">Cities:</label>
	<select name="cities" id="cities">
			<option value="0"></option>
	</select>
</body>

</html>
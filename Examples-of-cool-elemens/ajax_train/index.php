<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script>
		function funcBefore() {
			$("#information").text("Loading...")
		}
		// send to func parameter data that we take from content.php
		function funcSuccess(data) {
			$("#information").text(data)
		}

		// run code only when page loaded
		$(document).ready(function () {
			// bind listen of smth clicked(button on keyboard or mouse click) to #load
			// and then run(2nd arguement) function
			$("#load").bind("click", function () {
				var admin = "Admin";
				// method that can run all func of ajax
				$.ajax({
					// send to content.php
					url: "content.php",
					// by POST method
					type: "POST",
					// this parameters name and number with some values
					data: ({
						name: admin,
						number: 5
					}),
					// what we send html or text
					dataType: "html",
					// if answer aren't return we run function funcBefore()
					beforeSend: funcBefore,
					// if we get answer(doesn't metter error or good) we run funcSuccess() func
					success: funcSuccess
				});
			});

			$("#done").bind("click", function () {
				$.ajax({
					url: "check.php",
					type: "POST",
					data: ({
						name: $('#name').val()
					}),
					dataType: "html",
					beforeSend: funcBefore,
					success: function (data) {
						if (data == "fail")
							alert('Name is taken');
						else
							$("#information").text(data);
					}
				});
			});
		})
	</script>
</head>

<body>
	<input type="text" id="name" placeholder="Enter your name">
	<input type="button" id="done" value="Done">
	<p id="load" style="cursor:pointer">Upload data</p>
	<div id="information"></div>
</body>

</html>
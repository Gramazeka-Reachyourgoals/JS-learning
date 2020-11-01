<?php
	// if user choose America we send to user a few cities from America(json_encode - use for sending arrays)
	if($_GET['country'] == 1)
		// encode array to format json
		echo json_encode(array(
			'1'=>'Washington',
			'2'=>'New-York',
		));
	// if user choose italy
	else if ($_GET['country'] == 2)
		echo json_encode(array(
			'3'=>'Neapol',
			'4'=>'Rome',
		));
?>
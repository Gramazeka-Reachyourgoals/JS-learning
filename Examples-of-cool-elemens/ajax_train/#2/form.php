<?php

$inp = $_POST['ourForm__inp'];

switch ($inp) {
	case 'Harry':
		echo 'Griffindor';
		break;
	case 'Hermiona':
		echo 'To my cabinet';
		break;
	default:
		echo 'FIU, maggle';
}
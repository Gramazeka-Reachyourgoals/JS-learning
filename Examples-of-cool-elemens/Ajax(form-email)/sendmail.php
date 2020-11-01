<?php
	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	// letter will be understandable
	$mail->CharSet = 'UTF-8';
	// errors will shows in russian
	$mail->setLanguage('ru', 'phpmailer/language/');
	// let add html tags into mail
	$mail->IsHTML(true);

	// Sender - From whom the email
	$mail->setFrom('vladron28051996@gmail.com', 'Email from customer');
	// Receiver - To whom send
	$mail->addAddress('gramazekavip@gmail.com');
	//Letter subject
	$mail->Subject = "New order";

	//Hand
	$hand = "Правая";
	if($_POST['hand'] == "left"){
		$hand = "Левая";
	}

	//The letter
	$body = '<h1>Встречайте супер письмо!</h1>';
	
	// if field isn't empty add tag <p> with value of field
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['hand']))){
		$body.='<p><strong>Рука:</strong> '.$hand.'</p>';
	}
	if(trim(!empty($_POST['age']))){
		$body.='<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
	}
	
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}
	
	//Attach file
	if (!empty($_FILES['image']['tmp_name'])) {
		//way to download file
		$filePath = __DIR__ . "/img/" . $_FILES['image']['name']; 
		//adding file to letter as attachment
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото в приложении</strong>';
			$mail->addAttachment($fileAttach);
		}
	}

	$mail->Body = $body;

	//Sending
	if (!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Data is sent!';
	}

	// create .json with 'error' or 'Data is sent!'
	$response = ['message' => $message];

	// return to script.js
	header('Content-type: application/json');
	echo json_encode($response);
?>
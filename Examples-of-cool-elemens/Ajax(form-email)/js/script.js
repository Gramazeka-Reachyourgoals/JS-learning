"use strict"

document.addEventListener('DOMContentLoaded', function () {

	const form = document.getElementById('form');

	// after submit form run function - formSend
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		// deny to default sending of form
		e.preventDefault();

		// validation
		let error = formValidate(form);
		// get data from all form fields
		let formData = new FormData(form);
		formData.append('image', formImage.files[0]);

		if (error === 0) {
			// send email to post

			// while sending data info to email add loading gif
			form.classList.add('_sending');

			// wait to send all form values(formData) to file sendmail.php
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});

			// sendmail.php return some .json response
			if (response.ok) {
				let result = await response.json();
				// shows this response to user
				alert(result.message);
				// clear all form fields
				formPreview.innerHTML = '';
				form.reset();
				// hiding loading
				form.classList.remove('_sending');
			} else {
				alert("Error");
				form.classList.remove('_sending');
			}		
		} else {
			alert('Fill in required fields!');
		}

	}

	function formValidate(form) {
		let error = 0;
		// get all <input> with class="_req" - required fields
		let formReq = document.querySelectorAll('._req');

		// checking
		for (let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			// before start smth checking remove class="_error"
			formRemoveError(input);

			// checkin for input with class="_email"
			if (input.classList.contains('_email')) {
				// if check crash
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
				// if it's checkbox and it's not checked
			} else if (input.getAttribute('type') === "checkbox" && input.checked === false) {
				// add error
				formAddError(input);
				error++;
			} else {
				// if string is empty -> error
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	// test of email
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}


	// get attached file to const
	const formImage = document.getElementById('formImage');
	// get div for showing oreview of image
	const formPreview = document.getElementById('formPreview');

	// listen changes into input with attached file
	formImage.addEventListener('change', () => {
		// after choosing 1x file we run function uploadFile
		uploadFile(formImage.files[0]);
	});

	function uploadFile(file) {
		// check type of uploaded file
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Allows only images.');
			formImage.value = '';
			return;
		}
		// checksize of file(< 2Mb)
		if (file.size > 2 * 1024 * 1024) {
			alert('File must be less than 2Mb.');
			return;
		}

		// if file is good -> made preview
		var reader = new FileReader();
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt="Photo">`;
		};
		reader.oneerror = function (e) {
			alert('Error!');
		};
		reader.readAsDataURL(file);
	}

});
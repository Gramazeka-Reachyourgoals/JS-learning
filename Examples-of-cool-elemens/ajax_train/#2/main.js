var servResponse = document.querySelector('#response');

document.forms.ourForm.onsubmit = function (e) {
	// deny standart request to server wih reloading page
	e.preventDefault();

	var userInput = document.forms.ourForm.ourForm__inp.value;
	// if send by GET we need to encode, without can crack code
	userInput = encodeURIComponent(userInput);

	var xhr = new XMLHttpRequest();

	// GET
	// xhr.open('GET', 'form.php' + 'ourForm__inp=' + userInput);
	// POST
	xhr.open('POST', 'form.php');

	// we create data that sends(FormData is inbuilt object into browser)
	// formData will contain all values of fields in our form
	var formData = new FormData(document.forms.ourForm);


	// for POST we need to set header(after send() & before open()!)
	// without server ignore our request
	// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	// our reaction to answer of server
	xhr.onreadystatechange = function () {
		// if request is success
		if (xhr.readyState === 4 && xhr.status === 200){
			servResponse.textContent = xhr.responseText;
		}
	}

	// without formData
	// xhr.send('ourForm__inp=' + userInput);
	// with formData
	xhr.send(formData);
}
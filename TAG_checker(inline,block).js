function getElementDefaultDisplay(tag) {
	var cStyle,
		t = document.createElement(tag),
		gcs = "getComputedStyle" in window;

	document.body.appendChild(t);
	cStyle = (gcs ? window.getComputedStyle(t, "") : t.currentStyle).display;
	document.body.removeChild(t);

	return cStyle;
}

getElementDefaultDisplay("a") //"inline"
getElementDefaultDisplay("div") //"block"
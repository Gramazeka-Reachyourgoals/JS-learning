// Todo: Create a function isValidHtml(string) that accepts one parameter as an html-like string and checks correct open and close html tags and returns true or false for valid or invalid strings respectively. Allowed tags are the next: h1, h2, h3, p, a, span.

// test commands
// expected
// +false
console.log(isValidHtml('<cake>foo</cake><p>test</p>'))
// +false
console.log(isValidHtml('<any>rocks</any>'))
// +true
console.log(isValidHtml('<p>rocks <span>test</span> </p>'))
// +false
console.log(isValidHtml('<h1>foo</h1> <h3>bar</h3>'))
// +true
console.log(isValidHtml('<a href="#">foo</a>'))

function isValidHtml(string) {
	var k='';
	for (let i = 0; i < string.length; i++) {
		k+=string[i]

		switch (k) {
			case '<h1>':
				if (string.search('</h1>')){
					if (string.slice(-5) === '</h1>'){
						return true
					}
					return false
				}
				break;
			case '<h2>':
				if (string.search('</h2>')){
					if (string.slice(-5) === '</h2>'){
						return true
					}
					return false
				}
				break;
			case '<h3>':
				if (string.search('</h3>')){
					if (string.slice(-5) === '</h3>'){
						return true
					}
					return false
				}
				break;
			case '<p>':
				if (string.search('</p>')){
					if (string.slice(-4) === '</p>'){
						return true
					}
					return false
				}
				break;
			case '<a href="#">':
				if (string.search('</a>')){
					if (string.slice(-4) === '</a>'){
						return true
					}
					return false
				}
				break;
			case '<span>':
				if (string.search('</span>')){
					if (string.slice(-7) === '</span>'){
						return true
					}
					return false
				}
				break;
		}
	}
	return false
}
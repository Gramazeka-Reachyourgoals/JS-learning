// long version
function telephoneCheckLong(str) {
	// let myRegexp=/\d{3}-\d{3}-\d{4}/;
	// let myRegexp=/\(\d{3}\)\d{3}-\d{4}/;
	// let myRegexp=/\(\d{3}\) \d{3}-\d{4}/;
	// let myRegexp=/\d{3} \d{3} \d{4}/;
	// let myRegexp=/\d{10}/;
	// let myRegexp=/^1 \d{3} \d{3} \d{4}/;
	// let myRegexp=/^\d{10}/;
	// let myRegexp=/^1\(\d{3}\)\d{3}-\d{4}/;
	// let myRegexp=/^1 \(\d{3}\) \d{3}-\d{4}/;
	// let myRegexp=/^1 \d{3}-\d{3}-\d{4}/;

	var myRegexp = /^\d{3}-\d{3}-\d{4}|^\(\d{3}\)\d{3}-\d{4}|^\(\d{3}\) \d{3}-\d{4}|^\d{3} \d{3} \d{4}|^\d{10}$|^1 \d{3} \d{3} \d{4}|^1\(\d{3}\)\d{3}-\d{4}|^1 \(\d{3}\) \d{3}-\d{4}|^1 \d{3}-\d{3}-\d{4}/;

	let result = myRegexp.test(str);
	console.log(result)
	return result;
}

// short version
function telephoneCheck(str) {
	/* 
		^ denotes the beginning of the string.

		(1\s?)? allows for “1” or "1 " if there is one.

		\d{n} checks for exactly n number of digits so \d{3} checks for three digits.

		x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.

		[\s\-]? checks for spaces or dashes between the groups of digits.

		$ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
	*/
	var myRegexp = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

	let result = myRegexp.test(str);
	console.log(str, result)
	return result;
}

// All test cases
telephoneCheck("555-555-5555")
telephoneCheck("1 555-555-5555")
telephoneCheck("1 (555) 555-5555")
telephoneCheck("5555555555")
telephoneCheck("555-555-5555")
telephoneCheck("(555)555-5555")
telephoneCheck("1(555)555-5555")
telephoneCheck("555-5555")
telephoneCheck("5555555")
telephoneCheck("1 555)555-5555")
telephoneCheck("1 555 555 5555")
telephoneCheck("1 456 789 4444")
telephoneCheck("123**&!!asdf#")
telephoneCheck("55555555")
telephoneCheck("(6054756961)")
telephoneCheck("2 (757) 622-7382")
telephoneCheck("0 (757) 622-7382")
telephoneCheck("-1 (757) 622-7382")
telephoneCheck("2 757 622-7382")
telephoneCheck("10 (757) 622-7382")
telephoneCheck("27576227382")
telephoneCheck("(275)76227382")
telephoneCheck("2(757)6227382")
telephoneCheck("2(757)622-7382")
telephoneCheck("555)-555-5555")
telephoneCheck("(555-555-5555")
telephoneCheck("(555)5(55?)-5555")
// localStorage
// DevTools->Application->Storage->LocalStorage

const myNumber = 16;

// delete variable number(at localStorage)
localStorage.removeItem('number');

// get value of variable number(at localStorage)
console.log(localStorage.getItem('number'));

// set variable number=16(at localStorage)
localStorage.setItem('number', myNumber);
console.log(localStorage.getItem('number'));

// clear(delete) all variables at localStorage
localStorage.clear();

// ________

const obj = {
	name: 'Ihor',
	age: 23
}

/* 
if we add object(obj) to variable person in localStorage
we will see that value is [object Object]
that's cause localStorage works only with strings
*/
// localStorage.setItem('person', obj)
/* 
after this command localStorage take var obj & change
it to string -> obj.toString() // [object Object]
*/

// so we should transform obj to string
localStorage.setItem('person', JSON.stringify(obj))

// when we want to get smth from localStorage we
// should transform it from string
const raw = localStorage.getItem('person'); //get
const person = JSON.parse(raw) //transform to object

console.log(raw);
console.log(person);

person.name = "Kolya"
console.log(person);

// __________
/* 
if we run this listener and change smth at localStorage
but on the another tab(browser) it trigger
e(event) will container all needed info about value &
tab
*/
window.addEventListener('storage', function (e) {
	console.log(e)
})
// alternative
// window.onstorage=(e)=>{console.log(e);}

// What difference btw localStorage(LS) and coockies
/* 
LS(~5MB) is bigger+
coockies will send with data to server(not secure)
LS only save data on your PC
*/
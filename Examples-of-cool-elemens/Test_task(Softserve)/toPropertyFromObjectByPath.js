// Todo: Write a function getPath(obj, path) that return property from the object by path. path is a string devided by point. e.g. 'first.second,third'.

// test commands
// expected
// +1
console.log(getPath({val: 1}, 'val'));
// 2
console.log(getPath({val: { val: 2 }}, 'val.val'));
// 2
const obj = {val: { childVal: { nestedVal: 2 } }};
console.log(getPath(obj, 'val.childVal.nestedVal'));

function getPath(obj, path) {
	path=path.split('.');
	var p=obj[path[0]];
	for (let i = 0; i < path.length; i++) {
		for (path[i] in obj) {
			obj[path[i]]
		}
	}
	return p
}
// for(let j=0; j<Object.keys(obj).length; j++){
	
// }
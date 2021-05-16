function checkCashRegister(price, cash, cid) {
	let resultObj = {};
	let due = cash - price;

	let values = {
		'PENNY': 0.01,
		'NICKEL': 0.05,
		'DIME': 0.1,
		'QUARTER': 0.25,
		'ONE': 1,
		'FIVE': 5,
		'TEN': 10,
		'TWENTY': 20,
		'ONE HUNDRED': 100
	}

  console.log(`Due - ${due}`)

	// calc 'change' key, return status
	function calcChange(neededEl){
		let triggerZero=false;
		let neededArr = cid.filter((el,i) => i <= neededEl).reverse();
		let allNeededCash = neededArr.reduce((sum, el) => {
			return sum+el[1]
		}, 0);
		allNeededCash=Math.round(allNeededCash * 100) / 100;

		if (allNeededCash > due){
			let changeArr=neededArr.reduce((stack, el) => {
				let minus=0;
				while (el[1] > 0 && due >= values[el[0]] && due != 0){
					due-=values[el[0]]
					el[1]-=Math.round(values[el[0]] * 100) / 100;
					minus+=Math.round(values[el[0]] * 100) / 100;
					due=Math.round(due * 100) / 100;
				}
				if(!triggerZero && minus != 0){
					stack.push([el[0], minus]);
				}
				if(due == 0){
					triggerZero = true;	
				}
				return stack
			}, [])
			
			resultObj.change = changeArr;
			resultObj.status = 'OPEN';
		} else if (allNeededCash == due){
			resultObj.change = cid;
			resultObj.status = 'CLOSED';
		} else {
			resultObj.change = [];
			resultObj.status = 'INSUFFICIENT_FUNDS';
		}
	
		// 'status' key
		return
	}

	if(due >= 100){
		calcChange(cid.length-1);
	} else if (due >= 20){
		calcChange(cid.length-2);
	} else if (due >= 10){
		calcChange(cid.length-3);
	} else if (due >= 5){
		calcChange(cid.length-4);
	} else if (due >= 1){
		calcChange(cid.length-5);
	} else if (due >= 0.25){
		calcChange(cid.length-6);
	} else if (due >= 0.1){
		calcChange(cid.length-7);
	} else if (due >= 0.05){
		calcChange(cid.length-8);
	} else {
		calcChange(cid.length-9);
	}

	console.log(resultObj);
	return resultObj;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log('Check result: ', {status: "OPEN", change: [["QUARTER", 0.5]]});
// RESULT: {status: "OPEN", change: [["QUARTER", 0.5]]}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log('Check result: ', {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]});
// RESULT: {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log('Check result: ', {status: "INSUFFICIENT_FUNDS", change: []});
// RESULT: {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log('Check result: ', {status: "INSUFFICIENT_FUNDS", change: []});
// RESULT: {status: "INSUFFICIENT_FUNDS", change: []}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
console.log('Check result: ', {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]});
// RESULT: {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
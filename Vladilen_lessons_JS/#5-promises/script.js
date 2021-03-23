// promises

// example through callbacks(if we want to made 3 request to server
// and combine this data => there's a lot of input callbacks(hard
// to maintain this code)) - promise it's alternative
console.log('Request data...');

// setTimeout(() => {
// 	console.log('Preparing data...');

// 	const backendData = {
// 		server: 'aws',
// 		port: 2000,
// 		status: 'working'
// 	}

// 	setTimeout(() => {
// 		backendData.modified = true;
// 		console.log('Data received', backendData);
// 	}, 2000)
// }, 2000)

// promise
const p = new Promise(function (resolve, reject) {
	// async code
	setTimeout(() => {
		console.log('Preparing data...');
		const backendData = {
			server: 'aws',
			port: 2000,
			status: 'working'
		}
		resolve(backendData)
	}, 2000)
})

p.then((data) => {
	console.log('Data received', data);

	// another request
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true;
			// resolve(data)
			reject(data)
		}, 2000)
	})
})
	.then(clientData=>{
		console.log('Modified data received', clientData);
		clientData.fromPromise=true;
		return clientData
	}).then(data=>{
		console.log('Modified2 data received',data);
	})
	// if promise rejected
	.catch(err=>console.error('Error: ', err))
	// run finally in any case
	.finally(()=>{
		console.log('Finally');
	})

const sleep = ms => {
	return new Promise(resolve=>{
		setTimeout(()=>resolve(), ms)
	})
}

// sleep(2000).then(()=>console.log('After 2 sec'))
// sleep(3000).then(()=>console.log('After 3 sec'))

// .all - get array with promises
// wait when all promises will finished & run .then 
Promise.all([sleep(2000), sleep(5000)])
	// .all returns promise(it has methods .then, .catch, .finally)
	.then(()=>{
		console.log('All promises finished');
	})

// .race - get array with promises
// wait when the quickest promise will finished & run .then 
Promise.race([sleep(2000), sleep(5000)])
	// .all returns promise(it has methods .then, .catch, .finally)
	.then(()=>{
		console.log('Race promises finished');
	})
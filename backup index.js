(async () => {
	var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello, world!');
}).listen(process.env.PORT);

})()

// (async () => {

//     const henrique = await require('./resx.js')
//     console.log(await henrique.executa())

//  })();



// (async () => {

// 	// try
// 	// {

// 		const henrique = require('./resx');

// 		// import express package(commonJS syntax)
// 		const express = require('express')

// 		// instatiate the express app  
// 		const app = express()
	
// 		const PORT = process.env.PORT

		
// 		app.get("/api", async (req, res)  => {
// 			res.end(JSON.stringify(await henrique.executa()));
// 		})

// 	// Listen for incoming requests
// 	app.listen(PORT, () => console.log(`server started, listening PORT ${PORT}`))
// 	// }

// 	//  catch(error){
// 	// 	//seu tratamento de erro aqui
// 	// 	console.log(err)
// 	// }

// })()
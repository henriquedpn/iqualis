// (async () => {
// 	var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Hello, world!');
// }).listen(process.env.PORT || 80);

// })()

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
	
// 		const PORT = process.env.PORT || 80

		
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

(async () => {
    var http = require('http');
    var henrique = require('./resx');
    http.createServer( async function(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.write(JSON.stringify(await henrique.executa()));
        res.end();
    }).listen(process.env.PORT);
    
    })()



//     var http = require('http');
// http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Hello, world!');
// }).listen(process.env.PORT);
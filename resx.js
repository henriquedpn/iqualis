const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");

// async function loadFile(path) {
//     const fs = require("fs");
//     let data = await fs.promises.readFile(path, { encoding: "utf-8" });
//     return data;
// }

function direita(texto, num) {
    var text = "00000000000000" + texto.toString()
    text = text.substring(text.length - num);
    return text;
}

async function executa() {

    // const http = require("http");
    // const fs = require("fs");

    // const { readFileSync } = require('fs');

    // const fs = require('fs');
    // var data = ""
    // var myData = ""
    // try {
    //     data = fs.readFileSync('resource.resx', 'utf8');
    //     console.log(data);
    // } catch (err) {
    //     console.error(err);
    // }

//xml file from https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ms762271(v=vs.85)
// const xmlFile = readFileSync('http://iqualis.net/node/resource.resx', 'utf8');
// const parser = new XMLParser();
// const jObj = parser.parse(xmlFile);

    // const file = fs.createWriteStream("resource.resx");
    // const request = http.get(
    //     "http://iqualis.net/node/resource.resx",
    //     function (response) {
    //         response.pipe(file);
    //     }
    // );

    // return request;

    //var eyes = require('eyes');
    // var https = require('https');
    // var fs = require('fs');
    // var xml2js = require('xml2js');
    // var parser = new xml2js.Parser();
   
    // parser.on('error', function(err) { console.log('Parser error', err); });

    // // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    // // var XMLHttpRequest = require("xhr2").XMLHttpRequest;
    // // var x = new XMLHttpRequest();
    // var data = '';
    // var x = require('axios');
    // //var x = new XMLHttpRequest();
    // x.open("GET", "https://www.operationphakisa.gov.za/_layouts/15/next/odbnext/monaco/vs/languages/php/scripts/PHP53Schema.xml", true);
    // //x.setRequestHeader("Content-Type: html/json", "Authorization: Basic //AuthKey");
    // x.send();
    //     x.onreadystatechange = function () {
    //             // console.log("readystate: " + x.readyState)
    //             // console.log("status" + x.status)
    //             //     console.log("x.status" + x.status)
                
    //         if (x.readyState == 4 && x.status == 200)
    //         {
    //             console.log("Entrou !!")
    //             data = x.responseXML;
    //             console.log(JSON.stringify(x.responseXML))
    //         // …
    //         };
    //     }
    //         console.log(data)
    

    
    // https.get('https://tsdrapi.uspto.gov/ts/cd/casestatus/sn78787878/info.xml', function(res) {
    //     //https.get('https://iqualis.net/node/resource.resx', function(res) {
    //         console.log(res.statusCode.toString());
    //         if (res.statusCode >= 200 && res.statusCode < 400) {
    //       res.on('data', function(data_) { data += data_.toString(); });
    //       res.on('end', function() {
    //         console.log('data', data);
    //         parser.parseString(data, function(err, result) {
    //           console.log('FINISHED', err, result);
    //         });
    //       });
    //     }
    //   });


//     const http = require('node:http');
// const net = require('node:net');
// const { URL } = require('node:url');

// // Create an HTTP tunneling proxy
// const proxy = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('okay');
// });
// proxy.on('connect', (req, clientSocket, head) => {
//   // Connect to an origin server
//   const { port, hostname } = new URL(`http://${req.url}`);
//   const serverSocket = net.connect(port || 80, hostname, () => {
//     clientSocket.write('HTTP/1.1 200 Connection Established\r\n' +
//                     'Proxy-agent: Node.js-Proxy\r\n' +
//                     '\r\n');
//     serverSocket.write(head);
//     serverSocket.pipe(clientSocket);
//     clientSocket.pipe(serverSocket);
//   });
// });

// console.log("chrgou aqui")

// // Now that proxy is running
// proxy.listen(1337, '127.0.0.1', () => {

//   // Make a request to a tunneling proxy
//   const options = {
//     port: 1337,
//     host: '127.0.0.1',
//     method: 'CONNECT',
//     path: 'https://www.operationphakisa.gov.za/_layouts/15/next/odbnext/monaco/vs/languages/php/scripts/PHP53Schema.xml',
//   };

//   const req = http.request(options);
//   req.end();

//   req.on('connect', (res, socket, head) => {
//     console.log('got connected!');

//     // Make a request over an HTTP tunnel
//     socket.write('GET / HTTP/1.1\r\n' +
//                  'Host: https://www.operationphakisa.gov.za/_layouts/15/next/odbnext/monaco/vs/languages/php/scripts/PHP53Schema.xml:80\r\n' +
//                  'Connection: close\r\n' +
//                  '\r\n');
//     socket.on('data', (chunk) => {
//       console.log(chunk.toString());
//     });
//     socket.on('end', () => {
//       proxy.close();
//     });
//   });
// }); ]

//////////////// esse funcionou melhor

// var http = require('http');

// var options = {
//     host: 'https://www.operationphakisa.gov.za/_layouts/15/next/odbnext/monaco/vs/languages/php/scripts/PHP53Schema.xml',
//     path: '/'
// }
// var request = http.request(options, function (res) {
//     var data = '';
//     res.on('data', function (chunk) {
//         data += chunk;
//     });
//     res.on('end', function () {
//         console.log(data);

//     });
// });
// request.on('error', function (e) {
//     console.log(e.message);
// });
// request.end();



const getScript = (url) => {
    return new Promise((resolve, reject) => {
        const http      = require('http'),
              https     = require('https');

        let client = http;

        if (url.toString().indexOf("https") === 0) {
            client = https;
        }

        client.get(url, (resp) => {
            let data = '';

            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                resolve(data);
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
};

// (async (url) => {
//      console.log(await getScript(url));
//  })('http://iqualis.net/resource.html');

      const options = {
        attrPrefix: "@_",
        textNodeName: "#text",
        ignoreNonTextNodeAttr: true,
        ignoreTextNodeAttr: true,
        ignoreNameSpace: true,
        ignoreRootElement: false,
        textNodeConversion: true,
        textAttrConversion: false,
        ignoreAttributes: false
    };

    parser = new XMLParser(options);
    const data = (await getScript('http://iqualis.net/resource.html'));
    const jObj = await parser.parse(data);
    //console.log(await jObj);
    
//    const jObj = data;

    var retorno = ""
    jObj["root"]["data"].forEach((element) => {
        switch (element["@_name"]) {
            case 'Longitude':
                if (element["value"] < 0) {
                    retorno += "-" + direita(element["value"].toString().replace("-", ""), 8);
                }
                else {
                    retorno += "+" + direita(element["value"].toString().replace("+", ""), 8);
                }
                break;
            case 'Latitude':
                if (element["value"] < 0) {
                    retorno += "-" + direita(element["value"].toString().replace("-", ""), 8);
                }
                else {
                    retorno += "+" + direita(element["value"].toString().replace("+", ""), 8);
                }
                break;
            case 'Veiculo':
                retorno += direita(element["value"], 10);
                break;
            case 'Evento':
                retorno += direita(element["value"], 4);
                break;
            case 'Rumo':
                retorno += direita(element["value"], 3);
                break;
            case 'Velocidade':
                retorno += direita(element["value"], 3);
                break;
            case 'Número de ordem':
                retorno += direita(element["value"], 11);
                break;
            case 'Linha':
                retorno += direita(element["value"], 9);
                break;
            default:
                retorno += element["value"];
                break;
        }
    });

    retorno = "SND" + retorno;

    var conta = 0;
    const utf8EncodeText = new TextEncoder();
    const byteArray = utf8EncodeText.encode(retorno);
    byteArray.forEach((element) => {
        conta += element;
    })

    return retorno + ";" + conta.toString() + "#ABF2";



}

module.exports = { executa }


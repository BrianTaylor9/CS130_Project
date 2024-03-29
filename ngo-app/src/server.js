const http = require('http');
const database = require('./database');

// Creating an HTTP server
http.createServer(async (req,res)=> {
    // THIS IS FOR CORS ERRORS
    res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
    // Handling requests to the articles API endpoint
    if(req.url == '/api/articles'){
        try {
            res.writeHead(200, {'Content-Type':'application/text'});
            const dataset = await database.articles(); // here we get the string json
            res.write(JSON.stringify(dataset)); // whoever requests will get the string json as response
        }
        catch (e) {
            console.log(e);
        }
        finally {
            res.end(); // must end response. DONT FOGET
        }
    }
    else if(req.url == '/api/events'){
        try {
            res.writeHead(200, {'Content-Type':'application/text'});
            const dataset = await database.events(); // here we get the string json
            res.write(JSON.stringify(dataset)); // whoever requests will get the string json as response
        }
        catch (e) {
            console.log(e);
        }
        finally {
            res.end(); // must end response. DONT FOGET
        }
    }
}).listen(4000);
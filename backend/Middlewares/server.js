require('dotenv').config({path: '../.env'})
const http = require('http');
const eventsController = require('../Controllers/EventsController');
const blogsController = require('../Controllers/BlogsController');
const port = parseInt(process.env.PORT);

http.createServer(async (req,res)=> {
    // THIS IS FOR CORS ERRORS
    res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
    if(req.url == process.env.BLOGS_URL){
        try {
            res.writeHead(200, {'Content-Type':'application/text'});
            const dataset = await blogsController.blogs(); // here we get the string json
            res.write(JSON.stringify(dataset)); // whoever requests will get the string json as response
        }
        catch (e) {
            console.log(e);
        }
        finally {
            res.end(); // must end response. DONT FOGET
        }
    }
    else if(req.url == process.env.EVENTS_URL){
        try {
            res.writeHead(200, {'Content-Type':'application/text'});
            const dataset = await eventsController.events(); // here we get the string json
            res.write(JSON.stringify(dataset)); // whoever requests will get the string json as response
        }
        catch (e) {
            console.log(e);
        }
        finally {
            res.end(); // must end response. DONT FOGET
        }
    }
}).listen(port);
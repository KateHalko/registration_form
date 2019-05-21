const http = require('http');
const fs = require('fs');
var qs=require('querystring');
var wp = '';
var jsFile='';
var jqFile='';
var cssFile='';
var jsValid='';
http.createServer((req,res)=>{
    switch(req.url){
        case '/':
            res.writeHead(200, {'Content-Type':'text/html'});
            file=fs.readFileSync('./registration.html');
            res.end(file);
            break;
        case '/style.css':
            res.writeHead(200, {'Content-Type':'text/css'});
            file=fs.readFile('./style.css', (err, data)=>{
                if(err)throw err;
                cssFile=data;
            });
            res.end(cssFile);
            break;
        case '/script.js':
            file=fs.readFile('./script.js', (err, data)=>{
                if(err)throw err;
                jsFile=data;
            });
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.end(jsFile);
            break;  
        case '/jquery-2.1.3.min.js':
            file=fs.readFile('./jquery-2.1.3.min.js', (err, data)=>{
                if(err)throw err;
                jqFile = data;
            });
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.end(jqFile);
            break;      
        case '/validation.js':
            file=fs.readFile('./validation.js', (err, data)=>{
                if(err)throw err;
                jsValid = data;
            });
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.end(jsValid);
            break;      
        default: 
            res.writeHead(404, {'Content-Type':'text/plain; charset=UTF-8'});
            res.end('404 Не найдено')

    }
}).listen(3000, ()=>console.log('Server is working'));
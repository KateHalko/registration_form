const mysql = require('mysql');
const http = require('http');
const fs = require('fs');
var qs=require('querystring');
var wp = '';
var jsFile='';
var jqFile='';
var cssFile='';
var cssFile1='';
var jsValid='';
var path = "E:/web";
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '9875421',
    database: 'test'
});
http.createServer((req,res)=>{
    switch(req.url){
        case '/':
            res.writeHead(200, {'Content-Type':'text/html'});
            file=fs.readFileSync(path+'/landing_page.html');
            res.end(file);
            break;
        case '/main.css':
            res.writeHead(200, {'Content-Type':'text/css'});
            file=fs.readFile(path+'/main.css', (err, data)=>{
                if(err)throw err;
                cssFile1=data;
            });
            res.end(cssFile1);
            break;
        case '/image/background.jpg':
            res.writeHead(200, {'Content-Type':'text/plain'});
            file=fs.readFileSync(path+'/image/background.jpg');
            res.end(file);
            break;
        case '/registration.html':
            res.writeHead(200, {'Content-Type':'text/html'});
            file=fs.readFileSync(path+'/registration.html');
            res.end(file);
            break;
        case '/style.css':
            res.writeHead(200, {'Content-Type':'text/css'});
            file=fs.readFile(path+'/style.css', (err, data)=>{
                if(err)throw err;
                cssFile=data;
            });
            res.end(cssFile);
            break;
        case '/script.js':
            file=fs.readFile(path+'/script.js', (err, data)=>{
                if(err)throw err;
                jsFile=data;
            });
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.end(jsFile);
            break;  
        case '/jquery-2.1.3.min.js':
            file=fs.readFile(path+'/jquery-2.1.3.min.js', (err, data)=>{
                if(err)throw err;
                jqFile = data;
            });
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.end(jqFile);
            break;      
        case '/validation.js':
            file=fs.readFile(path+'/validation.js', (err, data)=>{
                if(err)throw err;
                jsValid = data;
            });
            res.writeHead(200, {'Content-Type':'text/javascript'});
            res.end(jsValid);
            break;  
        case '/welcom_page.html':
            if(req.method=='POST'){
                var body = '';
                req.on('data', function(data){
                    body+=data;
                    if(body>1e6) req.connection.destroy();
                });
                req.on('end', function(){
                    var post = qs.parse(body);
                    var sql = "insert into users (name, country)"+ "values ('"+post['firstName']+"','1');";
                    con.connect(function(err){
                        if(err) throw err;
                        console.log("Connected");
                        con.query(sql, function(err, result){
                            if(err) throw err;
                            console.log("1 record inserted");
                            });
                    });
                    wp = "document.write('Welcome "+post['firstName']+"!')";
                });
            };
            res.writeHead(200, {'Content-type':'text/html'});
            file = fs.readFileSync(path+'/welcom_page.html');
            res.end(file);
            break;    
        default: 
            res.writeHead(404, {'Content-Type':'text/plain; charset=UTF-8'});
            res.end('404 Не найдено')

    }
}).listen(3000, ()=>console.log('Server is working'));
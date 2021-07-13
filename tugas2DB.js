const http = require('http');

const server = http.createServer((request, response) =>{
    console.log(request.url);
    console.log(request.headers);
    console.log(request.headers['accept-language']);
    
    
    if (request.url ==='/'){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write(`Bahasa = ${request.headers['accept-language']}<br><br>`);
        //response.write(`request : ${request.headers}`);
        response.write('Jadwal Bola <br><br>');
        response.write("<a href='/copaAmerika2021'>Final Copa Amerika 2021</a><br>");
        response.write("<a href='/euro2021'>Final Euro 2021</a><br>");
        response.end();
    }else if(request.url ==='/copaAmerika2021' ) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('Brazil vs Argentina 11 juli 2021');
        response.end();
    }else if(request.url ==='/euro2021'){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('Inggris vs Italia 12 juli 2021');
        response.end();
    }else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('Tidak ada pertandingan lain');
        response.end();
    }


});

server.listen(4002, () =>{
    console.log(`sever listen http://http://152.67.115.246:4002`);
    
});

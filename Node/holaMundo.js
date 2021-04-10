//Modulos parecido a librerias
http = require("http");
//modulo para file
fs = require("fs");
//Forma asincrona se puede poner dentor del http.createServer
//para no estar reiniciando 
//el servidor cada que se actualiza el archivo html 
//o http server se puede poner dentro de este metodo
/*fs.readFile("dirArchivo",function(err,html){
    
});*/

//Objeto que funje como servidor
http.createServer(function(solicitud, respuesta){
    console.log("Recibimos una nueva peticion");
    //Manera sincrona
    //var html = fs.readFileSync("direccionDeArchivoHTMLALeer");
    //Cabecera
    respuesta.writeHead(200,{"Content-type":"text/html"});
    //Escribir
    respuesta.write(JSON.stringify({nombre:"Diego"}));
    //Serar conexion y mostrar algo en el navegador
    respuesta.end("hola mundo");
//Pone el servidor en escucha, recibe un puerto de escucha
}).listen(9000);


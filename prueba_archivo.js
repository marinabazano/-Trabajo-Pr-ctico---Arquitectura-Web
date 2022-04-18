const fs = require('fs', 'utf8');

let prueba_archivo = async() => {
    let text = fs.readFileSync( 'test.txt' ).toString(); // ejecuta de forma sincrónica
    console.log( text );
}

let prueba_archivo_v2 = async() => {
    fs.readFile('test.txt', function(err, data) { // tiene callback, ejecuta de forma asincrónica, cuando el contenido está disponible ejecuta el callback
        if(err) {
            console.log("Error: " + err);
            return;
        }
        console.log(data.toString())
    });
}

prueba_archivo();
prueba_archivo_v2();
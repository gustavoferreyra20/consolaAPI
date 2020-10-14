const obtenerConsejo = require("./library");

function funcionCallback(consejoExtraido){
    console.log(consejoExtraido.slip.advice);
}

obtenerConsejo(funcionCallback);

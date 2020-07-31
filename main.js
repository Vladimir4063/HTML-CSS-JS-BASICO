/* alert("Hola Mundo!") <- mensaje al iniciar la pag*/

var nombre = "Vladimir Gutierrez";

var altura = 172;

var concatenacion = nombre + " " + altura; 

/* document.write(concatenacion); /*Importamos texto al arch HTML*/ 

var datos = document.getElementById("datos"); /*tomamos el div id para meter texto*/
/*datos.innerHTML= concatenacion*/

datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
`;

if(altura >= 190){ /*Condicionales*/
    datos.innerHTML += `<h1>Eres una persona ALTA</h1>`
}
else{
    datos.innerHTML += `<h1>Eres una persona BAJITA</h1>`
}

//Bucle FOR
//3 parametros - inicializador, menor que, entonces incrementamos + 1
for(var i = 2019; i<= 2020; i++ ){
    //Bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: "+i;
}


function MuestraFecha(mes, año){ //No toma variables globales, sino que al invocar la funcion, debes dar los parametros
    var fecha = document.getElementById("fecha");
    fecha.innerHTML = `
        <h1>Hola, estamos en ${mes} de ${año}</h1>
    `;
}
MuestraFecha("Julio", 2020); //Al invocar la func damos los parametros


//Podemos tener funciones con variables y sus estructuras, los cuales tambien podemos 
//imprimir desde otra funcion como Eje: "imprimir", imprimio a "Aimprimir"

function Aimprimir(mesito, añito){
    var miFecha = `
        <h1>Soy la fecha ${mesito} del añito ${añito}</h1>
    `;
    return miFecha;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML += Aimprimir("Juliesito", 2020);
}
imprimir();

//ARRAY

var nombres = ['Victor', 'Ivan', 'Luciano'];
document.write('<h1>Listado de Nombres: </h1>')

//1 Forma de imprimir lista de nombres.
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>'); //Hago un salto de linea con cada impresion de nombre.
}

//2 Forma de imprimir lista nombres.
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>')
});
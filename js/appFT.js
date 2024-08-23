// CAPITANES //


let imput2 = document.querySelector('.jugadores-FT');

imput2.addEventListener("keydown", (e) => {
    
    if(e.which === 13 || e.which === 188 ){

        return agregarCapitanes();
    }
   
})

// Copiar valor del input al Span de los capitanes //

let imput = document.getElementById('jugadoresFT');

imput.addEventListener('keydown', (e) => {
    let texto2 = e.target.value;
    
    document.querySelector('.jugadores-FT').value = texto2;
    
    if(e.which === 13 || e.which === 188 ){

    document.querySelector('.span-style').innerHTML = texto2;
    
    document.getElementById("jugadoresFT").value = "";
}})

function agregarCapitanes() {

        var div2 = document.createElement('div');
            div2.innerHTML = '';
            div2.className = 'span-svg';
         
            pDatos2.appendChild(div2);
            div2.onclick=quitarCapitanes;

        var div3 = document.getElementById('pDatos2').getElementsByTagName('div')[0];
            document.getElementById('pDatos2').insertBefore(div2, div3);
         
        var span = document.createElement('span');
      
            span.className = 'span-style';
            document.querySelector('.span-svg').appendChild(span);
  
        const ns = 'http://www.w3.org/2000/svg';
        const div = document.querySelector('.span-svg');
        const svg = document.createElementNS(ns, 'svg');
         
                svg.setAttributeNS(null, 'class', 'icon icon-tabler icon-tabler-circle-x');
                svg.setAttributeNS(null, 'width', '32');
                svg.setAttributeNS(null, 'height', '32');
                svg.setAttributeNS(null, 'viewBox', '0 0 24 24');
                svg.setAttributeNS(null, 'stroke-width', '1.5');
                svg.setAttributeNS(null, 'stroke', '#000000' );
                svg.setAttributeNS(null, 'fill', 'currentcolor');
                svg.setAttributeNS(null, 'stroke-linecap', 'round');
                svg.setAttributeNS(null, 'stroke-linejoin', 'round');
                        
                div.appendChild(svg);
                        
                const newpath = document.createElementNS(ns, 'path');
                newpath.setAttributeNS(null, 'stroke', 'none');
                newpath.setAttributeNS(null,  'd', 'M0 0h24v24H0z');
                newpath.setAttributeNS(null,  'fill', 'none');
                        
                svg.appendChild(newpath);
                        
                const circle = document.createElementNS(ns, 'circle');
                circle.setAttributeNS(null, 'cx', 12);
                circle.setAttributeNS(null, 'cy', 12);
                circle.setAttributeNS(null, 'r', '9');
                        
                svg.appendChild(circle);
                        
                        
                const newpath2 = document.createElementNS(ns, 'path');
                newpath2.setAttributeNS(null,  'd', 'M10 10l4 4m0 -4l-4 4');
                        
                svg.appendChild(newpath2);


                contarJugadores();
}

InputEvent.onkeydown = imput2;

// JUGADORES DE SEGUNDO NIVEL //

let imputSegundo = document.querySelector('.jugadores-FT2');

imputSegundo.addEventListener("keydown", (e) => {
    if(e.which === 13 || e.which === 188 ){

        return agregarSegundoNivel();
    }
   
})

// Copiar valor del input al Span de los jugadores de Segundo Nivel //

let imputSegundo2 = document.getElementById('jugadoresFT2');

imputSegundo2.addEventListener('keydown', (e) => {
    let textoSegundo = e.target.value;
    document.querySelector('.jugadores-FT2').value = textoSegundo;

    if(e.which === 13 || e.which === 188 ){

    document.querySelector('.span-style2').innerHTML = textoSegundo;
    
    document.getElementById("jugadoresFT2").value = "";
}})

function agregarSegundoNivel() {

        var div2 = document.createElement('div');
            div2.innerHTML = '';
            div2.className = 'span-svg2';
         
            segundoNivel.appendChild(div2);
            div2.onclick=quitarSegundoNivel;

        var div3 = document.getElementById('segundoNivel').getElementsByTagName('div')[0];
            document.getElementById('segundoNivel').insertBefore(div2, div3);
         
        var span = document.createElement('span');
      
            span.className = 'span-style2';
            document.querySelector('.span-svg2').appendChild(span);
  
        const ns = 'http://www.w3.org/2000/svg';
        const div = document.querySelector('.span-svg2');
        const svg = document.createElementNS(ns, 'svg');
         
                svg.setAttributeNS(null, 'class', 'icon icon-tabler icon-tabler-circle-x');
                svg.setAttributeNS(null, 'width', '32');
                svg.setAttributeNS(null, 'height', '32');
                svg.setAttributeNS(null, 'viewBox', '0 0 24 24');
                svg.setAttributeNS(null, 'stroke-width', '1.5');
                svg.setAttributeNS(null, 'stroke', '#000000' );
                svg.setAttributeNS(null, 'fill', 'currentcolor');
                svg.setAttributeNS(null, 'stroke-linecap', 'round');
                svg.setAttributeNS(null, 'stroke-linejoin', 'round');
                        
                div.appendChild(svg);
                        
                const newpath = document.createElementNS(ns, 'path');
                newpath.setAttributeNS(null, 'stroke', 'none');
                newpath.setAttributeNS(null,  'd', 'M0 0h24v24H0z');
                newpath.setAttributeNS(null,  'fill', 'none');
                        
                svg.appendChild(newpath);
                        
                const circle = document.createElementNS(ns, 'circle');
                circle.setAttributeNS(null, 'cx', 12);
                circle.setAttributeNS(null, 'cy', 12);
                circle.setAttributeNS(null, 'r', '9');
                        
                svg.appendChild(circle);
                        
                        
                const newpath2 = document.createElementNS(ns, 'path');
                newpath2.setAttributeNS(null,  'd', 'M10 10l4 4m0 -4l-4 4');
                        
                svg.appendChild(newpath2);

                contarJugadores();

            }

InputEvent.onkeydown = imputSegundo;

// JUGADORES DE TERCER NIVEL//

let imput3 = document.querySelector('.jugadores-FT3');

imput3.addEventListener("keydown", (e) => {
    if(e.which === 13 || e.which === 188 ){

        return agregarTercerNivel();
    }
   
})

let imputTercero3 = document.getElementById('jugadoresFT3');

imputTercero3.addEventListener('keydown', (e) => {
    let textoTercero = e.target.value;
    document.querySelector('.jugadores-FT3').value = textoTercero;

    if(e.which === 13 || e.which === 188 ){

    document.querySelector('.span-style3').innerHTML = textoTercero;
    
    document.getElementById("jugadoresFT3").value = "";
}})

function agregarTercerNivel() {

        var div2 = document.createElement('div');
            div2.innerHTML = '';
            div2.className = 'span-svg3';
         
            tercerNivel.appendChild(div2);
            div2.onclick=quitarTercerNivel;

        var div3 = document.getElementById('tercerNivel').getElementsByTagName('div')[0];
            document.getElementById('tercerNivel').insertBefore(div2, div3);
         
        var span = document.createElement('span');
      
            span.className = 'span-style3';
            document.querySelector('.span-svg3').appendChild(span);
  
        const ns = 'http://www.w3.org/2000/svg';
        const div = document.querySelector('.span-svg3');
        const svg = document.createElementNS(ns, 'svg');
         
                svg.setAttributeNS(null, 'class', 'icon icon-tabler icon-tabler-circle-x');
                svg.setAttributeNS(null, 'width', '32');
                svg.setAttributeNS(null, 'height', '32');
                svg.setAttributeNS(null, 'viewBox', '0 0 24 24');
                svg.setAttributeNS(null, 'stroke-width', '1.5');
                svg.setAttributeNS(null, 'stroke', '#000000' );
                svg.setAttributeNS(null, 'fill', 'currentcolor');
                svg.setAttributeNS(null, 'stroke-linecap', 'round');
                svg.setAttributeNS(null, 'stroke-linejoin', 'round');
                        
                div.appendChild(svg);
                        
                const newpath = document.createElementNS(ns, 'path');
                newpath.setAttributeNS(null, 'stroke', 'none');
                newpath.setAttributeNS(null,  'd', 'M0 0h24v24H0z');
                newpath.setAttributeNS(null,  'fill', 'none');
                        
                svg.appendChild(newpath);
                        
                const circle = document.createElementNS(ns, 'circle');
                circle.setAttributeNS(null, 'cx', 12);
                circle.setAttributeNS(null, 'cy', 12);
                circle.setAttributeNS(null, 'r', '9');
                        
                svg.appendChild(circle);
                        
                        
                const newpath2 = document.createElementNS(ns, 'path');
                newpath2.setAttributeNS(null,  'd', 'M10 10l4 4m0 -4l-4 4');
                        
                svg.appendChild(newpath2);

                contarJugadores();
            }

InputEvent.onkeydown = imput3;

// AGREGAR JUGADORES DE CUARTO NIVEL //

let imput4 = document.querySelector('.jugadores-FT4');

imput4.addEventListener("keydown", (e) => {
    if(e.which === 13 || e.which === 188 ){

        return agregarCuartoNivel();
    }
   
})


let imputCuarto4 = document.getElementById('jugadoresFT4');

imputCuarto4.addEventListener('keydown', (e) => {
    let textoCuarto = e.target.value;
    document.querySelector('.jugadores-FT4').value = textoCuarto;

    if(e.which === 13 || e.which === 188 ){

    document.querySelector('.span-style4').innerHTML = textoCuarto;
    
    document.getElementById("jugadoresFT4").value = "";
}})

function agregarCuartoNivel() {

        var div2 = document.createElement('div');
            div2.innerHTML = '';
            div2.className = 'span-svg4';
         
            segundoNivel.appendChild(div2);
            div2.onclick=quitarCuartoNivel;

        var div3 = document.getElementById('cuartoNivel').getElementsByTagName('div')[0];
            document.getElementById('cuartoNivel').insertBefore(div2, div3);
         
        var span = document.createElement('span');
      
            span.className = 'span-style4';
            document.querySelector('.span-svg4').appendChild(span);
  
        const ns = 'http://www.w3.org/2000/svg';
        const div = document.querySelector('.span-svg4');
        const svg = document.createElementNS(ns, 'svg');
         
                svg.setAttributeNS(null, 'class', 'icon icon-tabler icon-tabler-circle-x');
                svg.setAttributeNS(null, 'width', '32');
                svg.setAttributeNS(null, 'height', '32');
                svg.setAttributeNS(null, 'viewBox', '0 0 24 24');
                svg.setAttributeNS(null, 'stroke-width', '1.5');
                svg.setAttributeNS(null, 'stroke', '#000000' );
                svg.setAttributeNS(null, 'fill', 'currentcolor');
                svg.setAttributeNS(null, 'stroke-linecap', 'round');
                svg.setAttributeNS(null, 'stroke-linejoin', 'round');
                        
                div.appendChild(svg);
                        
                const newpath = document.createElementNS(ns, 'path');
                newpath.setAttributeNS(null, 'stroke', 'none');
                newpath.setAttributeNS(null,  'd', 'M0 0h24v24H0z');
                newpath.setAttributeNS(null,  'fill', 'none');
                        
                svg.appendChild(newpath);
                        
                const circle = document.createElementNS(ns, 'circle');
                circle.setAttributeNS(null, 'cx', 12);
                circle.setAttributeNS(null, 'cy', 12);
                circle.setAttributeNS(null, 'r', '9');
                        
                svg.appendChild(circle);
                        
                        
                const newpath2 = document.createElementNS(ns, 'path');
                newpath2.setAttributeNS(null,  'd', 'M10 10l4 4m0 -4l-4 4');
                        
                svg.appendChild(newpath2);

                contarJugadores();
            }

InputEvent.onkeydown = imput4;


// AGREGAR JUGADORES QUINTO NIVEL //

let imput5  = document.querySelector('.jugadores-FT5');

imput5.addEventListener("keydown", (e) => {
    if(e.which === 13 || e.which === 188 ){

        return agregarQuintoNivel();
    }
   
})

let imputquinto5 = document.getElementById('jugadoresFT5');

imputquinto5.addEventListener('keydown', (e) => {
    let textoQuinto = e.target.value;
    document.querySelector('.jugadores-FT5').value = textoQuinto;

    if(e.which === 13 || e.which === 188 ){

    document.querySelector('.span-style5').innerHTML = textoQuinto;
    
    document.getElementById("jugadoresFT5").value = "";
}})

function agregarQuintoNivel() {

        var div2 = document.createElement('div');
            div2.innerHTML = '';
            div2.className = 'span-svg5';
         
            quintoNivel.appendChild(div2);
            div2.onclick=quitarQuintoNivel;

        var div3 = document.getElementById('quintoNivel').getElementsByTagName('div')[0];
            document.getElementById('quintoNivel').insertBefore(div2, div3);
         
        var span = document.createElement('span');
      
            span.className = 'span-style5';
            document.querySelector('.span-svg5').appendChild(span);
  
        const ns = 'http://www.w3.org/2000/svg';
        const div = document.querySelector('.span-svg5');
        const svg = document.createElementNS(ns, 'svg');
         
                svg.setAttributeNS(null, 'class', 'icon icon-tabler icon-tabler-circle-x');
                svg.setAttributeNS(null, 'width', '32');
                svg.setAttributeNS(null, 'height', '32');
                svg.setAttributeNS(null, 'viewBox', '0 0 24 24');
                svg.setAttributeNS(null, 'stroke-width', '1.5');
                svg.setAttributeNS(null, 'stroke', '#000000' );
                svg.setAttributeNS(null, 'fill', 'currentcolor');
                svg.setAttributeNS(null, 'stroke-linecap', 'round');
                svg.setAttributeNS(null, 'stroke-linejoin', 'round');
                        
                div.appendChild(svg);
                        
                const newpath = document.createElementNS(ns, 'path');
                newpath.setAttributeNS(null, 'stroke', 'none');
                newpath.setAttributeNS(null,  'd', 'M0 0h24v24H0z');
                newpath.setAttributeNS(null,  'fill', 'none');
                        
                svg.appendChild(newpath);
                        
                const circle = document.createElementNS(ns, 'circle');
                circle.setAttributeNS(null, 'cx', 12);
                circle.setAttributeNS(null, 'cy', 12);
                circle.setAttributeNS(null, 'r', '9');
                        
                svg.appendChild(circle);
                        
                        
                const newpath2 = document.createElementNS(ns, 'path');
                newpath2.setAttributeNS(null,  'd', 'M10 10l4 4m0 -4l-4 4');
                        
                svg.appendChild(newpath2);

                contarJugadores();
            }

InputEvent.onkeydown = imput5;


// AGREGAR ARQUEROS //

let imput6  = document.querySelector('.jugadores-FT6');

imput6.addEventListener("keydown", (e) => {
    if(e.which === 13 || e.which === 188 ){

        return agregarArquero();
    }
   
})

let imputSeis = document.getElementById('jugadoresFT6');

imputSeis.addEventListener('keydown', (e) => {
    let textoArquero = e.target.value;
    document.querySelector('.jugadores-FT6').value = textoArquero;

    if(e.which === 13 || e.which === 188 ){

    document.querySelector('.span-style6').innerHTML = textoArquero;
    
    document.getElementById("jugadoresFT6").value = "";
}})

function agregarArquero() {

        var div2 = document.createElement('div');
            div2.innerHTML = '';
            div2.className = 'span-svg6';
         
            arqueroNivel.appendChild(div2);
            div2.onclick=quitarArqueroNivel;

        var div3 = document.getElementById('arqueroNivel').getElementsByTagName('div')[0];
            document.getElementById('arqueroNivel').insertBefore(div2, div3);
         
        var span = document.createElement('span');
      
            span.className = 'span-style6';
            document.querySelector('.span-svg6').appendChild(span);
  
        const ns = 'http://www.w3.org/2000/svg';
        const div = document.querySelector('.span-svg6');
        const svg = document.createElementNS(ns, 'svg');
         
                svg.setAttributeNS(null, 'class', 'icon icon-tabler icon-tabler-circle-x');
                svg.setAttributeNS(null, 'width', '32');
                svg.setAttributeNS(null, 'height', '32');
                svg.setAttributeNS(null, 'viewBox', '0 0 24 24');
                svg.setAttributeNS(null, 'stroke-width', '1.5');
                svg.setAttributeNS(null, 'stroke', '#000000' );
                svg.setAttributeNS(null, 'fill', 'currentcolor');
                svg.setAttributeNS(null, 'stroke-linecap', 'round');
                svg.setAttributeNS(null, 'stroke-linejoin', 'round');
                        
                div.appendChild(svg);
                        
                const newpath = document.createElementNS(ns, 'path');
                newpath.setAttributeNS(null, 'stroke', 'none');
                newpath.setAttributeNS(null,  'd', 'M0 0h24v24H0z');
                newpath.setAttributeNS(null,  'fill', 'none');
                        
                svg.appendChild(newpath);
                        
                const circle = document.createElementNS(ns, 'circle');
                circle.setAttributeNS(null, 'cx', 12);
                circle.setAttributeNS(null, 'cy', 12);
                circle.setAttributeNS(null, 'r', '9');
                        
                svg.appendChild(circle);
                        
                        
                const newpath2 = document.createElementNS(ns, 'path');
                newpath2.setAttributeNS(null,  'd', 'M10 10l4 4m0 -4l-4 4');
                        
                svg.appendChild(newpath2);

                contarJugadores();
            }

InputEvent.onkeydown = imput6;

function quitarCapitanes(){
    // console.log("se quito correctamente");
    document.getElementById('pDatos2').removeChild(this);
    return contarJugadores();
}        

function quitarSegundoNivel(){
    // console.log("se quito correctamente");
    document.getElementById('segundoNivel').removeChild(this);
    return contarJugadores();
}     
function quitarTercerNivel(){
    // console.log("se quito correctamente");
    document.getElementById('tercerNivel').removeChild(this);
    return contarJugadores();
}     
function quitarCuartoNivel(){
    // console.log("se quito correctamente");
    document.getElementById('cuartoNivel').removeChild(this);
    return contarJugadores();
}     
function quitarQuintoNivel(){
    // console.log("se quito correctamente");
    document.getElementById('quintoNivel').removeChild(this);
    return contarJugadores();
}     
function quitarArqueroNivel(){
    // console.log("se quito correctamente");
    document.getElementById('arqueroNivel').removeChild(this);
    return contarJugadores();
}     

// CODIGO PARA EL BOTON SORTEAR EQUIPOS//

// CREAR EL ARRAY DE CAPITANTES DESDE LAS ETIQUETAS SPAN //

function sorteo(){

var capitanes = [];
array = document.getElementById('pDatos2').getElementsByTagName('span').length;
for (let i = 0; i < array; i++) {
capitanes.push({
    id: Math.floor(Math.random() * 1000),
    nombre: document.getElementById('pDatos2').getElementsByTagName('span')[i].innerHTML
})

};

capitanes.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    //a must be equal to b
    return 0;
  });

console.log(capitanes);

// CREAR EL ARRAY DEL 2DO NIVEL DE JUGADORES DESDE LAS ETIQUETAS SPAN //

var segundo = [];
array = document.getElementById('segundoNivel').getElementsByTagName('span').length;
for (let i = 0; i < array; i++) {
segundo.push({
    id: Math.floor(Math.random() * 1000),
    nombre: document.getElementById('segundoNivel').getElementsByTagName('span')[i].innerHTML
})

};

segundo.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    //a must be equal to b
    return 0;
  });

console.log(segundo);

// CREAR EL ARRAY DEL 3ER NIVEL DE JUGADORES DESDE LAS ETIQUETAS SPAN //

var tercero = [];
array = document.getElementById('tercerNivel').getElementsByTagName('span').length;
for (let i = 0; i < array; i++) {
tercero.push({
    id: Math.floor(Math.random() * 1000),
    nombre: document.getElementById('tercerNivel').getElementsByTagName('span')[i].innerHTML
})

};

tercero.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    //a must be equal to b
    return 0;
  });

console.log(tercero);

// CREAR EL ARRAY DEL 4TO NIVEL DE JUGADORES DESDE LAS ETIQUETAS SPAN //

var cuarto = [];
array = document.getElementById('cuartoNivel').getElementsByTagName('span').length;
for (let i = 0; i < array; i++) {
cuarto.push({
    id: Math.floor(Math.random() * 1000),
    nombre: document.getElementById('cuartoNivel').getElementsByTagName('span')[i].innerHTML
})

};

cuarto.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    //a must be equal to b
    return 0;
  });

console.log(cuarto);

// CREAR EL ARRAY DEL 5TO NIVEL DE JUGADORES DESDE LAS ETIQUETAS SPAN //

var quinto = [];
array = document.getElementById('quintoNivel').getElementsByTagName('span').length;
for (let i = 0; i < array; i++) {
quinto.push({
    id: Math.floor(Math.random() * 1000),
    nombre: document.getElementById('quintoNivel').getElementsByTagName('span')[i].innerHTML
})

};

quinto.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    //a must be equal to b
    return 0;
  });

console.log(quinto);

// CREAR EL ARRAY DE ARQUEROS DESDE LAS ETIQUETAS SPAN //

var arqueros = [];
array = document.getElementById('arqueroNivel').getElementsByTagName('span').length;
for (let i = 0; i < array; i++) {
arqueros.push({
    id: Math.floor(Math.random() * 1000),
    nombre: document.getElementById('arqueroNivel').getElementsByTagName('span')[i].innerHTML
})

};

arqueros.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    //a must be equal to b
    return 0;
  });

console.log(arqueros);

// EQUIPOS FORMADOS SEGUN LA CANTIDAD DE JUGADORES//

var array1 = capitanes;
var array2 = segundo;
var array3 = tercero;
var array4 = cuarto;
var array5 = quinto;
var array6 = arqueros;

var equipos = [];
for (let i = 0; i < array1.length; i++) {
    equipos.push([array1[i], array2[i], array3[i], array4[i], array5[i], array6[i]]);
}
console.log(equipos);

// DIVIDIR EQUIPOS FORMADOS SOLO CON EL DATO DE SUS JUGADORES //

    var nroEquipos = equipos;
    
        for (let i = 0; i < nroEquipos.length; i++) {
            var equipo = nroEquipos[i];
            var jugadores = [];
            for (let j = 0; j < equipo.length; j++) {
                
                jugadores.push(equipo[j].nombre);
            };
                 console.log(jugadores); 
        };

// RESULTADO //

// AGREGANDO UL A TODOS //


    

    var sorteo = nroEquipos;
    var resultado  = document.getElementById('equipoSorteado'); 
    console.log(sorteo.length);
    for (let i = 0; i < sorteo.length; i++) {
        
        var ul = document.createElement('ul');
         
        ul.setAttribute('class', 'equipoSorteado__ubicacion'+[i]); 
        ul.setAttribute('id', 'equipoSorteado__ubicacion'); 
        ul.innerHTML = 'Equipo_'+[i + 1]; 

        resultado.appendChild(ul);
    }  

    // AGREGANDO LI CON LOS JUGADORES//

    var arrRes = [...sorteo];
    // const resultado1= document.querySelector('.equipoSorteado__ubicacion');
    console.log(arrRes.length);
    for (let i = 0; i < arrRes.length; i++) {
        const resultado1= document.querySelector('.equipoSorteado__ubicacion'+[i]);
        var array = sorteo[i];
        console.log(array.length);
        for (let j = 0; j < array.length; j++) {

            const li = document.createElement("li");
            li.textContent = array[j].nombre;
            resultado1.appendChild(li);
            console.log(resultado1);
        }
     }


}

        const ul2 = document.getElementById('boton');
        ul2.addEventListener('click', function() {

            clearInner(n);

            var a = document.getElementById('pDatos2').getElementsByTagName('span').length;
            var b = document.getElementById('segundoNivel').getElementsByTagName('span').length;
            var c = document.getElementById('tercerNivel').getElementsByTagName('span').length;
            var d = document.getElementById('cuartoNivel').getElementsByTagName('span').length;
            var e = document.getElementById('quintoNivel').getElementsByTagName('span').length;
            var f = document.getElementById('arqueroNivel').getElementsByTagName('span').length;
            if (a === 0 || b === 0 || c === 0 || d === 0 || e === 0 || f === 0) {
                    alert('Todos los Jugadores son Necesarios');
                    return;

            }else if (a === b && b === c && c=== d && d === e && e === f) {
                sorteo();
                
            }else {
                alert('La cantidad de jugadores tiene que ser iguales en todos los niveles');
                return;
            }
            });
            

            var n = document.getElementById("equipoSorteado");

            function clearInner(node) {
              while (node.hasChildNodes()) {
                clear(node.firstChild);
              }
            }
            
            function clear(node) {
              while (node.hasChildNodes()) {
                clear(node.firstChild);
              }
              node.parentNode.removeChild(node);
              console.log(node, "cleared!");
            }
            
// Conteo de Jugadores Añadidos //

            function contarJugadores() {
                var a = document.getElementById('pDatos2').getElementsByTagName('span').length;
                    b = document.getElementById('segundoNivel').getElementsByTagName('span').length;
                    c = document.getElementById('tercerNivel').getElementsByTagName('span').length;
                    d = document.getElementById('cuartoNivel').getElementsByTagName('span').length;
                    e = document.getElementById('quintoNivel').getElementsByTagName('span').length;
                    f = document.getElementById('arqueroNivel').getElementsByTagName('span').length;
               var sum = a + b + c + d + e + f;
               document.getElementById('resultadoSuma').innerHTML = 'Cantidad de Jugadores añadidos:'+" "+ sum;
             };

let bienvenido = $('#header-bienvenida');
let menu = $('#menu-content');
let generalContent = $('#general-content');
let especificoContent = $('#especifico-content');
let resultadoContent = $('#resultados-content');

$('#boton-menu-especifico').click(() => {
    cambiarEstadoElemento(especificoContainer);
    cambiarEstadoElemento(menu);
});

$('#boton-menu-general').click(() => {
    cambiarEstadoElemento(generalContainer);
    cambiarEstadoElemento(menu);
});

$('#boton-diagnosticar-general').click(() => {

})

$('#boton-diagnosticar-especifico').click(() => {

})

const main = () => {
    setTimeout(() => {
        cambiarEstadoElemento(bienvenido);
    }, 2000);
    cambiarEstadoElemento(generalContent);

    cargarSintomas();
    cargarEnfermedades();
}

const cargarEnfermedades = () => {
    // 
    let enfermedadesContainer = document.getElementById('#enfermedades-container');
    let h = ``;

    enfermedades.forEach(enfermedad => {
        let item = `
            <div>

            </div>
        `;
    });
}

const cargarSintomas = () => {
    // 
    console.log(`cargarSintomas: Iniciando la carga de síntomas`);
    let sintomasGeneral = document.getElementById('sintomas-container-general');
    let sintomasEspecifico = document.getElementById('sintomas-container-especifico');
    
    let hGral = ``
    let hEspf = ``

    sintomas.forEach(sintoma => {
        console.log(`cargarSintomas: Cargando síntoma: ${ sintoma.nombre }`);
        let itemGral = `
            <div class="list-group-item flex-column align-items-start">
              <div class="list-group-content-header d-flex w-100 justify-content-between align-items-center">
                <h5 class="mb-1 sintoma-nombre" data-toggle="tooltip" data-placement="bottom" title="${ sintoma.descripcion }">${ sintoma.nombre }</h5>
                <small id="slider-general-${ sintoma.id }-int">Nunca</small>
              </div>
              <div class="slidercontainer">
                <input id="slider-general-${ sintoma.id }" type="range" min="0" max="100" value="0" class="slider" onchange="actualizarSlider(this)" oninput="actualizarSlider(this)" />
              </div>
            </div>
            `;
        let itemEspf = `
            <div class="list-group-item list-group-item-action flex-column align-items-start">
              <div class="list-group-content-header d-flex w-100 justify-content-between align-items-center">
                <h5 class="mb-1 sintoma-nombre" data-toggle="tooltip" data-placement="bottom" title="${ sintoma.descripcion }">${ sintoma.nombre }</h5>
                <small id="slider-especifico-${ sintoma.id }-int">Nunca</small>
              </div>
              <div class="slidercontainer">
                <input id="slider-especifico-${ sintoma.id }" type="range" min="0" max="100" value="0" class="slider" onchange="actualizarSlider(this)" oninput="actualizarSlider(this)" />
              </div>
            </div>
            `;
        hGral += itemGral;
        hEspf += itemEspf;
    });

    sintomasGeneral.innerHTML = hGral;
    sintomasEspecifico.innerHTML = hEspf;
}

const cambiarEstadoElemento = elm => { elm.toggleClass("elm-oculto"); }

const mostrarResultados = 0;

const evaluacionEspecifica = 0;

const mostrarSintomas = 0;

const mostrarEnfermedades = 0;

const actualizarSlider = idSintoma => {
    // console.log(`actualizarSlider: Cambiando los datos de ${ idSintoma.id }`);
    let small = document.getElementById(`${ idSintoma.id }-int`);
    let valslider = document.getElementById(`${ idSintoma.id }`).value;
    let valores = ['Nunca', 'Poco', 'Regular', 'Frecuente', 'Siempre'];

    if (valslider == 0) small.innerText = valores[0];
    if (valslider > 0 && valslider <= 33) {
        small.innerText = valores[1];
    } else if (valslider > 33 && valslider <= 66) {
        small.innerText = valores[2];
    } else if (valslider > 66 && valslider <= 99) {
        small.innerText = valores[3];
    } else if (valslider == 100) {
        small.innerText = valores[4];
    }

    // console.log(`actualizarSlider: Valor de slider ${ idSintoma.value }`)
}

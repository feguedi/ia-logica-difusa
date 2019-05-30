let bienvenido = $('#header-bienvenida');
let menu = $('#menu-content');
let generalContent = $('#general-content');
let especificoContent = $('#especifico-content');
let resultadoContent = $('#resultados-content');

const umbral = 0.7;
let sumaMembresias = 0;

$('#boton-menu-especifico').click(() => {
    cambiarEstadoElemento(especificoContent);
    cambiarEstadoElemento(menu);
});

$('#boton-menu-general').click(() => {
    cambiarEstadoElemento(generalContent);
    cambiarEstadoElemento(menu);
});

$('#boton-diagnosticar-general').click(() => {
    
});

$('#boton-diagnosticar-especifico').click(() => {
    
});

$('#radio-general').click(() => {
    cambiarEstadoElemento(menu);
    cambiarEstadoElemento(generalContent);
});

$('#radio-especifico').click(() => {
    cambiarEstadoElemento(menu);
    cambiarEstadoElemento(especificoContent);
});

const main = () => {
    setTimeout(() => {
        cambiarEstadoElemento(bienvenido);
        cambiarEstadoElemento(menu);
    }, 2000);

    cargarSintomas();
    cargarEnfermedades();
}

const cargarEnfermedades = () => {
    // 
    let enfermedadesContainer = document.getElementById('#enfermedades-container');
    let h = ``;

    enfermedades.forEach(enfermedad => {
        let item = `
        <label class="mt-3">
            <input type="checkbox" name="enfermedad" class="card-input-element d-none" id="${ enfermedad.id }-checkbox">
            <div class="card card-body d-flex flex-row justify-content-between align-items-center">
                ${ enfermedad.nombre }
            </div>
        </label>
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
                <input id="slider-general-${ sintoma.id }" type="range" min="0" max="100" value="0" class="slider slider-general" onchange="actualizarSlider(this)" oninput="actualizarSlider(this)" />
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
                <input id="slider-especifico-${ sintoma.id }" type="range" min="0" max="100" value="0" class="slider slider-especifico" onchange="actualizarSlider(this)" oninput="actualizarSlider(this)" />
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

const evaluacionGeneral = () => {
    let slidersSintomas = $('.slider-general');
    let evSliders = [], resultado = [];

    [...slidersSintomas].forEach(val => {
        evSliders.push(
            {
                "nombre": val.id,
                "valor": Number(val.value / 100)
            }
        );
    });

    enfermedades.forEach(enfermedad => {
        sumaMembresias = 0;
        evSliders.forEach(sintoma => {
            sumaMembresias += Math.min(enfermedad.sintomas[sintoma], sintoma.valor);
        })
    });

    // sumaMembresias = 0;
};

const evaluacionEspecifica = () => {
    
};

const actualizarSlider = idSintoma => {
    // console.log(`actualizarSlider: Cambiando los datos de ${ idSintoma.id }`);
    let small = document.getElementById(`${ idSintoma.id }-int`);
    let valslider = document.getElementById(`${ idSintoma.id }`).value;
    let valores = ['Nunca', 'Poco', 'Regular', 'Frecuente', 'Siempre'];

    if (valslider == 0) small.innerText = `${ valores[0] }`;
    if (valslider > 9 && valslider <= 33) {
        small.innerText = `${ Math.round(valslider / 10) } - ${ valores[1] }`;
    } else if (valslider > 33 && valslider <= 66) {
        small.innerText = `${ Math.round(valslider / 10) } - ${ valores[2] }`;
    } else if (valslider > 66 && valslider <= 99) {
        small.innerText = `${ Math.round(valslider / 10) } - ${ valores[3] }`;
    } else if (valslider == 100) {
        small.innerText = `${ valores[4] }`;
    }

    // console.log(`actualizarSlider: Valor de slider ${ idSintoma.value }`)
}

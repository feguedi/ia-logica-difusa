let bienvenido = $('#header-bienvenida');
let menu = $('#menu-content');
let manual = $('#manual-content');
let generalContent = $('#general-content');
let especificoContent = $('#especifico-content');
let resultadoContent = $('#resultados-content');

let enfChkd = 0;

const umbral = 10;
let sumaMembresias = 0;

$('#boton-manual').click(() => {
    cambiarEstadoElemento(manual);
    cambiarEstadoElemento(menu);
});

$('#boton-menu-especifico').click(() => {
    cambiarEstadoElemento(especificoContent);
    cambiarEstadoElemento(menu);
});

$('#boton-menu-general').click(() => {
    cambiarEstadoElemento(generalContent);
    cambiarEstadoElemento(menu);
});

$('#radio-general').click(() => {
    cambiarEstadoElemento(menu);
    cambiarEstadoElemento(generalContent);
});

$('#radio-especifico').click(() => {
    cambiarEstadoElemento(menu);
    cambiarEstadoElemento(especificoContent);
});

// $('.enfermedad-checkbox').click(() => {
    // $(this).click(() => {
//         console.log(`click en ${ this.id }`);
//         if ($(this).prop('checked')) evChkbx--;
//         else evChkbx++;
//         if (evChkbx > 1) $('#boton-diagnosticar-especifico').removeAttr('disabled');
//         if (evChkbx <= 1) $('#boton-diagnosticar-especifico').attr('disabled');
//     });
// });

const main = () => {
    setTimeout(() => {
        cambiarEstadoElemento(bienvenido);
        cambiarEstadoElemento(manual);
    }, 2000);

    // TODO: Cargar primero el manual
    // después el menú

    cargarSintomas();
    cargarEnfermedades();
}

const cargarEnfermedades = () => {
    // 
    console.log(`cargarEnfermedades: Iniciando la carga de enfermedades`);
    let enfermedadesContainer = document.getElementById('enfermedades-container');
    let h = ``;

    enfermedades.forEach(enfermedad => {
        // console.log(`cargarEnfermedades: Cargando item: ${ enfermedad.nombre }`);
        let item = `
        <label class="mt-3">
            <input type="checkbox" name="enfermedad" class="card-input-element enfermedad-checkbox d-none" id="checkbox-${ enfermedad.id }">
            <div class="card card-body d-flex flex-row justify-content-between align-items-center">
                ${ enfermedad.nombre }
            </div>
        </label>
        `;
        h += item;
    });
    enfermedadesContainer.innerHTML = h;
}

const cargarSintomas = () => {
    // 
    console.log(`cargarSintomas: Iniciando la carga de síntomas`);
    let sintomasGeneral = document.getElementById('sintomas-container-general');
    let sintomasEspecifico = document.getElementById('sintomas-container-especifico');
    
    let hGral = ``
    let hEspf = ``

    sintomas.forEach(sintoma => {
        // console.log(`cargarSintomas: Cargando síntoma: ${ sintoma.nombre }`);
        let itemGral = `
            <div class="list-group-item flex-column align-items-start">
              <div class="list-group-content-header d-flex w-100 justify-content-between align-items-center">
                <h5 class="mb-1 sintoma-nombre" data-toggle="tooltip" data-placement="bottom" title="${ sintoma.descripcion }">${ sintoma.nombre }</h5>
                <small id="slider-general-${ sintoma.id }-int">Nunca</small>
              </div>
              <div class="slidercontainer">
                <input id="slider-general-${ sintoma.id }" type="range" step="10" min="0" max="100" value="0" class="slider slider-general" onchange="actualizarSlider(this)" oninput="actualizarSlider(this)" />
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
                <input id="slider-especifico-${ sintoma.id }" type="range" step="10" min="0" max="100" value="0" class="slider slider-especifico" onchange="actualizarSlider(this)" oninput="actualizarSlider(this)" />
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
    let modalResultados = $('#modal-resultados')
    let evSliders = [], resultados = [];

    [...slidersSintomas].forEach(val => {
        evSliders.push(
            {
                "id": val.id.slice(15),
                "valor": Number(val.value / 10)
            }
        );
    });

    enfermedades.forEach(enfermedad => {
        sumaMembresias = 0;
        evSliders.forEach(sintoma => {
            sumaMembresias += Math.min(enfermedad.sintomas[sintoma.id], sintoma.valor) || 0;
            // console.log(`evaluacionGeneral: ${ enfermedad.nombre } -> ${ Math.min(enfermedad.sintomas[sintoma.id], sintoma.valor) }\t${ sintoma.nombre } -> ${ sintoma.valor }`);
        });
        console.log(`evaluacionGeneral: ${ enfermedad.nombre }: ${ sumaMembresias }`);

        if(sumaMembresias > umbral) {
            if(resultados[0] && resultados[0].membresia < sumaMembresias) {
                resultados = [{
                        membresia: sumaMembresias,
                        enfermedad
                    }];
            } else if ((resultados[0] && resultados[0].membresia == sumaMembresias) || !resultados[0]) {
                resultados.push({
                    membresia: sumaMembresias,
                    enfermedad
                });
            }
        }
        
        // resultados.forEach(el => {
        //     console.log(`evaluacionGeneral: resultado: ${ el.enfermedad.id } \t ${ el.membresia }`);
        // })
    });

    console.log(`evaluacionGeneral: sumaMembresias: ${ sumaMembresias }`);

    let hSintomas = ``;
    resultados.forEach(res => {
        console.log(`evaluacionGeneral: resultado: ${ res.enfermedad.id } \t ${ res.membresia }`);
        hSintomas = `
        <li>
            <h6>${ res.enfermedad.nombre }</h6>
            <p class="card-text">${ res.enfermedad.descripcion }</p>
            <p class="card-text">Recomendación: ${ res.enfermedad.recomendacion }</p>
        </li>
        `;
    });

    if (resultados.length == 1) {
        modalResultados.html(`
            <!-- <h5 style="padding-top: 2%;">Sintomas</h6> -->
            <p style="padding-top: 2%;">Esta es la enfermedad que mejor cuadra con sus síntomas:</p>
            <ul>
                ${ hSintomas }
            </ul>
        `);
    } else if (resultados.length > 1) {
        modalResultados.html(`
            <!-- <h5 style="padding-top: 2%;">Sintomas</h6> -->
            <p style="padding-top: 2%;">Estas son las enfermedades que mejor cuadran con sus síntomas:</p>
            <ul>
                ${ hSintomas }
            </ul>
        `);
    } else {
        modalResultados.html(`<p style="padding-top: 2%;">Ninguna enfermedad concuerda con sus síntomas`);
    }
    sumaMembresias = 0;
};

const evaluacionEspecifica = () => {
    let slidersSintomas = $('.slider-especifico');
    let modalResultados = $('#modal-resultados');
    let seleccionEnfermedades = $('.enfermedad-checkbox');

    let evChkbx = [], evSliders = [], resultados = [];

    [...seleccionEnfermedades].forEach(sele => {
        if(sele.checked) {
            enfermedades.forEach(enfermedad => {
                console.log(`evaluacionEspecifica: ${ enfermedad.nombre } | ${ sele.id }`);
                if (enfermedad.id.slice(9) == sele.id) {
                    evChkbx.push(enfermedad);
                    console.log(`evaluacionEspecifica: Agregada ${ enfermedad.nombre }`);
                    // break;
                }
            });
        }
    });

    evChkbx.forEach(chkd => {
        console.log(`evaluacionEspecifica: enfermedad ${ chkd.nombre }`);
    });

    if(evChkbx.length < 2) {
        cambiarEstadoElemento($('#alert-minimo'));
    }

    [...slidersSintomas].forEach(val => {
        evSliders.push({
            "id": val.id.slice(18),
            "valor": Number(val.value / 10)
        });
    });

    evChkbx.forEach(enfermedad => {
        sumaMembresias = 0;
        evSliders.forEach(sin => {
            sumaMembresias += Math.min(enfermedad.sintomas[sin.id], sin.valor) || 0;
            console.log(`evaluacionEspecifica: Sintoma ${ sin.id }`);
        });

        if (sumaMembresias > umbral) {
            if(resultados[0] && resultados[0].membresia < sumaMembresias) {
                resultados = [{
                    membresia: sumaMembresias,
                    enfermedad
                }];
            } else if ((resultados[0] && resultados[0].membresia == sumaMembresias) || !resultados[0]) {
                resultados.push({
                    membresia: sumaMembresias,
                    enfermedad
                });
            }
        }
    });

    let hSintomas = ``;
    let hEnfermedades = ``;

    evChkbx.forEach(chk => {
        hEnfermedades += `
            <li>
                ${ chk.nombre }
            </li>
        `;
    });

    resultados.forEach(res => {
        console.log(`evaluacionEspecifica: resultado: ${ res.enfermedad.id } \t ${ res.membresia }`);
        hSintomas += `
            <li>
                ${ res.sintoma.nombre }
            </li>
        `;
    });

    if (resultados.length == 1) {
        modalResultados.html(`
            <p class="card-text">Enfermedades seleccionadas:</p>
            <ul>
            ${ hEnfermedades }
            </ul>
            <!-- <h5 style="padding-top: 2%;">Sintomas</h6> -->
            <p class="card-text" style="padding-top: 2%;">Esta es la enfermedad que mejor cuadra con sus síntomas:</p>
            <ul>
                ${ hSintomas }
            </ul>
        `);
    } else if (resultados.length > 1) {
        modalResultados.html(`
            <p class="card-text">Enfermedades seleccionadas:</p>
            <ul>
            ${ hEnfermedades }
            </ul>
            <!-- <h5 style="padding-top: 2%;">Sintomas</h6> -->
            <p class="card-text" style="padding-top: 2%;">Estas son las enfermedades que mejor cuadran con sus síntomas:</p>
            <ul>
                ${ hSintomas }
            </ul>
        `);
    } else {
        modalResultados.html(`
            <p class="card-text">Enfermedades seleccionadas:</p>
            <ul>
            ${ hEnfermedades }
            </ul>
            <p class="card-text" style="padding-top: 2%;">Ninguna enfermedad concuerda con sus síntomas</p>`);
    }

    sumaMembresias = 0;
};

const actualizarSlider = idSintoma => {
    // console.log(`actualizarSlider: Cambiando los datos de ${ idSintoma.id }`);
    let small = document.getElementById(`${ idSintoma.id }-int`);
    let valslider = document.getElementById(`${ idSintoma.id }`).value;
    // let valores = ['Nunca', 'Casi nunca', 'Muy raro', 'Raro', 'Moderado', 'Medio', 'Frecuente', 'Muy frecuente', 'Casi siempre', 'Siempre'];
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

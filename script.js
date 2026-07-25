const tablero = document.getElementById("tablero");
const mensaje = document.getElementById("mensaje");
const botonReset = document.getElementById("reset");

let personajeElegido = null;

function crearTablero(){

    tablero.innerHTML = "";

    personajes.forEach((personaje, indice)=>{

        const carta = document.createElement("div");
        carta.className = "carta";
        carta.dataset.id = indice;

        carta.innerHTML = `
            <div class="interior">

                <div class="frente">
                    <img src="${personaje.imagen}" alt="${personaje.nombre}">
                    <div class="nombre">${personaje.nombre}</div>
                </div>

                <div class="reverso"></div>

            </div>
        `;

        carta.addEventListener("click", ()=>{

            // Elegir personaje
            if(personajeElegido === null){

                personajeElegido = indice;

                carta.classList.add("seleccionada");
                carta.classList.add("bloqueada");

                mensaje.textContent =
                    "Tu personaje es: " + personaje.nombre;

                return;
            }

            // No permitir tocar la elegida
            if(indice === personajeElegido){
                return;
            }

            // Girar carta
            carta.classList.toggle("volteada");

        });

        tablero.appendChild(carta);

    });

}

function reiniciar(){

    personajeElegido = null;

    mensaje.textContent =
        "Elegí primero tu personaje.";

    crearTablero();

}

botonReset.addEventListener("click", reiniciar);

crearTablero();

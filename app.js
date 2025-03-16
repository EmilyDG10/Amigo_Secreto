// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


//Funcion para agregar
function agregarAmigo() {

    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo == ""){
        alert("Por favor, ingrese un nombre.");
        return;
    }

    if(amigos.includes(nombreAmigo)){
            alert(`El nombre ${nombreAmigo} ya se encuentra en la lista`);
        return;    
    }

    amigos.push(nombreAmigo);

    //Limpiar campo
    inputAmigo.value = "";

    //Actualizar lista

    actualizarLista();


}


//Funcion para actualizar la lista

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
       const li = document.createElement("li");
       li.textContent = amigos[i];
       listaAmigos.appendChild(li);
    }

}


//Funcio para el aleatorio

function sortearAmigos() {
    if(amigos.length ==0){
        alert("No hay amigos disponibles para sortear, Agrega al menos dos.");
        return;
    }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        const amigoSorteado = amigos[indiceAleatorio];

        const resultado = document.getElementById("resultado");
        resultado.innerHTML =  `Amigo sorteado: <strong>${amigoSorteado}</strong>`;       
}
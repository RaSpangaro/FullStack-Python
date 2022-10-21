// 1. Obtención de los elementos del DOM

let formulario = document.getElementById("formulario_contacto");

let inputNombre = document.querySelector("#nombre");
let parrafoAlertaNombre = document.querySelector(".alerta-nombre");

let inputEmail = document.querySelector("#email");
let parrafoAlertaEmail = document.querySelector(".alerta-email");



// 2. Creación de la función con el listener y la ejecución de las funciones de validación y alerta

formulario.addEventListener('submit', (event) => {

    if(
        validacionExitosa() 
        ){
            formulario.reset()
        } else{
            event.preventDefault();
            alertarUsuario();
    }

})


// 3. Funciones de validación

function nombreValido(){
    return (nombre.value.length<=25 && nombre.value!="");
}

function validarEmail(){
    return (email.includes("@") && email.includes("."));
  }

function validacionExitosa(){
    return nombreValido() &&
    emailValido() 
}



// 4. Función de alerta

function alertarUsuario(){
    
        if(nombreValido() == false){
            inputNombre.classList.add("campo-invalido")
            parrafoAlertaNombre.innerText = "Por favor, ingrese un nombre válido";
        } else{
            inputNombre.classList.remove("campo-invalido")
            parrafoAlertaNombre.innerText = "";
        }if(emailValido() == false){
        inputEmail.classList.add("campo-invalido")
        parrafoAlertaEmail.innerText = "Por favor, ingrese un email válido";
    } else{
        inputEmail.classList.remove("campo-invalido")
        parrafoAlertaEmail.innerText = "";
    }
}


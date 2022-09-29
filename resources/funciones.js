function validar(){
    todoOK = true;

    if(!validarNombreVacio()) todoOK = false;
    if(!validarApellidoVacio()) todoOK = false;
    if(!validarTelefonoErroneo()) todoOK = false;
    if(!validarCorreoVacio()) todoOK = false;
    if(!validarPassErroneo()) todoOK = false;
    if(!validarPassDistinto()) todoOK = false;
    if(!validarTerm()) todoOK = false;

    if(todoOK){
        document.miformulario.action = "https://www.solotodo.cl/";
        document.miformulario.submit();
        return true;
    }
    return false;
}

function validarPerritos(){
    todoOK = true;
    if(!validarNombreVacio()) todoOK = false;
    if(!validarCodigoVacio()) todoOK = false;
    if(!validarMasterDog()) todoOK = false;

    if(todoOK){
        document.miformulario.action = "https://www.masterdog.cl";
        document.miformulario.submit();
        return true;
    }
    return false;

}

function validarGatitos(){
    todoOK = true;
    if(!validarNombreVacio()) todoOK = false;
    if(!validarCodigoVacio()) todoOK = false;
    if(!validarMasterCat()) todoOK = false;

    if(todoOK){
        document.miformulario.action = "https://www.mastercat.cl";
        document.miformulario.submit();
        return true;
    }
    return false;


}

function cambiarColor(id, color){
    el = document.getElementById(id);
    el.classList.remove('rojo');
    el.classList.remove('verde');
    el.classList.add(color);
}

function validarNombreVacio(){
    inputNombre = document.miformulario.campo_nombre;
    if(inputNombre.value.trim().length == 0){
        cambiarColor('ok01', 'rojo');
        return false;
    }
    cambiarColor('ok01', 'verde');
    return true;
}



function validarApellidoVacio(){
    inputApellido = document.miformulario.campo_apellido;
    if(inputApellido.value.trim().length == 0){
        cambiarColor('ok02', 'rojo');
        return false;
    }
    cambiarColor('ok02','verde');
    return true;
}

function validarTelefonoErroneo(){
    inputTelefono = document.miformulario.campo_telefono;
    if(inputTelefono.value.trim().length != 9){
        cambiarColor('ok03', 'rojo');
        return false;
    }
    cambiarColor('ok03', 'verde');
    return true;
}

function validarCorreoVacio(){
    inputCorreo = document.miformulario.campo_correo;
    if(inputCorreo.value.trim().length == 0){
        cambiarColor('ok04', 'rojo');
        return false;
    }
    cambiarColor('ok04', 'verde');
    return true;
}

function validarPassErroneo(){
    inputPass = document.miformulario.campo_contrasena;
    if(inputPass.value.trim().length >=8 && inputPass.value.trim().length <= 24){
        cambiarColor('ok05', 'verde');
        document.miformulario.campo_contrasena.focus();
        return true;
    }
    cambiarColor('ok05', 'rojo');
    return false;
}

function validarPassDistinto(){
    inputPass1 = document.miformulario.campo_contrasena;
    inputPass2 = document.miformulario.campo_repcontrasena;
    if(inputPass1.value.trim() == inputPass2.value.trim()){
        cambiarColor('ok06', 'verde');
        return true;
    }
    cambiarColor('ok06', 'rojo');
    return false;
}

function validarTerm(){
    id = "ok07";
    if(document.miformulario.check_terminos.checked == true){
        cambiarColor(id, 'verde');
        return true;
    }
    
    cambiarColor(id, 'rojo');
    return false;

}

function validarCodigoVacio(){
    inputCodigo = document.miformulario.campo_codigo;
    if(inputCodigo.value.trim().length == 0){
        cambiarColor('ok02', 'rojo');
        return false;
    }
    cambiarColor('ok02', 'verde');
    return true;
}

function validarMasterDog(){
    tempNombre = "Master Dog";
    inputNombre = document.miformulario.campo_nombre;
    if(inputNombre.value == tempNombre){
        cambiarColor('ok05','verde');
        return true;
    }
    cambiarColor('ok03', 'rojo');
    return false;

}

function validarMasterCat(){
    tempNombre = "Master Cat";
    if(inputNombre.value == tempNombre){
        cambiarColor('ok05','verde');
        return true;
    }
    cambiarColor('ok03', 'rojo');
    return false;
}
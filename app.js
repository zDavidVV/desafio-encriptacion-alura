const codigo = {
    e:  'enter',
    i:  'imes',
    a:  'ai',
    o:  'ober',
    u:  'ufat'
}
const codigoInverso = {
    e:  5,
    i:  4,
    a:  2,
    o:  4,
    u:  4
    
}

function encriptar(){
    let mensaje = document.getElementById("textomensaje").value;
    let mensajeEncriptado = '';
    if(mensaje == ''){
        return alert('No se ha agregado ningun mensaje');  
    }
    for (let i = 0; i < mensaje.length; i++) {
        if(codigo[mensaje[i]] != undefined){
            mensajeEncriptado = mensajeEncriptado + codigo[mensaje[i]];
        }else{
            mensajeEncriptado = mensajeEncriptado + mensaje[i];
        }
    }
    
    document.getElementById('botonCopiar').removeAttribute('hidden')
    document.getElementById('mensajeContenido').innerHTML=mensajeEncriptado.toString();
    
    console.log(mensajeEncriptado);
}

function desencriptar(){
    let mensaje = document.getElementById("textomensaje").value.toString();
    let mensajeDesencriptado = '';
    if(mensaje == ''){
        return alert('No se ha agregado ningun mensaje');  
    }
    for (let i = 0; i < mensaje.length; i++) {
        if(codigoInverso[mensaje[i]] != undefined){
            mensajeDesencriptado = mensajeDesencriptado + mensaje[i];
            i=i+(codigoInverso[mensaje[i]]-1);
        }else{
            mensajeDesencriptado = mensajeDesencriptado + mensaje[i];
        }
    }
    document.getElementById('botonCopiar').removeAttribute('hidden')
    document.getElementById('mensajeContenido').innerHTML=mensajeDesencriptado.toString();

    console.log(mensajeDesencriptado)
}
    

function copiarTexto(){
    let texto = document.getElementById('mensajeContenido').innerText;
    navigator.clipboard.writeText(texto);
}
function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto.toLowerCase()
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./Assets/Muñeco.png";
    } else {
      muñeco.src = "./Assets/Muñeco.png";
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Oh no!","Debes ingresar algún texto", "warning");
    }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto.toLowerCase()
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./Assets/Muñeco.png";
    } else {
      muñeco.src = "./Assets/Muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Oh no!","Debes ingresar algún texto", "warning");
    }
}

// function validacion() {
//   const texto = document.getElementById("texto").value;

//   if (textoCifrado === "") {
//     return true;
//   }

//   const validacion = /^[a-z\s]+$/g.test(textoCifrado);

//   if (!validacion) {
//     alert("No se aceptan mayúsculas ni caracteres especiales.");
//     return false;
//   }
//   return true;
// }

// Hemos omitido los acentos en los comentarios por compatibilidad

function validar(formulario) {
  console.log("formulario: ", formulario);

  const nombres = formulario[0].value;
  const email = formulario[1].value;
  const password = formulario[2].value;
  const confirmacion = formulario[3].value;
  const tipoUsuario = formulario[4].selectedIndex;
  const tyc = formulario[5].checked;
  
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(
      nombres.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmacion.length === 0 ||
      tipoUsuario === 0 ||
      !tyc
    ) {
      alert("Por favor complete todos los campos.");
    } else if (
      password !== confirmacion
    ) {
      alert("Las contraseñas no coinciden.");
    } else if (
      password.length < 7 || confirmacion.length < 7
    ) {
      alert("La contraseña debe tener al menos 7 caracteres.");
    } else if (
      !regex.test(String(email).toLowerCase())
    ) {
      alert("Email incorrecto.");    
    } else {
      alert("Registro exitoso!");
    }

  //Expresion regular del correo

  

}

const API_URL = 'https://proyecto-5pxj.vercel.app/api/users';
const resultado = document.getElementById('resul');

function cargar(resultado){
  alert("Cargando datos de la API...");
  let transformado = JSON.parse(resultado);
  var salida="";
  var elemento="";

  for (let vc in transformado){
    elemento = "ID: " + transformado[vc].id;
    elemento = elemento + "<br>Nombres: " + transformado[vc].name;
    elemento = elemento + "<br>Correo electrónico: " + transformado[vc].email;
    salida = salida + elemento + "<br><br>";
  }
  resultado.innerHTML = salida;
}

function obtenerDatos(){
    alert("Obteniendo datos de la API...");
  event.preventDefault();
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  fetch(API_URL, requestOptions)
    .then((response) => 
      response.text())
    .then((result) => 
      cargar(result))
    .catch((error) => 
      console.error(error));

}
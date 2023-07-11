//recordar que los objetos js no son los mismos a un json

const usuario = {
  name: "juan",
  apellido: "alvarez",
  edad: 21,
  hobbis: ["correr", "codificar", "comer"],
  direccion: {
    calle: "los chañaritos",
    ciudad: "lastenia",
  },
  estadoCivil: true,
  saludar() {
    return "hello";
  },
};

/* console.log(usuario.saludar())
console.log(usuario)
console.log(JSON.stringify(usuario))
//JSON.stringify(usuario) esto es pra convertir en json

console.log(usuario.name)
console.log(usuario.edad)
console.log(usuario.hobbis) */

const amigos = [
  { nombre: "jose", apodo: "josecito" },
  { nombre: "chelo", apodo: "chelito" },
  { nombre: "luna", apodo: "sol" },
];

usuario.amigos = amigos;
console.log(JSON.stringify(usuario));

let output = "";

for (let i = 0; i < amigos.length; i++) {
  output = output + `<li>${amigos[i].nombre}</li>`;
}


document.getElementById("personas").innerHTML = output;

//esto es para probar github nief


const obtenerPeliculas= async()=>{
    //va a hacer la peticion va a esperar que termine y la va a guardar en respuesta y solamente cuando acabo va a pasra a la sig linea
try{
    const respuesta= await  axios.get('https://api.themoviedb.org/3/movie/popular',{
        params:{
       /*    api_key:'7b1bea8a8b7b5549e54f53a33459d4ea' , */
          language:'es-ES'
        },
        headers:{
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjFiZWE4YThiN2I1NTQ5ZTU0ZjUzYTMzNDU5ZDRlYSIsInN1YiI6IjY0OTQ5Y2I2ODgwNTUxMDEyNTk4MDk3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Er_-fjTpCjzI2ZqNxqUxrAKei1YcO-TZp6EO4q364uQ'
        }
    })
    console.log(respuesta) 


}catch(error){
console.log(error)
}



}
obtenerPeliculas()



/* .then((respuesta)=>{
    console.log(respuesta.data.results[1].title)
})

.catch((error)=>{
    console.log(error)

}) */


//en metodo then() nos devuelve una promesa osea que nos devuelve algo despues de que el servidor alla cargado la peticon

//respuesta  es la res que nos devuelve la peticion
//cuando trabajamos con axios usamos data para ver el objeto

//results es una propiedad de la respuesta la encontamos en el objeto(navegador)
//accedemos [1]a la pelicula uon del array y a su propiedad title
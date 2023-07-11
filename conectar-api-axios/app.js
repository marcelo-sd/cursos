


let pagina = 1;
let peliculas = '';
let ultimaPelicula;

// Creamos el observador
let observador = new IntersectionObserver((entradas, observador) => {
	console.log(entradas);

	entradas.forEach(entrada => {
		if(entrada.isIntersecting){
			pagina++;
			cargarPeliculas();
		}
	});
}, {
	rootMargin: '0px 0px 200px 0px',
	threshold: 1.0
});


const cargarPeliculas = async() => {
	try {
        const respuesta= await  axios.get('https://api.themoviedb.org/3/movie/popular',{
            params:{
           /*    api_key:'7b1bea8a8b7b5549e54f53a33459d4ea' , */
              language:'es-ES'
            },
            headers:{
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjFiZWE4YThiN2I1NTQ5ZTU0ZjUzYTMzNDU5ZDRlYSIsInN1YiI6IjY0OTQ5Y2I2ODgwNTUxMDEyNTk4MDk3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Er_-fjTpCjzI2ZqNxqUxrAKei1YcO-TZp6EO4q364uQ'
            }
        })

		// const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
	
		// console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			respuesta.data.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			document.getElementById('contenedor').innerHTML = peliculas;

			if(pagina < 1000){
				if(ultimaPelicula){
					observador.unobserve(ultimaPelicula);
				}
	
				const peliculasEnPantalla = document.querySelectorAll('.contenedor .pelicula');
				ultimaPelicula = peliculasEnPantalla[peliculasEnPantalla.length - 1];
				observador.observe(ultimaPelicula);
			}

		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

cargarPeliculas();

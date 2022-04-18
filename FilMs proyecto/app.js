printMoviesList();

function printMoviesList() {
    fetch ('http://localhost:8080/movies')
    .then ((respuesta) => { // Parsear la respuesta a JSON
        return respuesta.json();
    })
    .then ((moviesData) => {

        // Donde quiero imprimir los títulos en el HTML
        let moviesListElement = document.getElementById('moviesList');

        for(let i = 0; i < moviesData.length; i++) {
            // Dentro del UL, en que elemento HTML quiero imprimir los datos
            let nuevoElementoHtml = `
            <div class="movie">
            <p style="color: white;">${moviesData[i].title}</p>
            </div>
            `
            // Que quiero escribir dentro del elemento LI
            //nuevoElementoHtml.innerHTML = moviesData[i].title;
            // Añadir el LI al UL
            moviesListElement.innerHTML += nuevoElementoHtml;
        }
    });

}
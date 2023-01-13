window.addEventListener('load', function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    // let modo = confirm('Desea modo oscuro');

    const $ = (e) => document.querySelector(e);

    let logo = $('figure');

    logo.addEventListener('mouseover', () => {
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })
    // if(modo){
    //     body.style.backgroundColor = '#7f7f7f'
    //     body.classList.add('fondoMoviesList');
    // }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

})
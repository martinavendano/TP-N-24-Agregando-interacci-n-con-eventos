window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'red';
    })
    titulo.addEventListener('mouseleave', () => {
        titulo.style.color = 'black';
    })

    let inputTitulo = document.querySelector('#titulo');


    let palabraSecreta = "secreto";
    let palabra = [];
    
    let estadoSecreto = 0;

    inputTitulo.addEventListener('keypress', (e) => {
        let letra = e.key;
        palabra.push(letra.toLowerCase());

    if (palabra[0] !== 's'){
           estadoSecreto = 0
           palabra = []
    } else {
        estadoSecreto = palabra.length
        for (let i = 1; i < palabra.length; i++) {
            if (palabraSecreta[i] === palabra[i]) {
                estadoSecreto = palabra.length;
            }else{
                palabra = [];
                estadoSecreto = 0;
            }
        }
    }

    

    if (estadoSecreto === 7 && palabra.join('') === 'secreto') {
        alert('SECRETO MAGICO');
    }

    console.log('el estado es ' + estadoSecreto + ' ' + letra);
})


}
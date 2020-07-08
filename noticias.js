const listaNoticias = document.getElementById('contenidoNoticias');

// IIFE: se ejecutan sin llamarlas
(function(tecnologia){
    var noticias = [
        {
            title: 'Hallowen',
            time: 'DD/MM/AA - Hora',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            imgExtra1: '',
            imgExtra2: '',
            imgExtra3: ''
        },
        {
            title: 'Navidad',
            time: 'DD/MM/AA - Hora',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            imgExtra1: '',
            imgExtra2: '',
            imgExtra3: ''
        },
        {
            title: 'Hallowen',
            time: 'DD/MM/AA - Hora',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            imgExtra1: '',
            imgExtra2: '',
            imgExtra3: ''
        },
        {
            title: 'Hallowen',
            time: 'DD/MM/AA - Hora',
            img: '',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
            imgExtra1: '',
            imgExtra2: '',
            imgExtra3: ''
        },
    ];
    
    noticias.forEach(function(noticia, index){
        const divPart = document.createElement('div');
        divPart.innerHTML = `
            <div class="noticia-container">
                <div class="noticias-head">
                    <div class="noticias-date">
                        <img class="badge" src="image/exampleLogo.png">
                        <p class="data">${noticia.time}</p>
                    </div>
                    <div class="noticias-title">
                        <h2>${noticia.title}</h2>
                    </div>
                </div>
                <div class="noticias-contenido">
                    <div class="principal-img">
                        <img src="image/example.png">
                    </div>
                    <div class="noticias-texto">
                        <p>${noticia.description}</p>
                        <a href="#">Ver mas</a>
                    </div>
                </div>
            </div>
        `;
        listaNoticias.appendChild(divPart);
    });
})();
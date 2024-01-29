/*function buscarVideos() {
    alert('Hola js');
    
}*/


/*function buscarVideos() {
    // Obtener el elemento de entrada de texto con el id 'txtBuscar'
    var input = document.getElementById('txtBuscar');

    // Obtener el valor del texto ingresado, eliminar espacios en blanco y convertir a minúsculas
    var filter = input.value.trim().toLowerCase();

    // Obtener todos los elementos con la clase 'row' dentro del elemento con el id 'videoList'
    var videos = document.getElementById('videoList').getElementsByClassName('row');

    // Iterar sobre todos los elementos con la clase 'row'
    for (var i = 0; i < videos.length; i++) {
        // Obtener el valor del atributo 'title' de cada elemento y convertir a minúsculas
        var title = videos[i].getAttribute('title').toLowerCase();

        // Verificar si el valor del atributo 'title' incluye el texto ingresado
        if (title.includes(filter)) {
            // Si incluye, mostrar el elemento
            videos[i].style.display = '';
        } else {
            // Si no incluye, ocultar el elemento
            videos[i].style.display = 'none';
        }
    }
}
*/
function buscarVideos(){
    //Crear un arreglo
    //buscar para aserlo de manera dinamicamente
    //alert('Hola js');
    //Declarrar una variable para extraer lo de la caja de buscar
    var txtFiltroVideos=document.getElementById('txtBuscar').value; 
    var videosBuscados= videos.filter(elemento => 
        elemento.titulo.includes(txtFiltroVideos)
        );
        mostrarVideos(videosBuscados);
}

var videos =[
    {titulo:"Video 1", descripcion:"descripcion video 1" , url:"https://www.youtube.com/embed/xKx15C7BDyA?si=UmSml2NrBJKK3vwQ"},
    {titulo:"Video 2", descripcion:"descripcion video 2" , url:"https://www.youtube.com/embed/RxXYaWetI4I?si=G_wt0JX056c-QCmo"},
    {titulo:"Video 3", descripcion:"descripcion video 3" , url:"https://www.youtube.com/embed/amrfYSxoFBg?si=4aGk0dd7JoLIsmGO"},
    {titulo:"Video 4", descripcion:"descripcion video 4" , url:"https://www.youtube.com/embed/iIyoWWiMDC4?si=LwxHcioapRKSbRAm"}

];

//manda a llamarf el id deeswde el index para realizar las acciones
var ListaVideos=document.getElementById('idListaVideos');
mostrarVideos(videos);

function mostrarVideos(videosMostrados) {
    ListaVideos.innerHTML='';
    //recorrer el arreglo
    videosMostrados.forEach(element => {
        var fila=document.createElement('div');
        var col1UrlVideo=document.createElement('div');
        var iframeUrlVideo=document.createElement('iframe');

        
        fila.setAttribute("class","row");//se agrega el atributo class y row a la etiqueta fila
        col1UrlVideo.setAttribute("class","col");
        iframeUrlVideo.setAttribute("width","560");
        iframeUrlVideo.setAttribute("height","315");
        iframeUrlVideo.setAttribute("src",element.url);//propiedad del elemento es decir el primer video copn indice 0
        iframeUrlVideo.setAttribute("title","YouTube video player");
        iframeUrlVideo.setAttribute("frameborder","0");
        iframeUrlVideo.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
        iframeUrlVideo.setAttribute("allowfullscreen","");
        col1UrlVideo.appendChild(iframeUrlVideo);
        fila.appendChild(col1UrlVideo);
       

        //Para el titulo y descripcion de los videos
        var col2NombreVideo=document.createElement('div');
        var h4Titulo=document.createElement('h4');
        var h6Descipcion=document.createElement('h6');

        col2NombreVideo.setAttribute("class","col");
        h4Titulo.textContent=element.titulo; //extraer el titulo del video
        h6Descipcion.textContent=element.descripcion;//extraer la descriupcion

        //agregar los elementos a la columna
        col2NombreVideo.appendChild(h4Titulo);
        col2NombreVideo.appendChild(h6Descipcion);
        fila.appendChild(col2NombreVideo);
        
       

        //Para el boton de los videos

        var col3Nombrevideo=document.createElement('div');
        var boton=document.createElement('button');
        //document.createElementNS
        //Requiere dos argumentos: el URI del espacio de nombres y el nombre del elemento.
        //svg o xml

        var svg=document.createElementNS("http://www.w3.org/2000/svg",'svg');
        var path=document.createElementNS("http://www.w3.org/2000/svg",'path'); 
    

        col3Nombrevideo.setAttribute("class","col");
        boton.setAttribute("class","btn btn-outline-primary");
        svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
        svg.setAttribute("width","16");
        svg.setAttribute("height","16");
        svg.setAttribute("fill","currentColor");
        svg.setAttribute("class","bi bi-heart");
        svg.setAttribute("viewBox","0 0 16 16");
        path.setAttribute("d","m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15");
        svg.appendChild(path);
        boton.appendChild(svg);
        col3Nombrevideo.appendChild(boton);;
        fila.appendChild(col3Nombrevideo);
        ListaVideos.appendChild(fila);
       

        
    });

}

//Funcion para filtrar videos basados en la busqueda



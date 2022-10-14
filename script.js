function ListArtists(lista){

    let text = "<ul>";
    for (let i = 0; i < lista.length; i++) {
      text += "<li>" + lista[i] + "</li>";
    }
    text += "</ul>";
    
    return text
    }
    
    let listado = ["artista1", "artista2", "artista3", "artista4", "artista5","artista6","artista7"];
    document.write(ListArtists(listado))
    

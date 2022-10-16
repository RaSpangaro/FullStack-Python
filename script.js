function ListArtists(lista){

    let text = "<ul>";
    for (let i = 0; i < lista.length; i++) {
      text += "<li>" + lista[i] + "</li>";
    }
    text += "</ul>";
    
    return text
    }
    
    let listado = ["Miguel García", "Mariano Villasante", "Nicolás Lapine", "Rey Gurú", "Attomo","Leandro Guido","Peyo Campoliete","Zequi Lassalle"];
    document.write(ListArtists(listado))
    

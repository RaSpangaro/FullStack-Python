
const ultimosLanzamientos = [
{
    disco:"Universo Paralelo",
    tapa: "/estilos/imagenes/MiguelGarciaUniversoParalelo.png",
    artista: "Miguel Garcia",
    descripcion: "Segundo Ep del músico de Zona Sur, esta vez bajo la producción de Facu Fiorentino."
},
{
    disco:"Lado A",
    tapa:"/estilos/imagenes/ZequiLassalleLadoA.png",
    artista: "Zequi Lasalle",
    descripcion: " Primera producción en castellano de Zequi Lassalle luego de varios proyectos en inglés. Contó con la producción de Misael Hilal y el Mastering por Edu Bergallo."
},
{
    disco:"Superficie 1 (Remix)",
    tapa: "/estilos/imagenes/NicolasLapineSuperficie1.png",
    artista: "Nicolas Lapine - Julio Baca Paunero",
    descripcion: "Primera colaboración entre los dos artistas. La canción original se grabó de manera muy íntima con guitarra y voz y esta versión nos lleva a explorar el universo de los sintetizadores y máquinas de ritmo."
},
{
    disco:"Quijote",
    tapa: "/estilos/imagenes/MarianoVillasanteQuijote.png",
    artista: "Mariano Villasante",
    descripcion: "Un nuevo single de Mariano Villasante luego de su disco solista, esta vez acompañado en producción por Christian Gutierrez. Participan en este single Miguel García en voces y guitarrras y Julio Baca Paunero en teclados y programaciones."
},
];



//------------------------RENDERIZAR ALBUMS EN PORTFOLIO-----------------------------//

const trabajos = document.querySelector(".grabaciones");

trabajos.innerHTML = ''
ultimosLanzamientos.forEach(element => {
    trabajos.innerHTML +=`
<div class="discos">
    <h4 class="nombreDisco" >${element.disco}</h4>
    <img src=${element.tapa} alt=${element.disco}>
    <span class="nombreArtista" >${element.artista}</span>
    <p class="info">${element.descripcion}</p>
</div>`
});



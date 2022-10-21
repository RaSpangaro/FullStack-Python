
//------------------------------RENDERIZAR SECCION QUIENES SOMOS---------------------//


const miembros=[
    {
        nombre: "Julio Baca Paunero",
        foto:"/estilos/imagenes/Julio.jpeg",
        sobreMi:"Tecladista, guitarrista y profesor de música",
    },
    {
        nombre: "Natalia Jimenez",
        foto:"/estilos/imagenes/Nataly.jpg",
        sobreMi:"Ing. en Petróleos, apasionada por la música y jugadora de fútbol", 
    },
    {
        nombre: "Raquel Spangaro",
        foto:"/estilos/imagenes/Raquel.png",
        sobreMi:"Tecnica en Turismo, estudiante de sistemas y apasionada por el diseño y el arte", 
    }
    ]


const grupo = document.querySelector(".equipo");

grupo.innerHTML = ''
miembros.forEach(element => {
    grupo.innerHTML +=`
<div class="miembro">
    <div class="circulo"><img src=${element.foto} alt=${element.nombre}></div>
    <h4 class="nombre" >${element.nombre}</h4>
    <span class="sobreMi" >${element.sobreMi}</span>
</div>`
});
// 1. Recorrer el array de usuarios y por cada usuario
// crear una card con sus datos 

// 2. Manejar sistema de likes para que cada clic en cada 
// foto de usuario le de likes solo a ese usuario. 

const usuarios = [
  {
      nombre: "Pepita Gomez",
      descripcion: "Maquetadora",
      foto: "img/foto.jpeg"
  },
  {
      nombre: "Mariquita Thompson",
      descripcion: "Cantante de himno",
      foto: "img/foto.jpeg"
  },
  {
      nombre: "Pancracia Williams",
      descripcion: "Tenista",
      foto: "img/foto.jpeg"
  },
  {
      nombre: "Trufa Rodriguez Larreta",
      descripcion: "Cantante de feliz cumpleanos",
      foto: "img/foto.jpeg"
  },
]

let cards = ""
for (let i = 0; i < usuarios.length; i++) {
  cards += `<article class="card">
<div class="imagen">
  <img src="https://placekeanu.com/400" alt="">
</div>

<div class="informacion">
<h2> ${usuarios[i].nombre} </h2>
<p id="descripcion">${usuarios[i].descripcion}</p>
<p><i class="fa fa-heart"></i> <span id="likes">0</span> likes</p>
</div>
</article>`
}

let contenedor = document.getElementsByTagName("section")
const contenedorCero = contenedor[0]
console.log(contenedorCero)

contenedorCero.innerHTML = cards




const imagen = document.querySelectorAll(".imagen")
const corazon = document.querySelectorAll(".fa.fa-heart")
const likes = document.querySelectorAll("#likes")
for (let i = 0; i < usuarios.length; i++) {

  imagen[i].onclick = () => {
      corazon[i].classList.add("rojo")
      let cantidadDeLikes = Number(likes[i].textContent)
      cantidadDeLikes++
      likes[i].textContent = cantidadDeLikes
  }

  corazon.onclick = () => {
      if (likes[i].textContent > "0") {
          let cantidadDeLikes = Number(likes[i].textContent)
          cantidadDeLikes--
          likes.textContent = cantidadDeLikes
      }
      console.log(likes[i].textContent)
      if (likes[i].textContent === "0") {
          corazon.classList.remove("rojo")
      }
      else {
          corazon.classList.add("rojo")
      }

  }
}
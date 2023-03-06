export function App () {
  const htmlDom= document.getElementById("app")
  htmlDom.innerHTML = "<h1>Pagina</h1><button>Boton</button>"

  const container = document.createElement("main")
  container.classList.add("container")
  container.innerHTML = "texto"
  htmlDom.appendChild(container)
}
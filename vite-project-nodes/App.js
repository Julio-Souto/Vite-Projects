import layout from "./layout.html/?raw"

export function App () {
  const htmlDom= document.getElementById("app")
  htmlDom.innerHTML = "<h1>Pagina</h1><button>Boton</button>"

  const container = document.createElement("main")
  if(!container) throw new Error("Error")
  container.classList.add("container")
  container.innerHTML = "texto"
  container.innerHTML = layout
  htmlDom.appendChild(container)
}
import ListaDeCompras from "../components/listaDeCompras"
import { listaComum, listaFrutas } from "../data/listaData"



function page() {
  return (
    <>
      <h1>MERCADO</h1>
      <p>Lista de itens gerais</p>
      <ListaDeCompras itens={listaComum} />
      <p>Lista de Furutas</p>
      <ListaDeCompras itens={listaFrutas} />
    </>
  )
}
export default page

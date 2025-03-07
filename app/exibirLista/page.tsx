import { listaData } from "@/data/listaData";
import Link from "next/link";
function exibirLista(){
    return(
        <>
          <h1>Lista de Produtos em Tabela</h1>
          <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Detalhes</th>
                </tr>
            </thead>
            <tbody>
                {listaData.map(function(itens){
                    return(
                        <tr key={itens.id}>
                            <td>{itens.id}</td>
                            <td>{itens.nome}</td>
                            <td>
                                <Link href={'/detalhesProdutos/' + itens.id}>Ver Detalhes</Link>
                            </td>
                        </tr>
                    )
                })}
                <tr>
                    <td>1</td>
                    <td>Arroz</td>
                    <td>Link</td>
                </tr>
            </tbody>
          </table>
        </>
    )
}
export default exibirLista;
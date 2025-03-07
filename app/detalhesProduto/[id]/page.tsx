//app /detalhesProduto/[id]/page.txt
import { listaData } from "@/data/listaData";  // Certifique-se de usar a capitalização correta.
type detalhesProdutoProps = {
    params: {
        id: string;
    }
}
function detalhesProduto(props: detalhesProdutoProps) {
    const produtoID = parseInt(props.params.id);
    const produto = listaData.find(function (item) {
        return item.id === produtoID;
    });
    return (
        <>
            <h2>DETALHES DO PRODUTO</h2>
            <p>ID:{produto?.id}</p>
            <p>Nome:{produto?.nome}</p>
            <p>quantidade:{produto?.quantidade}</p>
        </>
    )
}
export default detalhesProduto;
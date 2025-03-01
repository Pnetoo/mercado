//criar  dentro da pasta de components

import { itens } from "../data/listaData";

//PROPS
//definimos o formato da interface de props, com o components lisaDeCompras
//lista de itens(array de itens)
type listaDeComprasProps = {
    itens: itens[]; //itens será um array do objeto do tipo 'Item'
}

function listaDeCompras(props: listaDeComprasProps) {
    return (
        <>
            <h1>Lista de Compras</h1>
            {props.itens.map(function (Item) {
                return (
                    <div key={Item.id}>
                        <p>Produto:{Item.nome}</p>
                        <p>Quantidade:{Item.quantidade}</p>
                        <hr />
                    </div>

                )
            })}
        </>
    )
};
export default listaDeCompras;
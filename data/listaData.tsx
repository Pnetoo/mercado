//Definir os items e conteúdos

//Definir type

export type itens = {
    id: number, //identificador unico produto
    nome: string;
    quantidade: number;
};

export const listaData: itens[] = [
    { id: 1, nome: 'Arroz', quantidade: 2 },
    { id: 2, nome: 'Arroz', quantidade: 2 },
    { id: 3, nome: 'Arroz', quantidade: 2 },
    { id: 4, nome: 'Arroz', quantidade: 2 },
    { id: 5, nome: 'Arroz', quantidade: 2 }
]
export const listaFrutas: itens[] = [
    { id: 1, nome: 'Melancia', quantidade: 2 },
    { id: 2, nome: 'Melancia', quantidade: 2 },
    { id: 3, nome: 'Melancia', quantidade: 2 },
]
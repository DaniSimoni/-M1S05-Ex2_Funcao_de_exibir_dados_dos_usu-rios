/* Dada a seguinte lista, de forma decrescente, retorne os dados das 2 listas de forma agrupada, pela seguinte ordem.

usuarios - Crescente: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria']

frutas - Descrescente:[ “Banana”, “Morango”, “Maçã”, “Uva”, “Pêra” , “Laranja“]

Resultado esperado: ['Pedro - Laranja', ‘José - Pêra’, 'Aderbal - Uva', 'Danilo - Maçã', 'Luisa - Morango', 'Vitoria - Banana' ] */


function lista() {
    const usuariosCrescente = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
    const frutasDecrescente = [ 'Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja']
    const listaNova = []

    
    for (let i = 0; i < usuariosCrescente.length; i++) {
        listaNova.push(usuariosCrescente[i] + ' - ' + frutasDecrescente[frutasDecrescente.length - 1 - i])
    }

        console.log(listaNova)

}
    lista()




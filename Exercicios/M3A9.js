/* 
    Exercícios:

    1. Crie uma função chamada imprimir que recebe um argumento e simplesmente imprime ele na tela;
    
    2. Lembra dos exercícios que propusemos na Aula 05 - Variáveis? Com base neles, faça o seguinte:
        Crie uma função para cada algoritmo proposto lá, exceto o número 6;
        Todas as funções devem retornar o valor final;
        Procure dar nomes que façam sentido às funções. Ex.: a função para o item 4 poderia se chamar mediaAritmetica ou calcularMediaAritmetica;
        Procure utilizar comentários para documentar cada método;
        Na função da média aritmética, evite colocar todos os itens como argumentos do método, pois isso limitaria sua utilização a um número fixo de elementos. Tente implementar uma lógica para receber um array e calcular a média em cima dele, tornando a função mais reaproveitável em diferentes situações.
    
    3. Com as funções criadas, execute todo código abaixo e verifique se os resultados são os esperados (o resultado esperado de cada função está no comentário ao lado da chamada):

*/

console.log("Exercício 1:")
x = "Teste Positivo"

function imprimir(x) {
     console.log(x)
  }
 
imprimir(x)

console.log("\n")
console.log("\n")

console.log("Exercício 2:")
console.log("Teste Nomes Iguals")
function mesmoNome(nome1,nome2) {
    if (nome1 == nome2){
        return "Os nomes são iguais."
    
    } else return ("Os nomes são diferentes")
 }
 console.log("Teste 1:", mesmoNome("x","x"), "-- Resultado Esperado: 'Os nomes são iguais.' ")
 console.log("Teste 2:", mesmoNome("x","y"), "-- Resultado Esperado: 'Os nomes são diferentes.' ")
 console.log("\n")

 console.log("Teste Maioridade")
 let idade
 function maiorDeIdade(idade){
    if (idade >= 18) {
        return "Maior de Idade"
    } else return "Menor de Idade"
 }
 console.log("Teste 1:", maiorDeIdade(17), "-- Resultado Esperado: 'Menor de Idade' ")
 console.log("Teste 2:", maiorDeIdade(18), "-- Resultado Esperado: 'Maior de Idade' ")
 console.log("Teste 3:", maiorDeIdade(19), "-- Resultado Esperado: 'Maior de Idade' ")
 console.log("\n")

 console.log("Teste Boleto com Juros")
 let boleto
 function valorComJuros(boleto){
    return boleto + boleto*0.1
 }
 console.log("Teste 1:", valorComJuros(100), "-- Resultado Esperado: '110' ")
 console.log("Teste 2:", valorComJuros(1000), "-- Resultado Esperado: '1100' ")
 console.log("\n")

 console.log("Teste Média Aritmética")
 let item
 function mediaAritmetica(item) {
    soma = 0
    for (i=0; i < item.length; i++){
        soma = soma + item[i]
    }
    return soma/item.length
 } 
 console.log("Teste 1:", mediaAritmetica(1,2,3,4,5), "-- Resultado Esperado: '3' ")
 console.log("Teste 2:", mediaAritmetica(5,5,5,5,5), "-- Resultado Esperado: '5' ")
 console.log("\n")

 console.log("Teste MargemBruta")
 function margemBruta(receitaLiquida,custos){
    lucroBruto = receitaLiquida - custos
    return (lucroBruto/receitaLiquida)*100
 }
 console.log("Teste 1:", margemBruta(100,50), "-- Resultado Esperado: '50%' ")
 console.log("Teste 2:", margemBruta(200,50), "-- Resultado Esperado: '75%' ")
 console.log("\n")
 console.log("\n")
 
 console.log("Exercício 3:")
 cwi = "CWI"
 reset = "Reset"
 imprimir(mesmoNome(cwi, cwi))   // true
 imprimir(mesmoNome(cwi, reset)) // false
 
 imprimir("---")
 
 imprimir(maiorDeIdade(30)) // true
 imprimir(maiorDeIdade(18)) // true
 imprimir(maiorDeIdade(5))  // false
 
 imprimir("---")
 
 imprimir(valorComJuros(100))   // 110
 imprimir(valorComJuros(984.5)) // 1082.95
 
 imprimir("---")
 
 imprimir(mediaAritmetica([1]))             // 1
 imprimir(mediaAritmetica([1, 4, 10]))      // 5
 imprimir(mediaAritmetica([1, 2, 3, 4, 5])) // 3
 
 imprimir("---")
 
 imprimir(margemBruta(1000000, 500000))      // 50
 imprimir(margemBruta(528459.11, 632501.87)) // -19.68[...]


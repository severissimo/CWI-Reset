/*
Exercícios:

1) Crie uma variável mesmoNome que verifica se nomeDoFulano é igual a nomeDoBeltrano;

2) Crie uma variável maiorDeIdade que verifica se idade é de um adulto;

3) Crie uma variável valorComJuros que calcula o valor de um boleto acrescido de 10% de juros por atraso;

4) Faça a representação da fórmula de média aritmética, considerando um conjunto de elementos com 5 elementos nomeados como item1, item2, item3, item4 e item5;

5) O lucro bruto de uma empresa é representado pela receita líquida de vendas menos o custo dos produtos vendidos. 
A margem bruta de uma empresa é calculada pela divisão do lucro bruto pela receita líquida de vendas. 
Faça a representação da fórmula da margem bruta, multiplicando o resultado final por 100 para obter o valor percentual;

6) Usando qualquer ferramenta de codificação, crie um algoritmo seguindo os passos abaixo para encontrar o valor do saldo ao final do processo (atente-se para utilizar . como separador decimal):

O saldo da sua conta é R$ 1000,00
Você decide comprar uma calça por R$ 99,90
Você recebe o seu salário de R$ 2500,00
Você está caminhando na rua e decide dar R$ 0,10 para um morador de rua
Você compra um ar condicionado cujo valor é 25% do seu saldo atual
Você decide antecipar o pagamento de uma dívida usando metade do seu saldo
Qual o valor do seu saldo? 🤔

*/

console.log("Exercício :")
nomeDoBeltrano = "x"
nomeDoFulano = "y"
mesmoNome = (nomeDoFulano == nomeDoBeltrano)
if (mesmoNome == false){
    console.log("Os nomes são diferentes.")

} else console.log("Os nomes são iguais")
console.log("\n")
console.log("\n")


console.log("Exercício :")
idade = 16
maiorDeIdade = (idade >= 18)
if (maiorDeIdade == false){
    console.log("Menor de Idade.")

} else console.log("Maior de Idade")
console.log("\n")
console.log("\n")

console.log("Exercício 3:")
boleto = 100
valorComJuros = (boleto + boleto*0.1)
console.log("O valor atualizado do Boleto é: ", valorComJuros)
console.log("\n")
console.log("\n")

console.log("Exercício 4:")
item1 = 0
item2 = 2
item3 = 3
item4 = 4
item5 = 5
media = (item1+item2+item3+item4+item5)/5
console.log("A Média dos Items é:", media)
console.log("\n")
console.log("\n")


console.log("Exercício 5:")

receitaLiquida = 100
custos = 50
lucroBruto = receitaLiquida - custos
margemBruta = lucroBruto/receitaLiquida

console.log("Percentual de Margem Bruta:", margemBruta*100)
console.log("\n")
console.log("\n")



console.log("Exercício 6:")

saldo = 1000.00
calca = 99.90
salario = 2500
doacao = 0.10
arCondicionado = (saldo-calca+salario-doacao)*0.25
divida = ((saldo-calca+salario-doacao)-arCondicionado)/2

saldo = saldo - calca + salario - doacao - arCondicionado - divida
console.log("Saldo:", saldo)
console.log("\n")
console.log("\n")



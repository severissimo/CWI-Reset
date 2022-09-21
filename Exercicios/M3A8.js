/*
Exercícios:

Lembre-se que, para obter o tamanho de um array, é usada a expressão nomeDoArray.length. 

Ex.:
timesDeFutebol = ["Grêmio", "Inter", "Corinthians", "Flamengo"]
quantidadeDeTimes = timesDeFutebol.length
console.log(quantidadeDeTimes)

1. Crie um array de 5 posições com quaisquer valores. Utilize qualquer estrutura de repetição apresentada no vídeo para exibir todos os valores do array;

2. Crie um algoritmo capaz de calcular a média aritmética de um array com qualquer quantidade de elementos numéricos. 
Para fins de exemplo, o resultado do algoritmo com um array de valores 1, 2, 3, 5, 8, 13, 21, 23, 34, 55 deve ser 16.5. 
Procure usar uma estrutura de repetição diferente da que você usou para fazer o exercício anterior;

3. Considerando a lista dos 60 nomes mais comuns no Brasil nos últimos 10 anos, crie um algoritmo para verificar se seu nome está lá. 
Se sim, exiba a mensagem: É, nome comum :P. 
Se não, exiba a mensagem: Diferentão, hein? XD.

nomesComuns =       ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
                    "Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
                    "Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
                    "Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
                    "Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
                    "Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]

*/  

console.log("Exercício 1:")
array1 = [0,2,4,8,16]

for (i=0; i <= 4; i++){
    console.log(array1[i])
}
console.log("\n")
console.log("\n")


console.log("Exercício 2:")
array2 =[1, 2, 3, 5, 8, 13, 21, 23, 34, 55]
soma = 0
i = 0
while (i < array2.length) {
    soma = soma + array2[i]
    i++
}
console.log("A média é:", soma/i)
console.log("\n")
console.log("\n")


console.log("Exercício 3:")
nomesComuns =       ["Miguel", "Laura", "Lucas", "Beatriz", "Guilherme", "Maria", "Gabriel", "Ana", "Arthur", "Júlia", 
                    "Enzo", "Alice", "Rafael", "Mariana", "João", "Larissa", "Gustavo", "Maria Eduarda", "Pedro", "Sofia", 
                    "Bernardo", "Isabela", "Matheus", "Helena", "Davi", "Camila", "Heitor", "Lara", "Henrique", "Valentina", 
                    "Bruno", "Letícia", "Samuel", "Luana", "Felipe", "Amanda", "Lorenzo", "Yasmin", "Benjamin", "Sophia", 
                    "Vinícius", "Rebeca", "Rodrigo", "Juliana", "Eduardo", "Bruna", "Diego", "Cecília", "Antônio", "Fernanda", 
                    "Leonardo", "Isadora", "Noah", "Lorena", "Nícolas", "Lívia", "Daniel", "Manuela", "Thiago", "Vitória"]
nome = "Carlos"
match = false
i = 0

while (i < nomesComuns.length){
    if (nome == nomesComuns[i]){
        i = nomesComuns.length
        match = true
    }
    i++
}
if (match) {
    console.log("É, nome comum :P. ")
} else console.log("Diferentão, hein? XD.")


console.log("\n")
console.log("\n")
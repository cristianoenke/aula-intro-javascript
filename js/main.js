// Variáveis e Strings
var nome = "Cristiano Enke";
var idade = 29;
var idade2 = 10;
var frase = "Eu sou uma frase"
//alert(nome +" tem " +idade +" anos ");

alert(idade+idade2);

console.log(idade+idade2)
console.log(frase)
console.log(frase.replace("sou", "sou ou não sou"))
console.log(frase.toUpperCase())


// Arrays
var lista = ["tomate", "batata", "pepino"]
lista.push("cebola")

console.log(lista)
console.log(lista[0])

lista.pop() //remove o ultimo item da lista
console.log(lista)

console.log(lista.length) //tamanho da lista
console.log(lista.reverse()) //inverte a lista
console.log(lista.toString()) //transforma a lista em string
console.log(lista.join(" - ")) // junta a lista com qualquer separador

// Dicionarios
var fruta ={nome: "quiabo",cor: "verde"}
console.log(fruta)
console.log(fruta.nome)
console.log(fruta.cor)

var frutas =[{nome: "quiabo",cor: "verde"}, {nome:"tomate", cor: "vermelho"}]
console.log(frutas)
console.log(frutas[0].nome)
console.log(frutas[1].cor)

// Condicionais

var idade=prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade")
}
else{
    alert("Menor de idade")
}

// While
var count = 0;
while (count <= 5){
    console.log(count)
    count++;
}

// For
var count;
for (count=0; count <5; count++){
    console.log(count)
}


// Dates
var dt = new Date()
console.log(dt)
console.log(dt.getDay())
console.log(dt.getHours())

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

// Functions
function soma(n1,n2){
    return n1+n2
}

alert(soma(5,10))

// Buttons
function buttn(){
    alert("Good Click!") //This will return an alert
    document.getElementById("click_thx").innerHTML = ("It was a very good click, thank you!")           //This will print on screen
}

function redirecionar(){
    window.open("https://www.google.com/"); // Redirect in new tab
    //window.location.href = "https://www.google.com/" // Redirect same tab
}

function change(element){
    //alert("The text changed!")
    element.innerHTML = ("The text have changed")           //This will print on screen
}

function change_back(element){
    //alert("The text changed!")
    element.innerHTML = ("Pass the mouse over here!")           //This will print on screen
}

function change_fcn(element){
    document.getElementById("selected_val").innerHTML = ("Selected value: "+ element.value)  

}
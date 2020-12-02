
//AULA 1


/*

var nome = "Ednaldo Araújo"

var idade = 40;

alert("Olá "+nome +"\n Sua idade é: "+ idade+" anos!");

var num = 10;

var num1 = 30;

var soma = num + num1;

alert("Valor de num: "+num + "\n\nValor de num1: "+num1);

alert("Imprimindo a soma de num com num1: "+soma);

var frase = "Ednaldo é melhor em Infraestrutura!";

console.log(nome);
console.log(soma);
console.log(num +num );
console.log(frase.replace("Infraestrutura", "Desenvolvimento"));
console.log(frase.toUpperCase());
console.log(frase.replace("Infraestrutura", "Desenvolvimento").toLowerCase());
console.log(frase.replace("Infraestrutura", "Desenvolvimento").toUpperCase());



//Trabalhando com listas - Array
var lista = ["maçã","pêra","laranja"];


//Imprimindo a lista completa
console.log(lista);


//Adicionando ítem
lista.push("uva");


//Imprimindo lista novamente
console.log(lista);


//Imprimindo um ítem da lista
console.log(lista[0]);
console.log(lista[2]);
console.log(lista[3]);


//Removendo ítem da lista
lista.pop();

//Imprimindo lista novamente
console.log(lista);


//Verificando o tamanho da lista
console.log(lista.length);


//Invertendo a lista
console.log(lista.reverse());


//Transformando de Array para string
console.log(lista.toString()[0]);

//Realizando join - Adicionando um traço entre os elementos.
console.log(lista.join(" - "));

//Trabalhando com dicionário

var frutas = {nome:"maça", cor:"Vermelho"}
console.log(frutas.nome);
alert(frutas.cor);


//Trabalhando com listas de dicionário
var frutas1 = [{nome:"maça", cor:"Vermelho"}, {nome:"maça", cor:"roxa"}]
console.log(frutas1);
alert(frutas1[1].nome);

*/




//AULA 2
//Estruturas de decisão - if


    var idade = prompt("Qual a sua idade?");

    if(idade >= 18){
        alert("Maior de Idade!");
    }
        else
    {
        alert("Menor de Idade!");
    }

    //Laços de repetição

    //While

    var count = 0;

    while(count < 5){
        console.log(count);
        count = count +1;
    }

    //for

    var count1;
    for(count1 = 10; count1 > 0; count1--){
        console.log(count1);
    }


    //Trabalhando com data
    //Data atual

    var d = new Date();
    alert(d);

    alert(d.getMonth()+1);

    alert(d.getDay()+1);

    alert(d.getHours());



const PI = 3.14;
let numero = 10;
// const PI = 3.15
numero = 11;

console.log("PI", PI);
console.log("Numero", numero);

console.log("igual: ", numero == "11");
console.log("igual; ", numero === "11");


const estados = (numero > 10) 
    ? "maior"
    : "menor ou igual";
console.log("estado: ",estados);

let x = 20;
let y = 30;

if(x > y){
    console.log("condicao: ", "x > y");
} else if(x < y ){
    console.log("condicao: ", "x < y" );
} else{
    console.log("condicao: ", "x = y");
}

for (let i=0; i<5; i++) {
    console.log("i: ", i);
}
let marcasCarros = ["GM","FIAT", "RENAUL"];
for(let indice in marcasCarros){
    console.log("indice: ", indice+'-',marcasCarros );
}

// expressão de funcoes

function somarA(val1, val2){
    let soma =  val1 + val2;
    return soma;
}
let totalA = somarA(3, 5);
console.log("total A: ", totalA)


const somarB = function(val1, val2){
    return val1 + val2

}
let totalB = somarB(2, 2);
console.log("total B: ", totalB)

const somarC = (val1, val2) => val1 + val2

let totalC = somarC(7, 9);
console.log("total C: " + totalC)


// class e Object

let produto1 = new Object();
produto1.id = 1
produto1.NOME = "PRODUTO 1"
produto1.preco = 30.00
produto1.imprimir = function(){
    console.log('${this.id} - ${this.nome}');
}


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

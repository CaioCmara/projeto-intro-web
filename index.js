//      ------Semana 1------

/* Heralds 
name = string
numero = Number
vivo = Boolean
atributos = array */

//      ------1.2------

const nome1 = "Jezrien";
const numero1 = 1;
const vivo1 = true;
const atributos1 = ["Proteção", " Liderança"];

const nome2 = "Paliah";
const numero2 = 4;
const vivo2 = false;
const atributos2 = ["Erudito", " Caridoso"];

const nome3 = "Kalak";
const numero3 = 8;
const vivo3 = true;
const atributos3 = ["Firme", " Construtor"];

const nome4 = "Nalan";
const numero4 = 2;
const vivo4 = true;
const atributos4 = ["Justo", " Confiante"];

//      ------1.3------

const calculoMediaNumero = (numero1 + numero2 + numero3 + numero4) / 4;
console.log("Média de números", calculoMediaNumero);

//      ------1.4------

const todasVerdadeiras =
  atributos1 && atributos2 && atributos3 && atributos4 === true;
console.log("Todas são verdadeiras?", todasVerdadeiras);

//      ------1.6------
function mostrarVariaveis() {
  console.log(
    `Nome: ${nome1.toUpperCase()} \nNúmero: ${numero1} \nVivo: ${vivo1} \nAtributos: ${atributos1}`
  );
  console.log("    ");
  console.log(
    `Nome: ${nome2.toUpperCase()} \nNúmero: ${numero2} \nVivo: ${vivo2} \nAtributos: ${atributos2}`
  );
  console.log("    ");
  console.log(
    `Nome: ${nome3.toUpperCase()} \nNúmero: ${numero3} \nVivo: ${vivo1} \nAtributos: ${atributos3}`
  );
  console.log("    ");
  console.log(
    `Nome: ${nome4.toUpperCase()} \nNúmero: ${numero4} \nVivo: ${vivo1} \nAtributos: ${atributos4}`
  );
  console.log("    ");
}
mostrarVariaveis();

//      ------Semana 2.1------
primeiroHerald = {
  nome: "Jezrien",
  numero: 1,
  vivo: true,
  atributos: ["Líder", " Protetor"],
  imagem: "imagens/Jezrien_HL.webp",
};

segundoHerald = {
  nome: "Nalan",
  numero: 2,
  vivo: true,
  atributos: ["Justo", " Confiante"],
  imagem: "imagens/FFmxiCKXoAYAdfG.jpg",
};

terceiroHerald = {
  nome: "Chanarach",
  numero: 3,
  vivo: true,
  atributos: ["Brava", " Obediente"],
  imagem: "imagens/imageproxy.webp",
};

quartoHerald = {
  nome: "Vedel",
  numero: 4,
  vivo: true,
  atributos: ["Justo", " Confiante"],
  imagem: "imagens/Nalan_RoW_KO.webp",
};

quintoHerald = {
  nome: "Paliah",
  numero: 5,
  vivo: true,
  atributos: ["Aprendiz", " Cuidadosa"],
  imagem: "imagens/Pailiah_MV.webp",
};
sextoHerald = {
  nome: "Shalash",
  numero: 6,
  vivo: true,
  atributos: ["Criativa", " Honesta"],
  imagem: "imagens/Shalash_DdS.webp",
};
setimoHerald = {
  nome: "Battar",
  numero: 7,
  vivo: false,
  atributos: ["Sábia", " Cuidadosa"],
  imagem: "imagens/Battar_Zireael.webp",
};
oitavoHerald = {
  nome: "Kalak",
  numero: 8,
  vivo: true,
  atributos: ["Resoluto", " Construtor"],
  imagem: "imagens/Kalak_MV.webp",
};
nonoHerald = {
  nome: "Talenel",
  numero: 9,
  vivo: true,
  atributos: ["Confiável", " Engenhoso"],
  imagem: "imagens/Taln_DG.webp",
};
decimoHerald = {
  nome: "Ishar",
  numero: 10,
  vivo: true,
  atributos: ["Piedoso", " Guia"],
  imagem: "imagens/Ishar_DdS.webp",
};
//      ------2.2------

 

let meusArautos = []; // array para guardar os objetos

 

//      ------2.3-4-5------
if (primeiroHerald.vivo === true) {
  meusArautos.push(primeiroHerald);
} else {
  alert(`${primeiroHerald.nome} já está morto(a)`);
}
if (segundoHerald.vivo === true) {
  meusArautos.push(segundoHerald);
} else {
 // alert(`${segundoHerald.nome} já está morto(a)`);
}
if (terceiroHerald.vivo === true) {
  meusArautos.push(terceiroHerald);
} else {
  alert(`${terceiroHerald.nome} já está morto(a)`);
}
if (quartoHerald.vivo === true) {
  meusArautos.push(quartoHerald);
} else {
  alert(`${quartoHerald.nome} já está morto(a)`);
}
if (quintoHerald.vivo === true) {
  meusArautos.push(quintoHerald);
} else {
  alert(`${quintoHerald.nome} já está morto(a)`);
}
if (sextoHerald.vivo === true) {
  meusArautos.push(sextoHerald);
} else {
  alert(`${sextoHerald.nome} já está morto(a)`);
}
if (setimoHerald.vivo === true) {
  meusArautos.push(setimoHerald);
} else {
 // alert(`${setimoHerald.nome} já está morto(a)`);
}
if (oitavoHerald.vivo === true) {
  meusArautos.push(oitavoHerald);
} else {
  alert(`${oitavoHerald.nome} já está morto(a)`);
}
if (nonoHerald.vivo === true) {
  meusArautos.push(nonoHerald);
} else {
  alert(`${nonoHerald.nome} já está morto(a)`);
}
if (decimoHerald.vivo === true) {
  meusArautos.push(decimoHerald);
} else {
  alert(`${decimoHerald.nome} já está morto(a)`);
}

// imprimindo a array com os objetos
console.log(meusArautos);
console.log("            ");

//      ------Semana 3.1------

meusArautos.push(setimoHerald)
for (arautos of meusArautos) {
  for (atributosDoArray of arautos.atributos) {
    console.log(`Os atributos de ${arautos.nome} são: ${arautos.atributos}`);
  }
}

console.log("___________");
//      ------Semana 3.2------
function stringObjetos(){  
for (arautos of meusArautos) {
  for (componentes in arautos) {
    console.log(`${componentes}: ${arautos[componentes]}`);
  }
}
}
stringObjetos()
//      ------Semana 3.3------

function retornarObjetosEmString() {
  for (arautos of meusArautos) {
    console.log(
      `${arautos.nome} representa o número ${arautos.numero} no vorinismo. Segundo os estudiosos da religião, ele(a)representa os seguintes atributos: ${arautos.atributos[0]} e ${arautos.atributos[1]}. Por outro lado, a informação de que ele{a} está vivo(a) é ${arautos.vivo} `
    );
  }
  return;
}
//Não está funcionando 
/* retornarObjetosEmString();

const pesquisa = prompt("Digite o seu Arauto");

function buscarObjeto() {
  const resultado = meusArautos.filter((arautos) => {
    if (pesquisa === arautos.nome) {
      console.log(arautos);
    } else {
      alert("objeto nao encontado");
    }
    return resultado;
  });
}
buscarObjeto(pesquisa); */
 

function passarObjetos(array){
let section = document.getElementById("cards")
section.innerHTML =""
let lista = ""

array.map(arautos => {
  lista = `<ul class = "teste">
  <li class="imagens"><img src="${arautos.imagem}"/ width="250px"></li>
  <li class = "nomes">${arautos.nome.toUpperCase()}</li>
  <li class = "numero" >Número no vorinismo: ${arautos.numero}</li>
  <li class= "vivo" >Está vivo(a): ${arautos.vivo}</li>
  <li class = "atributo" >Atributos: ${arautos.atributos[0]} e ${arautos.atributos[1]}</li>
  </ul> `
  section.innerHTML += lista
});
}
passarObjetos(meusArautos)
 /* teste
let novaSection = document.getElementById("cards")
novaSection.innerHTML +=  `<li>stringObjetos() </li>` 
*/
 
 // procurar por atributos além do nome

  function search (event) {

    let input = document.getElementById("buscador").value;
    let ulArautos = document.getElementsByClassName("teste");

    input=input.toLowerCase(); 


    for (i = 0; i < ulArautos.length; i++) { 
        if (!ulArautos[i].innerHTML.toLowerCase().includes(input)) {
          ulArautos[i].style.display="none";
            console.log("TEste")
        }
        else {
          ulArautos[i].style.display="list-item";
           
        }         
    }
    
    if (input === "") {
        alert("Insira o nome de um arauto")
    
    }

    event.preventDefault()
}
 


var ComprarRefrigerante = false
var ComprarCerveja =  false
var ComprarSucoNatural = false


var convidado = {

    nome: 'Pedro',
    idade: 18,
    bebeCerveja: false,
    bebeRefrigerante: false

}

if (convidado.bebeRefrigerante){

    ComprarRefrigerante =  true
    }else if (convidado.bebeCerveja && convidado.idade >=18){
        ComprarCerveja = true
    }else {

    ComprarSucoNatural = true
    }

console.log(ComprarSucoNatural)
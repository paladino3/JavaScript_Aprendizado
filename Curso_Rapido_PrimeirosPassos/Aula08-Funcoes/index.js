


function imc (altura, peso){    // dentro dos parentes, ou escopos receber variaveis
    return peso / (altura* altura)

}


var pessoas = [

    {
        nome: 'Pedro',
        altura: 1.83,
        peso: 80
    },

    {
        nome: 'Joao',
        altura: 1.65,
        peso: 67
    },

    {
        nome: 'Maria',
        altura: 1.58,
        peso: 70
    }


]

for (var pessoa of pessoas){

    var resultado = imc (pessoa.altura, pessoa.peso)

    console.log("Nome:"+pessoa.nome,"Altura: "+pessoa.altura,"Peso: "+pessoa.peso,"IMC: "+resultado)
}




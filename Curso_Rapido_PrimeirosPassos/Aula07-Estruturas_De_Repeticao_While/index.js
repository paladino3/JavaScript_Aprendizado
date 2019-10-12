var convidados = [

    {
        nome: 'Pedro',
        bebeRefrigerante: false,
        bebeCerveja: true
    },
    
    
    {
    
        nome: 'Maria',
        bebeRefrigerante: true,
        bebeCerveja: false
    
    },
    
    {
        nome: 'Joao',
        idade: 19,
        bebeRefrigerante: true,
        bebeCerveja: true
    
    }
    ]
    
    console.log(convidados.length)
    
    var ComprarCerveja = false
    var i = 0


    while (i < convidados.length){
        console.log(convidados[i].nome, convidados[i].bebeCerveja)
        if (convidados[i].bebeCerveja){
                ComprarCerveja =  true
                break
        }
    }
    
    console.log(ComprarCerveja)
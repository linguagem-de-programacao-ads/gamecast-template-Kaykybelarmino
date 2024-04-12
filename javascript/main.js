async function capturarDadosMock(){
    try{
        const resposta = await fetch("https://660f44ae356b87a55c510d34.mockapi.io/agendas")
        const respostaDadosAgenda = await resposta.json();
        console.log(respostaDadosAgenda)

        const divCard = document.getElementsById("cards_games");
        
        divCard.innerHTML = dados.map((itemAgenda) => {
            "Teste"     
        });
    }
    catch (error){
        console.log("Houve um erro ao consultar os dados ${error}")
    }
}

capturarDadosMock(); 

function criarCard(dados){
    for(var i = 0; i < dados.length; i++){

    }
}
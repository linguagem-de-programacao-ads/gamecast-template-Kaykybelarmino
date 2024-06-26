async function capturarDadosMock(){
    try{
        const resposta = await fetch("https://660f44ae356b87a55c510d34.mockapi.io/agendas")
        const respostaDadosAgenda = await resposta.json();
        console.log(respostaDadosAgenda)

        const divCard = document.getElementById("cards_games");
        
        divCard.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
            var dataAgenda = new Date(itemAgenda.dataJogo)
              return  `
              <div class="cardItem">
                <div class="dataGame"> 
                    <img src="../imagens/calendar-solid.svg" alt=""> 
                    ${dataAgenda.getDay()}/${dataAgenda.getMonth()}/${dataAgenda.getFullYear()}
                </div>
                <img class="img-background" src="${itemAgenda.urlImagem}" alt="">
                <div class="descricao">
                    <p> <strong>${itemAgenda.nome}</strong> </p>
                    <p>${itemAgenda.descricao} </p>
                    <p><strong>Gamers: </strong></p>

                    <div class="gamers">
                        
                        ${
                            itemAgenda.gamers.map((gamerItem) => {
                                return `<div class="gamerItem">${gamerItem}</div>`
                            }).join('')
                        }
                        
                    </div>

                  
                </div>  
                <div class="assistir">
                        <a class="assistirItem"> <img src="../imagens/youtube.svg" alt=""> Assistir </a>
                </div>
            </div>
              `
        }).join('');
    }
    catch (error){
        console.log(`Houve um erro ao consultar os dados ${error}`)
    }
}

capturarDadosMock(); 

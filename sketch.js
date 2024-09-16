// fantasia, aventura, drama


// noviça rebelde, livre, musical , romance
// Mary poppins, livre, musical, fantasia
// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura

// as aventuras de pi, 10, drama, fantasia, aventura
// depois da chuva, 10, drama

// crepusculo 1, 12, fantasia, romance
// king kong o novo imperio, 12, ação e ficção
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama

// o menino que descobriu o vento, 14, drama
// motoqueiro fantasma, 14, aventura, fantasia, ação


let campoIdade;
let campoFantasia;
let campoMusical;
let campoRomance;
let campoDrama;
let campoAventura;



function setup() {
    createCanvas(600, 400);
    createElement("h2", "Recomendador de filmes");
    createSpan("Sua Idade:");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox("Gosta de Fantasia ?");
    campoMusical = createCheckbox("Gosta de musical?");
    campoRomance = createCheckbox("Gosta de Romance?") ;
    campoDrama = createCheckbox ("Gosta de Drama?");
    campoAventura = createCheckbox ("Gosta de Aventura");
}


function draw() {
    background("green");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let gostaDeMusical = campoMusical.checked();
    let gostaDeRomance= campoRomance.checked();
    let gostaDeDrama =  campoDrama.checked();
    let gostaDeAventura = campoAventura.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia,gostaDeMusical, gostaDeRomance, gostaDeDrama, gostaDeAventura);
   
    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia,gostaDeMusical, gostaDeRomance, gostaDeDrama, gostaDeAventura) {
    if(idade <10) {
        if(gostaDeRomance) {
            return "Noviça Rebelde";
        } else {
            if(gostaDeMusical){
                return "Mary poppins";
            } else {
              if(gostaDeFantasia){
                return "A viagem de Chihiro"
              } else {
                return "Paddington"
              }      

            }
        }
    }
    if(idade<=10) {
      if(gostaDeFantasia || gostaDeAventura){
        return "As aventuras de Pi"
      } else {
        return "Depois da Chuva"
      }
    }
    if(idade<14) {
      if(gostaDeDrama){
        return "ladrões de bicicleta"
      } else {
        if(gostaDeFantasia){
          if(gostaDeAventura){
            return "Guardiões da Galáxia"
          } else {
            return "Crepúsculo"
          }
   //         return "king kong o novo Imperio"
          } else {
            return "king kong o novo Imperio"
          }
        }
      }
    if (idade>=14){
      if(gostaDeFantasia ||gostaDeAventura){
        return "Motoqueiro Fantasma"
      }else {
        return "O menino que descobriu o vento"
      }
    }
    }

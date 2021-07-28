const baralho = [
  {
    name: "bobrossparrot",
    image: "assets/bobrossparrot.gif"
  },
  {
    name: "bobrossparrot",
    image: "assets/bobrossparrot.gif"
  },
  {
    name: "explodyparrot",
    image: "assets/explodyparrot.gif",
  },
  {
    name: "explodyparrot",
    image: "assets/explodyparrot.gif",
  },
  {
    name: "fiestaparrot",
    image: "assets/fiestaparrot.gif"
  },
  {
    name: "fiestaparrot",
    image: "assets/fiestaparrot.gif"
  },
  {
    name: "metalparrot",
    image: "assets/metalparrot.gif"
  },
  {
    name: "metalparrot",
    image: "assets/metalparrot.gif"
  },
  {
    name: "revertitparrot",
    image: "assets/revertitparrot.gif"
  },
  {
    name: "revertitparrot",
    image: "assets/revertitparrot.gif"
  },
  {
    name: "tripletsparrot",
    image: "assets/tripletsparrot.gif"
  },
  {
    name: "tripletsparrot",
    image: "assets/tripletsparrot.gif"
  },
  {
    name: "unicornparrot",
    image: "assets/unicornparrot.gif"
  },
  {
    name: "unicornparrot",
    image: "assets/unicornparrot.gif"
  }
];

let cards = [];
let cardsSort = [];
let escolhidas = [];

function loadGame() {

  let numCartas = Number(prompt("Digite com quantas quartas vc quer jogar. (4 a 14, valores pares)."));

  while(numCartas %2 != 0 || numCartas < 4 || numCartas > 14) {
    numCartas = Number(prompt("Digite com quantas quartas vc quer jogar. (4 a 14, valores pares)."));
  }
  
  let tabuleiro = document.querySelector(".game");
  let cont = 0;
  let cont2 = 0;
  while(cont != numCartas) {
    if(cont % 2 == 0) {
      cards.push(baralho[cont]);
    } else {
      cards.push(baralho[cont]);
    }
    cont++;
  }

  cardsSort = cards.sort(() => {
    return Math.random() - 0.5;
  });

  while (cont2 < cards.length) {
    tabuleiro.innerHTML += `
    <div class="card">
    <img class="front-card" id="${cont2}" name="${cardsSort[cont2].name}" src="/assets/front.png" alt="frontcard" onclick="pickCard(this)">
   </div>`
   cont2++;
  }
}

function pickCard(carta) {
  
  carta.src = cardsSort[carta.id].image;
  escolhidas.push(carta);

  if(escolhidas.length === 2) {
    setTimeout(() => {
      let carta1 = escolhidas[0];
      let carta2 = escolhidas[1];
      console.log(escolhidas);

      if(carta1.name === carta2.name) {
        carta1.removeEventListener("click", escolherCarta);
        carta2.removeEventListener("click", escolherCarta);
        alert("iguais!!")
      } else {
        carta1.src = "/assets/front.png";
        carta2.src = "/assets/front.png";
      }

      escolhidas = [];
    }, 1000)
  }

}
 


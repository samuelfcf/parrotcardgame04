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
]
let escolhidas = [];


function carregarTela() {

  baralho.sort(() => {
    return Math.random() - 0.5;
  })

  let numCartas = Number(prompt("Digite com quantas quartas vc quer jogar. (4 a 14, valores pares)."));

  while(numCartas %2 != 0 || numCartas < 4 || numCartas > 14) {
    numCartas = Number(prompt("Digite com quantas quartas vc quer jogar. (4 a 14, valores pares)."));
  }
  
  let tabuleiro = document.querySelector(".game");
  let cont = 0;
  while(cont != numCartas) {
    if(cont % 2 == 0) {
      tabuleiro.innerHTML += `
      <div class="card">
        <img class="front-card" id="${cont}" name="${baralho[cont].name}" src="/assets/front.png" alt="frontcard" onclick="escolherCarta(this)">
      </div>`
    } else {
      tabuleiro.innerHTML += `
      <div class="card">
        <img class="front-card" id="${cont}" name="${baralho[cont].name}" src="/assets/front.png" alt="frontcard" onclick="escolherCarta(this)">
      </div>`
    }
    cont++;
  }
}

function escolherCarta(carta) {
  
  carta.src = baralho[carta.id].image;
}
 


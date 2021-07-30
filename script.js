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

let jogadas = 0;
let paresAchados = 0;
let cards = [];
let cardsSort = [];
let escolhidas = [];
let tabuleiro = document.querySelector(".game");

function loadGame() {

  let numCartas = Number(prompt("Digite com quantas quartas vc quer jogar. (4 a 14, valores pares)."));

  while(numCartas %2 != 0 || numCartas < 4 || numCartas > 14) {
    numCartas = Number(prompt("Digite com quantas quartas vc quer jogar. (4 a 14, valores pares)."));
  }


  for(let i = 0; i < numCartas; i++) {
    if(i % 2 == 0) {
      cards.push(baralho[i]);
    } else {
      cards.push(baralho[i]);
    }
  }

  cardsSort = cards.sort(() => {
    return Math.random() - 0.5;
  });

  for(let i=0; i < cards.length; i++) {
    tabuleiro.innerHTML += `
    <div class="card" onclick="pickCard(this)">
     <img class="front-card face" id="${i}" name="${cardsSort[i].name}" src="/assets/front.png" alt="frontcard"">
   </div>`
  }

  let divsGame = document.querySelectorAll(".card");
  divsGame.forEach(div => {
    div.setAttribute("onclick", 'pickCard(this)');
  });
}

function pickCard(carta) {
  escolhidas.push(carta);
  const imgCarta = carta.children[0];
  carta.innerHTML += `<img class="back-card face" id="${imgCarta.id}" src="${cardsSort[imgCarta.id].image}" />`

  if(escolhidas.length === 2) {
    escolhidas.forEach(carta => {
      carta.classList.add("flip");
    })
    jogadas++;

    setTimeout(() => {
      const carta1 = escolhidas[0];
      const carta2 = escolhidas[1];

      if(carta1.children[0].name === carta2.children[0].name) {   
        carta1.removeAttribute("onclick")
        carta2.removeAttribute("onclick");
        console.log(carta1,carta2);
        paresAchados++;
      } else {
        carta1.classList.remove("flip");
        carta2.classList.remove("flip");
      }

      if(paresAchados === cardsSort.length/2) {
        endGame = true;
        alert(`Parabéns! Você ganhou em ${jogadas} jogadas.`);
        let reiniciarGame = prompt("quer jogar novamente? (s ou n)");
        while (reiniciarGame !== "s" && reiniciarGame !== "n") {
          reiniciarGame = prompt("quer jogar novamente? (s ou n)");
        }
        if(reiniciarGame === "s") {
          tabuleiro.innerHTML = "";
          cards = [];
          cardsSort = [];
          escolhidas = [];
          paresAchados = 0;
          jogadas = 0;
          loadGame();
        }
      }
      escolhidas = [];
    }, 1000);
  }
}

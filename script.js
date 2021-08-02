const deck = [
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

let plays = 0;
let foundPairs = 0;
let idStopwatch;
let stopwatch;
let cards = [];
let cardsSort = [];
let chosenByMove = [];
let game = document.querySelector(".game");

function loadGame() {
  stopwatch = 0;
  let numCards = Number(prompt("Digite com quantas quartas vc quer jogar. (4 a 14, valores pares)."));

  while(numCards %2 != 0 || numCards < 4 || numCards > 14) {
    numCards = Number(prompt("Digite com quantas quartas vc quer jogar. (4 a 14, valores pares)."));
  }

  for(let i = 0; i < numCards; i++) {
      cards.push(deck[i]);
  }

  cardsSort = cards.sort(() => {
    return Math.random() - 0.5;
  });

  for(let i=0; i < cards.length; i++) {
    game.innerHTML += `
    <div class="card">
     <img class="back-card face" id="${i}" name="${cardsSort[i].name}" src="/assets/front.png" alt="frontcard"">
   </div>`
  }

  let card = document.querySelectorAll(".card");
  card.forEach(div => {
    div.setAttribute("onclick", 'pickCard(this)');
  });

  idStopwatch = setInterval(() => {
    stopwatch += 1;
    document.querySelector(".counter").innerHTML = `tempo: ${stopwatch}s`;
  }, 1000);
}

function pickCard(card) {
  chosenByMove.push(card);
  const imgCard = card.querySelector(".face");
  card.innerHTML += `<img class="front-card face" id="${imgCard.id}" src="${cardsSort[imgCard.id].image}" />`

  if(chosenByMove.length === 2) {
    chosenByMove.forEach(carta => {
      carta.classList.add("flip");
    })
    plays++;

    setTimeout(() => {
      const carta1 = chosenByMove[0];
      const carta2 = chosenByMove[1];

      if(carta1.querySelector(".back-card").name === carta2.querySelector(".back-card").name) {   
        carta1.removeAttribute("onclick")
        carta2.removeAttribute("onclick");
        foundPairs++;
      } else {
        carta1.classList.remove("flip");
        carta2.classList.remove("flip");
      }

      if(foundPairs === cardsSort.length/2) {
        alert(`Parabéns! Você ganhou com ${plays} jogadas em ${stopwatch} segundos.`);
        clearInterval(idStopwatch);

        let restartGame = prompt("quer jogar novamente? (s ou n)");
        while (restartGame !== "s" && restartGame !== "n") {
          restartGame = prompt("quer jogar novamente? (s ou n)");
        }
        if(restartGame === "s") {
          stopwatch = 0;
          game.innerHTML = "";
          cards = [];
          cardsSort = [];
          chosenByMove = [];
          foundPairs = 0;
          plays = 0;
          loadGame();
        }
      }
      chosenByMove = [];
    }, 1000);
  }
}



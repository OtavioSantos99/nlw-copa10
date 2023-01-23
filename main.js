function createGame(player1, hour, player2) {
  return `
              <li>
              <!--item 2-->
              <img src="./assets/logo${player1}.svg" alt="Bandeira do ${player1}" />
              <strong> ${hour}</strong>
              <img src="./assets/logo${player2}.svg" alt="Bandeira da ${player2}" />
            </li>
  `
}
let delay = -0.3;


function createCard(date, day, games) {
  delay = delay + 0.3
  return `
  <div class="card" style="animation-delay:${delay}s">
          <h2>${date} <span> ${day} </span></h2>
          <ul>
          ${games}
          </ul>
       </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="Logo da NFW" />
      </header>
      <!--Cabeçalho-->
      <main id="cards">
      
      ${createCard(
        "24/11",
        "Quinta",

        createGame("cameroon", "13:00", "switzerland") +
          createGame("brazil", "16:00", "serbia")
      )}

      ${createCard(
        "28/11",
        "Segunda",
        createGame("brazil", "13:00", "switzerland") +
          createGame("cameroon", "16:00", "serbia")
      )}
   
      ${createCard(
        "02/12",
        "Sexta",
        createGame("brazil", "16:00", "cameroon") +
        createGame("switzerland", "16:00", "serbia")
      )}
      </main>
`

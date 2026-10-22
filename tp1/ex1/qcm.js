const question1 = [true, true, false, true];
const question2 = [true, true, false, true];
const question3 = [true, true, true, false];
const question4 = [false, true, false, false];
const question5 = [false, true, false, false];

const bonneReponces = [question1, question2, question3, question4, question5];

function playerResponces() {
  const reponces = [];

  for (let i = 0; i < 5; i++) {
    const inputs = document.querySelectorAll(`.question${i + 1} input`);
    const choix = [];
    inputs.forEach((input) => {
      choix.push(input.checked);
    });
    reponces.push(choix);
  }
  return reponces;
}

function verifier(x, y) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) return false;
  }
  return true;
}

document.getElementById("btnResultat").addEventListener("click", () => {
  const reponces = playerResponces();
  let score = 0;

  const fenetre = window.open("", "", `width=400,height=400`);

  fenetre.document.write(`    <link rel="stylesheet" href="ex1.css" />
<h3>Résultat du test</h3>`);

  for (let i = 0; i < 5; i++) {
    const juste = verifier(reponces[i], bonneReponces[i]);

    if (juste) score++;

    fenetre.document.write(
      `<p style="color: ${juste ? "green" : "red"}">La réponse de la question ${i + 1} est ${juste ? "correcte" : "incorrecte"}</p>`,
    );
  }

  fenetre.document.write(`<p>${score}/5</p>`);

  fenetre.document.write(
    `<button type="button" onclick="window.close()">FERMER</button>`,
  );

  fenetre.document.close();
});

document.getElementById("btnCorrige").addEventListener("click", () => {
  const fenetre = window.open("", "", "width=500,height=900,scrollbars=yes");
  fenetre.document.write(
    ` <link rel="stylesheet" href="ex1.css" />
    <h1>Corrigé du test sur HTML et CSS</h1>
    <p class="question">1.</p>
    <ul>
      <li class="juste">&lt;p&gt;</li>
      <li class="juste">&lt;div&gt;</li>
      <li>color</li>
      <li class="juste">&lt;h1&gt;</li>
    </ul>

    <p class="question">2.</p>
    <ul>
      <li class="juste">color</li>
      <li class="juste">font-size</li>
      <li>background-color</li>
      <li class="juste">font-family</li>
    </ul>

    <p class="question">3.</p>
    <ul>
      <li class="juste">&lt;ul&gt;</li>
      <li class="juste">&lt;ol&gt;</li>
      <li class="juste">&lt;li&gt;</li>
      <li>&lt;list&gt;</li>
    </ul>

    <h3>Questions à choix simple :</h3>

    <p class="question">4.</p>
    <ul>
      <li>&lt;link&gt;</li>
      <li class="juste">&lt;a&gt;</li>
      <li>&lt;href&gt;</li>
      <li>&lt;url&gt;</li>
    </ul>

    <p class="question">5.</p>
    <ul>
      <li>color</li>
      <li class="juste">background-color</li>
      <li>font-color</li>
      <li>bg-color</li>
    </ul>

    <button type="button" onclick="window.close()">FERMER</button>`,
  );
});

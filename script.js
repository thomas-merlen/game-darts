
let scoreElem = document.getElementById("score");
let score = 501;
let compteurElem = document.getElementById("compteur")
let compteur = 0;

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;



        if (value === "Retour") {
            alert("Mise en place prochainement");
        }

        let points = parseValue(value);

        if (score - points >= 0) {
            score -= points;
            scoreElem.textContent = score;
            compteur += 1;
            compteurElem.textContent = compteur
        }
    });
});

function parseValue(text) {
    if (!isNaN(text)) {
        return parseInt(text);
    }

    if (text.startsWith("D")) {
        let base = parseInt(text.substring(1));
        return base * 2;
    }

    if (text.startsWith("T")) {
        let base = parseInt(text.substring(1));
        return base * 3;
    }

}

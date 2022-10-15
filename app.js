let scores, roundScore, activePlayer, gamePlaying;

gameStarter();

document.querySelector('.btn-dice').addEventListener('click', function () {
    if (gamePlaying) {
        //nombre aleatoire
        let dice = Math.floor(Math.random() * 6) + 1;

        //affichage du résultat
        let displayDice = document.querySelector('.dice');
        displayDice.style.display = 'block';
        displayDice.src = 'img/dice-' + dice + '.svg';

        //MAJ du score si la valeur du dés != de 1
        if (dice !== 1) {
            //ajout du score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent =
                roundScore;
        } else {
            //a l'autre de jouer
            let displayDice = document.querySelector('.dice');
            displayDice.style.display = 'block';
            displayDice.src = 'img/dice-' + dice + '.svg';
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //ajout du scre en cours au global
        scores[activePlayer] += roundScore;

        //MAJ global
        document.querySelector('#score-' + activePlayer).textContent =
            scores[activePlayer];

        //verification du score sur 100
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent =
                'BRAVO !';
            document.querySelector('.dice').style.display = 'none';
            document
                .querySelector('.player-' + activePlayer)
                .classList.add('winner');
            document
                .querySelector('.player' + activePlayer)
                .classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', gameStarter);

function gameStarter() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');
}

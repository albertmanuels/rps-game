const game = () => {
    let pScore = 0;
    let cScore = 0;


    //Memulai game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.replace('fadeOut', 'fadeIn');
        });
    };


    //bermain game
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        });

        //Komputer
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach( option =>{
            option.addEventListener('click', function() {
                //Pilihan computer
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

               setTimeout(() => {
                    //membandingkan pilihan komputer
                compareHands(this.textContent, computerChoice);

                //Mengganti gambar tangan player dan komputer
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src =`./assets/${computerChoice}.png`;
               }, 1500)


                //Animasi 
                playerHand.style.animation = 'shakePlayer 1.5s ease';
                computerHand.style.animation = 'shakeComputer 1.5s ease';
            } );
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore; 
    }


        
    // }

    //Membandingkan pilihan player dan komputer
    const compareHands = (playerChoice, computerChoice) => {
        //Update for a tie
        const winner = document.querySelector('.winner');

        //Checking for a tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return;
        }

       //mengecek hasil jika pilihan player adalah rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }

        //mengecek hasil jika pilihan player adalah paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
       //mengecek hasil jika pilihan player adalah scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }

   

    startGame();
    playMatch();
};


game();
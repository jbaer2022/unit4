/* Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase("sweet child o mine"), 
                        new Phrase("sittin on the dock of the bay"),
                        new Phrase("like a rolling stone"), 
                        new Phrase("smells like teen spirit"), 
                        new Phrase("purple haze")];
        this.activePhrase = null;
        this.started = false;
    }

    /**
     * hides the starting screen
     * sets active phrase
     * adds phrase to display
    */
    startGame(){
        document.getElementById("overlay").style.display = "none";

        this.activePhrase = this.getRandomPhrase();

        this.activePhrase.addPhraseToDisplay();

        this.started = true;

    }


    /**
     * @return {Object} a random phrase object from the phrases array
    */
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
    }


    /**
     *disable button for key
     *if phrase does not have checked letter, 
     *if phrase has a guessed letter, add "chosen" Css class to keyboard button
     *call show matched letters
     * @param {String} - the letter of the key that was hit
     * 
    */
    handleInteraction(letter, keyo){
        
        keyo.prop("disabled",true);
        if(!this.activePhrase.checkLetter(letter)){

            keyo.addClass("wrong");

            $("#image").attr("src", "images/giphy-1.gif");
            $("#image").fadeIn();
            $("#image").fadeOut();

            this.removeLife();

        }

        else{

            
            $("#image").attr("src", "images/giphy.gif");
            $("#image").fadeIn();
            $("#image").fadeOut();

            keyo.addClass("chosen");

            this.activePhrase.showMatchedLetter(letter);

            if(this.checkForWin()){
                $("#image").hide();
                this.gameOver("You win!");
                this.clearBoard();
            }

        }


    }


    /**
     * checks if user has revealed all letters
     * liveHeart.png images with a lostHeart.png
     * increments missed
     * ends game if there are fived missed it ends the game
    */
    removeLife(){
        this.missed++;
        let lives = document.getElementsByClassName("tries");

        $(lives[this.missed-1]).children().attr("src", "images/lostHeart.png");
        

        if(this.missed>=5){
            this.gameOver("You lose!");
            this.clearBoard();
        }
    }


    /**
     * checks for a win
     * @returns {boolean} if there is a win it returns true, else it returns false
    */
    checkForWin(){
        let lis = document.getElementById("phrase").children[0].children;
        var cnt= 0;
        
        for(let i=0; i<lis.length; i++){
            //console.log(lis[i].innerText);
            if( $(lis[i]).hasClass(`show`) || $(lis[i]).hasClass(`space`) ){
                cnt++;

            }  
            
        }

        if(cnt == lis.length){
            return true;
        }
        else{
            return false;
        }


    }


    /** 
     * if game has been lost
     * @param {String} - the function will display the string onto the h2 tag of the front page
    */
    gameOver(str){
        document.getElementById("overlay").style.display = "inline";
        document.getElementById("overlay").children[0].textContent = str;

    }


    /**
     * clears the board of the lis
     * removes wrong and chosen classes from every keys
     * resets the heart images to alive
     */
    clearBoard(){


        $("#image").attr("src", "");
        $("#image").show();

        this.started=false;
        this.missed = 0;

        let lis = document.getElementById("phrase").children[0].children;

        for(let i = lis.length-1; i>=0; i--){
            lis[i].remove();
        }

        $(".key").prop("disabled",false);
        $(".key").removeClass("chosen");
        $(".key").removeClass("wrong");




        let $lives = $(document.getElementsByClassName("tries"));

        $lives.children().attr("src", "images/liveHeart.png");

        
    }


    

    









}
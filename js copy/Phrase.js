/* Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase;
    }


    /**
     * adds letter place holder
     * adds spaces
     * check this over
    */
    addPhraseToDisplay(){
        let $str = $(document.getElementById("phrase").children[0]);
        for(let i = 0; i<this.phrase.length; i++){
            

            if(this.phrase[i] === " "){
                let item = document.createElement("li");
                let $li = $(item);
                $li.addClass("space");
                $li.html(" ");
                $str.append($li);

            }

            else{
                let item = document.createElement("li");
                let $li = $(item);
                $li.addClass(`hide letter ${this.phrase[i]}`);
                $li.html(`${this.phrase[i]}`)
                $str.append($li);
            }


        }

    }



    /**
     * checks to see if a letter clicked was selected
     * @param {String} - Keydown event object
     * @return {boolean} - whether the letter selected is in the array
     */
    checkLetter(e){

        for(let i =0; i<this.phrase.length; i++){
            if(e == this.phrase[i]){
                return true;
            }

        }
        return false;

 
    }



    /**
     * reveals all of the letters on the phrase display that were clicked
     * @param {String} -  the key clicked
     */
    showMatchedLetter(e){

        let letters = document.getElementById("phrase").children[0].children;

        if(this.checkLetter(e)){

            for(let i=0; i<letters.length; i++){
                
                if( $(letters[i]).hasClass(`${e}`) && $(letters[i]).hasClass(`hide`) ){

                    $(letters[i]).removeClass("hide");
                    $(letters[i]).addClass("show");

    
                }  
                
            }
            

        }

        
    }

}
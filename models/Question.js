export class Question{

    /**
     * 
     * @param {string} text this is the text of the question
     * @param {string[]} choices this are the choices of the answer
     * @param {string} answer  this is the answer of the choices
     */

    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice some text to guess 
     * @returns {boolean}
     */

    correctAnswer(choice){
        return choice === this.answer;
    }




}
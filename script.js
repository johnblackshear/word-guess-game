

//global variables

    var word = ["line", "hieght", "hue", "javascript", "color", ]
    var randomWord = Math.floor(Math.random()*word.length);
    console.log(chosenWord)
    var chosenWord = word[randomWord];
    var rightWord = [];
    var wrongWord= [];
    var keyword;
// generate word from word[ ] then change to underscores
    var answerArray = [];
    var generateAnswerArray = () =>{

        for(var i = 0; i < chosenWord.length; i++) {
         answerArray.push("_");
       

    }
    return answerArray;
    }
 
    console.log(answerArray)
    console.log(generateAnswerArray());

//  var remainingLetters = chosenWord.length;
//  console.log(remainingLetters)

// user input on key function keyword === key pressed
    document.addEventListener('keypress', function(keypress) {
        var keypress = event.keyCode
        var keyword = String.fromCharCode(keypress)
  
        console.log(keyword);

// if the keyword === the letter in the chosenword [_ _ _ _ ] then push to right word array

        //if(chosenWord.indexOf(keyword) > -1){
           // rightWord.push(keyword);

// Changes the chosenWord from underscore  to letter in right spot of the array

for (var i = 0; i < this.answerArray.length; i++) {
    answerArray[chosenWord.indexOf(keyword)] = keyword;
    // If the guessed letter is in the solution, and we haven't guessed it already..
    if ((keyword === this.answerArray[i]) && (this.chosenWord.indexOf(keyword) === -1)) {
      // Push the newly guessed letter into the matchedLetters array.
      this.rightWord.push(keyword);
    }
  }


    
        console.log(rightWord);
        //console.log(answerArray);


// if chosen  answerArray string matches the word       
        if(answerArray.join("","") === chosenWord){
            alert("Congrats! You have guessed correctly!!");
        }
            
        //} else{
          //  wrongWord.push(keyword);
        //    console.log(wrongWord);
       // }
    });

  // function changeChosen(){
    //for (var i = 0; i < this.chosenWord.length; i++) {
        // If the guessed letter is in the solution, and we haven't guessed it already..
      //  if ((keyword === this.chosenWord[i]) && (this.answerArray[chosenWord.indexOf(keyword)] === -1)) {
          // Push the newly guessed letter into the matchedLetters array.
        //  this.matchedLetters.push(keyword);
        //}
      //}

  

      //for (var i = 0; i < this.answerArray.length; i++) {
        // If the guessed letter is in the solution, and we haven't guessed it already..
        //if ((keyword === this.answerArray[i]) && (this.answerArray[changeChosen.indexOf(keyword)] === -1)) {
          // Push the newly guessed letter into the matchedLetters array.
          //this.rightWord.push(keyword);
        //}
      //}

      //for (var i = 0; i < this.lettersOfTheWord.length; i++) {
        // If the guessed letter is in the solution, and we haven't guessed it already..
        //if ((letter === this.lettersOfTheWord[i]) && (this.matchedLetters.indexOf(letter) === -1)) {
          // Push the newly guessed letter into the matchedLetters array.
          //this.matchedLetters.push(letter);
        //}
      //}
    



    

    


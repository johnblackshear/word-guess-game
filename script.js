
    var word = ["line", "hieght", "hue", "javascript", "color", ]
    var randomWord = Math.floor(Math.random()*word.length);
    console.log(chosenWord)
    var chosenWord = word[randomWord];
    var rightWord = [];
    var wrongWord= [];

    var answerArray = [];
    var generateAnswerArray = () =>{

        for(var i = 0; i < chosenWord.length; i++) {
         answerArray.push("_");
       

    }
    return answerArray;
    }
 
    console.log(answerArray)
    console.log(generateAnswerArray());
var remainingLetters = chosenWord.length;
console.log(remainingLetters)



    document.addEventListener('keypress', function(keypress) {
        var keypress = event.keyCode
        var keyword = String.fromCharCode(keypress)
  
        console.log(keyword);

        if(chosenWord.indexOf(keyword) > -1){
            rightWord.push(keyword);
           
            answerArray[chosenWord.indexOf(keyword)] = keyword;
            console.log(answerArray);
        
        if(answerArray.join("","") === chosenWord){
            alert("Congrats! You have guessed correctly!!");
        }
            
        } else{
            wrongWord.push(keyword);
            console.log(wrongWord);
        }
    });

   
    

  

    
    



    

    


function Userinput() {
    userInput = document.getElementById("user-input").value
    console.log(userInput)

}

function BotInput(){ 
   botInput = Math.floor((Math.random() * 100) %3)
   console.log(botInput)
}

function comparebotandplayer(){ 
    //rock :0
    //paper :2
    //sissor :2
   if (userInput == botInput){
      console.log("DRAW")

   } else if (userInput == 0 && botInput == 2){
      console.log ("YOUWIN")

   } else if (userInput == 1 && botInput == 0){
      console.log ("YOUWIN")

   } else if (userInput == 2 && botInput == 1){
      console.log ("YOUWIN")

   } else {
      console.log("YOU LOSE")
   }    

}

function PlayGame() {
    userInput = document.getElementById("user-input").value
    console.log(userInput)

    botInput = Math.floor((Math.random() * 100) %3)
    console.log(botInput)

     if (userInput == botInput){
      console.log("DRAW")

   } else if (userInput == 0 && botInput == 2){
      console.log ("YOUWIN")

   } else if (userInput == 1 && botInput == 0){
      console.log ("YOUWIN")

   } else if (userInput == 2 && botInput == 1){
      console.log ("YOUWIN")

   } else {
      console.log("YOU LOSE")

}








}
    

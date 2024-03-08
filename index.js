//document.getElementById("count-el").innerText = 5

//let count = 0

//console.log(count)

/*let firstNum = 5
 let secondNum = 4

 let count = firstNum + secondNum

 console.log(count)*/

/*let myAge = 1
 let humanDogRatio =7

 let myDogAge = myAge * humanDogRatio

 console.log(myDogAge) */

 /*let bonusPoints = 50
 console.log(bonusPoints)
 bonusPoints = bonusPoints + 50
 console.log(bonusPoints)
 bonusPoints = bonusPoints - 75
 console.log(bonusPoints)
 bonusPoints = bonusPoints + 45
 console.log(bonusPoints) */


 /*function increment(){
       console.log("The button was clicked")
 }*/

 /*function countdown(){
    console.log("42")
 }

 countdown()
 countdown()*/


    /*let lap1 = 34
    let lap2 = 33
    let lap3 = 36
 function lapSum(){
    let sum = lap1 + lap2 + lap3
    console.log(sum)
 }

 lapSum()*/

 /*let laps = 0

 function lapCom(){
    laps = laps + 1
 }
 lapCom() 
 lapCom()
 lapCom()

 console.log(laps)*/
 /*let countEl = document.getElementById("count-el")
 let count = 0
let savedEl = document.getElementById("saved-el")

function inc(){
    count += 1
    countEl.textContent = count
}

function dec(){
   if(count == 0){
      countEl.textContent = 0
   }
   else{  
      count -= 1
      countEl.textContent = count
   }
}

function save(){
   savedEl.textContent += count + " - "
   countEl.textContent = 0 
   count = 0
}

let name = 'Jeff'
let notif = "You have three new notofications"
console.log(notif+", "+name+"!")*/
/*let errorBtn = document.getElementById("error-btn")
function errorMessage(){
      error.textContent = "Something went wrong, please try again."
}*/

/*let num1 = 10
let num2 = 8

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
      let ans = num1 + num2
      document.getElementById("ans-el").textContent = "Sum: "+ans
    
}

function subtract(){
   let ans = num1 - num2

   document.getElementById("ans-el").textContent = "Difference: "+ans
  
}

function divide(){
   let ans = num1 / num2
 
   document.getElementById("ans-el").textContent ="Quotient: " +ans
   

}

function multiply(){
   let ans = num1 * num2

   document.getElementById("ans-el").textContent = "Product: " +ans
}*/

/*let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let isALive = true
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("card-el")
let restartGameBtn = document.getElementById("restart-btn")
let player = {
   name : "Jeff",
   chips : 165
}
let playerEl = document.getElementById("player-el")
.textContent = player.name + ": $" + player.chips

function getRandomCard(){
   let randomNum = Math.ceil(Math.random()*13)
   if(randomNum === 1){
      return 11
   }else if(randomNum > 10){
      return 10
   }else{
      return randomNum
   }
}

function startGame(){
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum =firstCard + secondCard
   isALive = true
   hasBlackJack = false
   renderGame()
}

function renderGame(){
   sumEl.textContent = "Sum: "+ sum
   cardsEl.textContent = "Cards: "
   for(let i = 0; i < cards.length; i++){
         cardsEl.textContent += cards[i] + ","
   }
   if(sum < 21){
      messageEl.textContent = "Do you want to draw a new card?"
   }else if(sum === 21){
      messageEl.textContent = "You've got Blacjack!"
      hasBlackJack = true
    
   }else {
      messageEl.textContent = "You are out of the game!"
      isALive = false
   
   } 
}

function newCard(){
     
      if(isALive === true && hasBlackJack === false){
         let thirdCard = getRandomCard()
         cards.push(thirdCard)
         sum += thirdCard 
      }

   renderGame()
  
}

function restartGame(){
   cardsEl.textContent = "Cards: "+ ""
   sumEl.textContent = "Sum: " + ""
   messageEl.textContent = "Want to play a round?"
   cards = []
   sum = 0
   isALive = true
   hasBlackJack = false
}*/

let myLeads = []

let saveBtn = document.getElementById("input-btn")
let inputField = document.getElementById("input-el")
const valEl = document.getElementById("value-el")
const ulEl = document.getElementById("ul-el")
let clrBtn = document.getElementById("clr-btn")
let isEnteredValue = false
let tabBtn = document.getElementById("tab-btn")


let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
   myLeads = leadsFromLocalStorage
   render(myLeads)
}

 

saveBtn.addEventListener("click", function(){
   if(inputField.value === ""){
      console.log("clicked")
   }
   else{
  myLeads.push(inputField.value)
   console.log("clicked")
   render(myLeads)
   inputField.value = ""
   window.alert("Data Saved")
   localStorage.setItem("myLeads", JSON.stringify(myLeads))

   }
   
  //ulEl.innerHTML += "<li>" +inputField.value +"</li>"

  //const li = document.createElement("li")
  //li.textContent = inputField.value
  //ulEl.append(li)
})


tabBtn.addEventListener("click", function(tabs){
   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      let url = tabs[0].url.replace(/^https?:\/\/(www\.)?/, "")
      myLeads.push(url)
      render(myLeads)
      localStorage.setItem("myLeads", JSON.stringify(myLeads))
      window.alert("Tab Saved")
  });
}
)


function render(leads){
let list  = ""
for(let i = 0 ; i< leads.length ; i++){
   list += `<li>
   <a href= "https://${leads[i]}" target = "_blank">${leads[i]}</a>
   </li>  `
   
}
 ulEl.innerHTML = list
 
}

clrBtn.addEventListener("dblclick", function(){
      myLeads = []
      ulEl.textContent = ""
      localStorage.clear()
      render(myLeads)
})











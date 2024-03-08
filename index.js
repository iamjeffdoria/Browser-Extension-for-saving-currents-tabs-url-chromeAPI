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











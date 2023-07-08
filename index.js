import { menuArray } from './data.js'
import { cartArray } from './data.js'

const testEl = document.querySelector(".total__items--container")
const PurchaseEl = document.getElementById("purchase__orders")
const removeEl = document.querySelector(".purchase__container")
const totalPrice = document.querySelector(".total__order--amount")





// total Amount in cart

let totalAmountCartEl = document.getElementById("total__order--amount")


function totalPriceCartCalc() {
const calculsatePrice = cartArray.reduce((prevVal, currentVal) => {
  return prevVal + currentVal.price
  
  }, 0)
  
  let totalPricePoint = calculsatePrice
  
  totalAmountCartEl.innerHTML =  `<h2> £${totalPricePoint} </h2>`

}

totalPriceCartCalc()


// status of clicks 

let itemZeroClick = false 
let itemOneClick = false 
let itemTwoClick = false 
let itemThreeClick = false 


// rrendering items to purchase

for (let items of menuArray){
  testEl.innerHTML += 
  `  <div class="total__items--container">
  <div class="item">
    <div class="item__icon">
    <p class="emoji__icon">${items.emoji}</p>
  </div>
<div class="item__text">
 
  <h2>${items.name}</h2>
  <p>${items.ingredients} </p>
  <p>£${items.price}</p>
</div>
<div class="item__add">
  <a href="#" class="myButton" id="${items.id}">+</a>
</div>
</div>
  </div>
`

  
}

// button id's

const itemZeroId = document.getElementById("0")
const itemOneId = document.getElementById("1")
const itemTwoId = document.getElementById("2")
const itemThreeId = document.getElementById("3")


// removing items from cart event listener 

removeEl.addEventListener("click",function(e){
  if (e.target.id === "remove0") {
    
      if (itemZeroClick) {
      removeItem(e.target.id)
      itemZeroClick = false 
      itemZeroId.classList.remove("remove")
      cartArray[0].price = 0
      totalPriceCartCalc()

      }
  }

  if (e.target.id === "remove1") {
    
    if (itemOneClick) {
    removeItem(e.target.id)
    itemOneClick = false 
    itemOneId.classList.remove("remove")
    cartArray[1].price = 0
    totalPriceCartCalc()

    }
  
  }

  if (e.target.id === "remove2") {
    
    if (itemTwoClick) {
    removeItem(e.target.id)
    itemTwoClick = false 
    itemTwoId.classList.remove("remove")
    cartArray[2].price = 0
    totalPriceCartCalc()

    }
  
  }
    
  if (e.target.id === "remove3") {
    
    if (itemThreeClick) {
    removeItem(e.target.id)
    itemThreeClick = false 
    itemThreeId.classList.remove("remove")
    cartArray[3].price = 0
    totalPriceCartCalc()

    }
  
  }


  })



// add to cart event listner

testEl.addEventListener("click",function(e) {


  if (e.target.id === "0") {

    if (!itemZeroClick) {
        renderCart(menuArray[0].name,menuArray[0].id,menuArray[0].price,menuArray[0].emoji) 
        itemZeroClick = true
        itemZeroId.classList.add("remove")
        cartArray[0].price = 14
        totalPriceCartCalc()  
    } 
  }

  if (e.target.id === "1") {

    if (!itemOneClick) {
        renderCart(menuArray[1].name,menuArray[1].id,menuArray[1].price,menuArray[1].emoji) 
        itemOneClick = true
        itemOneId.classList.add("remove")
        cartArray[1].price = 12
        totalPriceCartCalc()
        
    } 
  }

  if (e.target.id === "2") {

    if (!itemTwoClick) {
        renderCart(menuArray[2].name,menuArray[2].id,menuArray[2].price,menuArray[2].emoji) 
        itemTwoClick = true
        itemTwoId.classList.add("remove")
        cartArray[2].price = 12
        totalPriceCartCalc()
        
    } 
  }

  if (e.target.id === "3") {

    if (!itemThreeClick) {
        renderCart(menuArray[3].name,menuArray[3].id,menuArray[3].price,menuArray[3].emoji) 
        itemThreeClick = true
        itemThreeId.classList.add("remove")
        cartArray[3].price = 20
        totalPriceCartCalc()
        
    } 
  }
 
})




// rendering itemcart
function renderCart(itemName,itemId,itemPrice,itemEmoji) {
console.log(itemName)


 
  PurchaseEl.innerHTML += `
  <div class="purchace__item--class" id="purchace__item--class--${itemId}">
  <p>${itemEmoji}</p>
   <p class="puchase__order--item">${itemName}</p>
   <button class="purchase__order--remove btn" id="remove${itemId}">Remove</button>
   <button class="purchase__order--more btn" id="more${itemId}">Add</button>
   <button class="purchase__order--minus btn" id="minus${itemId}">minus</button>
   <p class="qnt__par" id="qnt--${itemId}">Quantity: 1</p>
  <P class="purchase__order--total" id="pricetotal${itemId}">£${itemPrice}</P>
  </div>
  
  
  `
}

// adding function

let menuArraZeroAmount = 1
let menuArraOneAmount = 1
let menuArraTwoAmount = 1
let menuArraThreeAmount = 1


document.addEventListener("click",function(e){

 
 
  if (e.target.id === "more0"){
  
    menuArraZeroAmount++
    addingFromCart(0,menuArraZeroAmount)
 
   
  }

  if (e.target.id === "minus0"){
    
      if (menuArraZeroAmount  > 1) {
        
        menuArraZeroAmount--
        addingFromCart(0,menuArraZeroAmount)

      } 
      else {
        removeItem(e.target.id)
      itemZeroClick = false 
      itemZeroId.classList.remove("remove")

      }
  
   
  }


  if (e.target.id === "more1"){
  
    menuArraOneAmount++
    addingFromCart(1,menuArraOneAmount)
   
  }

  if (e.target.id === "minus1"){
    
      if (menuArraOneAmount  > 1) {
        
        menuArraOneAmount--
        addingFromCart(1,menuArraOneAmount)
      }
      
      else {
        removeItem(e.target.id)
      itemOneClick = false 
      itemOneId.classList.remove("remove")

      }
  
   
  }

  if (e.target.id === "more2"){
  
    menuArraTwoAmount++
    addingFromCart(2,menuArraTwoAmount)
 
   
  }

  if (e.target.id === "minus2"){
    
      if (menuArraTwoAmount  > 1) {
        
        menuArraTwoAmount--
        addingFromCart(2,menuArraTwoAmount)

      } 
      else {
        removeItem(e.target.id)
      itemTwoClick = false 
      itemTwoId.classList.remove("remove")

      }
  
   
  }





  if (e.target.id === "more3"){
  
    menuArraThreeAmount++
    addingFromCart(3,menuArraThreeAmount)
 
   
  }

  if (e.target.id === "minus3"){
    
      if (menuArraThreeAmount  > 1) {
        
        menuArraThreeAmount--
        addingFromCart(3,menuArraThreeAmount)

      } 
      else {
        removeItem(e.target.id)
      itemThreeClick = false 
      itemThreeId.classList.remove("remove")

      }
  
   
  }

})

function addingFromCart(event, adding) {


  
  let total = menuArray[event].price * adding




    document.getElementById(`pricetotal${event}`).innerHTML = `<p>£ ${total}</p>`
    document.getElementById(`qnt--${event}`).innerHTML = `<p> Quantity: ${adding} </p>`

    cartArray[event].price = total
    totalPriceCartCalc()

}





// removing items from cart 

function removeItem(item) {

  document.getElementById(`${item}`).parentElement.remove()

}


// modal

let modal = document.getElementById("modal")

document.getElementById("purchase__now btn").addEventListener("click",function(){


 modal.style.display = "block"
  console.log("clicked")

})

document.getElementById("back--btn").addEventListener("click",function(){
  modal.style.display = "none"

})

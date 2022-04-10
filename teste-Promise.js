let stocks = {
  fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid : ["Water", "Ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["Chocolate", "Peanuts"],
}

let isShopOpen = true;

let order = (time, work) =>{

  return new Promise((resolve, reject)=>{
    if(isShopOpen){
      setTimeout(()=>{
        resolve(work())
      }, time)
    }

    else{
      reject(console.log("Our shop is closed."))
    }

  })
}

order(2000, ()=>console.log(`${stocks.fruits[0]} was selected.`))

.then(()=>{
  return order(0000, ()=>console.log("Production has started."))
})

.then(()=>{
  return order(2000, ()=>console.log("The fruit has been chopped!"))
})

.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were selected.`))
})

.then(()=>{
  return order(1000, ()=>console.log("The machine has started."))
})

.then(()=>{
  return order(2000, ()=>console.log(`Ice cream was placed on the ${stocks.holder[1]}.`))
})

.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} was placed on the Ice Cream.`))
})

.then(()=>{
  return order(2000, ()=>console.log("Ice Cream has been served."))
})

.catch(()=>{
  console.log("The costumer has left.")
})

.finally(()=>{
  console.log("Thanks for visiting!")
})














/* let order = () => {
  return new Promise((resolve, reject)=>{
    if () {
      resolve()
    } else {
      reject()
    }
  })
} */
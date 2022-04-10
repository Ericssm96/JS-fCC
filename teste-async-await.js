let stocks = {
  fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid : ["Water", "Ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["Chocolate", "Peanuts"]
}

let isShopOpen = true;

function time(ms){
  return new Promise((resolve, reject)=>{
    if(isShopOpen){
      setTimeout(resolve, ms)
    }
    else {
      reject(console.log("shop is closed"))
    }
  })
}
async function kitchen(){
  try{
	console.log("as");
  }
  catch(error){
	console.log("asd")
  }
  finally {
  	console.log("akskdk")
  }
}
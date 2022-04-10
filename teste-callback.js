let stocks = {
  fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
  liquid : ["Water", "Ice"],
  holder : ["cone", "cup", "stick"],
  toppings : ["Chocolate", "Peanuts"],
}



let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected`);

    call_production ()
  }, 2000);


}

let production = () => {
  setTimeout(()=>{
    console.log("Production has started.")

    setTimeout(()=>{
    console.log("The fruit has been chopped!")

    setTimeout(()=>{
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

      setTimeout(()=>{
        console.log("The machine has been started!")

        setTimeout(()=>{
          console.log(`Ice cream was placed on the ${stocks.holder[1]}.`);

          setTimeout(()=>{
            console.log(`${stocks.toppings[0]} was added.`);

            setTimeout(()=>{
              console.log("Serve ice cream.");
            }, 2000)
          }, 3000)
        }, 2000)
      }, 1000)
    }, 1000)
  }, 2000);
}, 0);


}

order(0, production);
// 1st problem 
function seerToMon(seer){
    /* if(seer < 0){
        return "Plz give a positiv seer"
    } */
    let mon = seer / 40;
    return mon;
}

const seer = seerToMon(80);
console.log(seer);

// 2nd problem
function totalSales(shirtQuantity,pantQuantity,showQuantity){
    const shirtPrice = 100;
    const pantPrice = 200;
    const showPrice = 500;

    const totalCost = (shirtQuantity * shirtPrice) + (pantQuantity * pantPrice) + (showQuantity * showPrice)

    return totalCost;
}

const totalPrice = totalSales(2,3,2);
console.log(totalPrice);

// 3rd problem
function deliveryCost(tShirtQuantity){
    
    let firstDeleveryCost = 100;
    let secoendDeleveryCost = 80;
    let thierdDeleveryCost = 50;

    if(tShirtQuantity <= 100){
        const firstTotalOrder = tShirtQuantity * firstDeleveryCost;
        return firstTotalOrder;
    }
    else if(tShirtQuantity <= 200){
        const firstOrder = 100 * firstDeleveryCost;
        let restOrder = tShirtQuantity - 100;
        const secoendOrder = restOrder * secoendDeleveryCost;

        const secoendTotalOrder = firstOrder + secoendOrder;
        return secoendTotalOrder;
    }
    else{
        const firstOrder = 100 * firstDeleveryCost;
        const secoendOrder = 100 * secoendDeleveryCost;
        let restOrder = tShirtQuantity - 200;

        const thierdOrder = restOrder * thierdDeleveryCost;
        
        const thierdTotalorder = firstOrder + secoendOrder + thierdOrder;
        
        return thierdTotalorder;
    }
}
console.log(deliveryCost(201))

// 4th problem
let friendName = ["Emon","Mahi","Masud","Mishal","Nadim","Anas","Nayem"];

function perfectFriend(friendName){
    
    for(const friend of friendName){
        if(friend.length == 5){
            return friend;
        }
    }
   
}

console.log(perfectFriend(friendName));




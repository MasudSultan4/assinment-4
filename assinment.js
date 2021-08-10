// 1st problem 
function seerToMon(seer){
    if(seer > 0 && typeof(seer) == "number"){
       let mon = seer / 40; //40seer = 1mon
        return mon;
    }
    else{
        return "Enter Number Input And Positive Number" //return error message if input is not number and it's negtive number
    }
    
}

/* const seer = seerToMon(80);
console.log(seer);
 */


// 2nd problem
function totalSales(shirtQuantity,pantQuantity,showQuantity){
    const shirtPrice = 100;
    const pantPrice = 200; 
    const showPrice = 500;

    const totalCost = (shirtQuantity * shirtPrice) + (pantQuantity * pantPrice) + (showQuantity * showPrice)

    return totalCost;  //return total price
}

/* const totalPrice = totalSales(2,3,2);
console.log(totalPrice); */

// 3rd problem
function deliveryCost(tShirtQuantity){
    
    let firstDeleveryCost = 100; //first 1 to 100 t-shirt deliveryCost price 100 taka 
    let secoendDeleveryCost = 80; //secoend 101 to 200 t-shirt deliveryCost price 80 taka
    let thierdDeleveryCost = 50; //thierd 201 t-shirt deliveryCost price 50 taka

    if(tShirtQuantity < 1){
        return "Plz enter the positive number"
    }

    else if(tShirtQuantity <= 100){
        const firstTotalOrder = tShirtQuantity * firstDeleveryCost;
        return firstTotalOrder; //retan first t-shirt daliveryCost 
    }
    else if(tShirtQuantity <= 200){
        const firstOrder = 100 * firstDeleveryCost;
        let restOrder = tShirtQuantity - 100;
        const secoendOrder = restOrder * secoendDeleveryCost;

        const secoendTotalOrder = firstOrder + secoendOrder;
        return secoendTotalOrder; //retan secoend t-shirt daliveryCost
    }
    else{
        const firstOrder = 100 * firstDeleveryCost;
        const secoendOrder = 100 * secoendDeleveryCost;
        let restOrder = tShirtQuantity - 200;

        const thierdOrder = restOrder * thierdDeleveryCost;
        
        const thierdTotalorder = firstOrder + secoendOrder + thierdOrder;
        
        return thierdTotalorder; //retan secoend t-shirt daliveryCost
    }
}
// console.log(deliveryCost(201))

// 4th problem


function perfectFriend(friendsName){
    
    for(const friend of friendsName){
        if(friend.length == 5){
            return friend;
        }
    }
   
}
const friendsName = ["Emon","Mahi","Masud","Mishal","Nadim","Anas","Nayem"];

// console.log(perfectFriend(friendsName));




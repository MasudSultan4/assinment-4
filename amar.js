function deliveryCost(tshirtQuantity) {
    let firstRangePrice = 100; //first 1 to 100 per piece tshirt deliverycost 100tk.
    let secondRangePrice = 80; //second 101 to 200 per piece tshirt deliverycost 80tk.
    let restRangePrice = 50; //rest 201 to unlimited per piece tshirt deliverycost 50tk.

    if (tshirtQuantity >= 0 && typeof (tshirtQuantity) == 'number') {
        if (tshirtQuantity >= 0 && tshirtQuantity <= 100) {
            const deliveryCost = firstRangePrice * tshirtQuantity; //return first range tshirt number  total cost
            return deliveryCost;

        } else if (tshirtQuantity > 100 && tshirtQuantity <= 200) {
            let secondRangeTshirtCost = (tshirtQuantity - 100) * secondRangePrice; //return second range tshirt number  total cost
            const deliveryCost = (firstRangePrice * 100) + secondRangeTshirtCost;
            return deliveryCost;
        } else {
            let restRangeTshirtCost = (tshirtQuantity - 200) * restRangePrice; //return rest range tshirt number  total cost
            const deliveryCost = (firstRangePrice * 100) + (secondRangePrice * 100) + restRangeTshirtCost;
            return deliveryCost;
        }
    } else {
        return "Please enter positive number"; //return error message if delivery items is not positive number
    }

}



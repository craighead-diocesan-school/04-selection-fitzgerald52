// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  // write your code here
  let money = prompt('How much money do you have to spend?')
  let cost = prompt('How much money is the iteam normally?')
  let discountpercentage = prompt('And what is the sales discount ?')
  let discountdecimal = discountpercentage / 100
  discount = cost * discountdecimal
  let discountcost = 0
  discountcost = cost - discount 
  if ( money > discountcost){
    alert('you have enough money')
  } else{
    alert('you do not have enough money. you have $' + money + ' to spend, but even with ' + discountpercentage + '% off, $' + cost + ' only comes down to $' + discountcost)
  }
}

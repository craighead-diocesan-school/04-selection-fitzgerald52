// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {
  // write your code here
  let startstop = ''
  //stops the code when user enters stop
  while (startstop != 'stop') {
    let answer = prompt('what number do you want to compare to 2')
    answer = Number(answer)
    //shows code if answer is bigger than 2
    const numbertocompare = 2
    if (answer > numbertocompare) {
      alert(answer + ' is more than 2')
      //shows code if answer is smaller than 2
    } else if (answer == numbertocompare) {
      alert('that is 2 ')
    }
    //shows code if answer is 2
    else {
      alert(answer + ' is less than 2')
    }
    startstop = prompt('would you like to compare another number? if not say stop')
  }
}

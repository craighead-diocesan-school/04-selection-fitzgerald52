// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {
  // write your code here
  let startstop = ''
  while (startstop != 'stop' ){
    let answer = prompt('what number do you want to compare to 2')
    answer = Number(answer)
    if (answer > 2){
      alert ( answer + ' is more than 2')
    } else {
      alert ( answer + ' is less than 2')
    }
    startstop = prompt('would you like to compare another number? if not say stop')
  }
}

// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  // alert('Welcome to my conversation program.')

  // alert('Do you like cycling? Answer yes or no.')
  // let answer = prompt()

  // if (answer == 'yes') {
  //   alert("That's good - you will get very fit.")
  // } else {
  //   alert('Perhaps you like some other sport.')
  // }

  // alert('Goodbye')

  alert('welcome to my sports conversation program!')

  alert('Do you like basketball? answer yes or no')
  let answer = prompt()

  if (answer == 'yes' ) {
   alert('That is cool so do I ! - do you play the sport ?')
   let play =prompt()
   if (play == 'yes' ){
     alert('Its such a fun game to play !')
   } else{
     alert('Its such a fun game to whatch !')
   }
  } 
  
  else {
   alert ('Perhaps you like some other sport. do you ? ')
   let othersport = prompt()
   if(othersport=='yes'){
    alert('Sport is so much fun !')
   } else{
    alert('perhaps you have other hobbies')
   }
   
  }
  alert('Goodbye')
}
function age() {
  // write your code here
  alert('Hello welcome to my age conversation program')
  alert('what is your name ?')
  let name = prompt()
  alert('wow ' + name + ' is such a cool name')
  
  alert('How old are you ?')
  let answer =prompt()
  answer = Number(answer)
  
  if(answer > 65) {
    alert('wow you are old enough to retire')
  } else if (answer > 50){
 alert( 'wow you are middle aged !')
  } else if (answer > 30){
  alert('that is so cool you must have your life together') 
} else if (answer > 18) {
  alert('wow you are an adult')
} else if (answer > 15){
  alert('wow you can drive')
} else if (answer > 12){
  alert( 'wow you are a teenager')
} else if (answer > 5){
  alert('you can go to primary school !')
}
alert('Goodbye')


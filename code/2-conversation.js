// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('welcome to my sports conversation program!')

  alert('Do you like basketball? answer yes or no')
  let answer = prompt()

  if (answer == 'yes') {
    //if answer is yes runs code
    alert('That is cool so do I ! - do you play the sport ?')
    let play = prompt()
    if (play == 'yes') {
      //if answer is yes runs code
      alert('Its such a fun game to play !')
    } else {
      //if answer is not yes runs code
      alert('Its such a fun game to whatch !')
    }
  } else {
    //if answer is not yes runs code
    alert('Perhaps you like some other sport. do you ? ')
    let othersport = prompt()
    if (othersport == 'yes') {
      //if answer is yes runs code
      alert('Sport is so much fun !')
    } else {
      //if answer is not yes runs code
      alert('perhaps you have other hobbies')
    }
  }
  alert('Goodbye')
}
function age() {
  alert('Hello welcome to my age conversation program')
  alert('what is your name ?')
  let name = prompt()
  alert('wow ' + name + ' is such a cool name')

  alert('How old are you ?')
  let answer = prompt()
  answer = Number(answer)

  if (answer > 130) {
    alert('age unvalid')
  } else if (answer > 65) {
    alert('wow you are old enough to retire')
  } else if (answer > 50) {
    alert('wow you are middle aged !')
  } else if (answer > 30) {
    alert('that is so cool you must have your life together')
  } else if (answer > 18) {
    alert('wow you are an adult')
  } else if (answer > 15) {
    alert('wow you can drive')
  } else if (answer > 12) {
    alert('wow you are a teenager')
  } else if (answer > 5) {
    alert('you can go to primary school !')
  } else if (answer > 1) {
    alert('you are a child')
  } else if (answer < 1) {
    alert('age unvalid')
  }
  alert('Goodbye')
}

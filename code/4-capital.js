// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  let name = prompt('what is your name ?')
  let answer = prompt('quick question, ' + name + ' what is the capital of France')
  //says yes `if answer is paris
  if (answer == 'paris') {
    alert("that's right " + name)
    //says wrong if answer is anything else
  } else {
    alert('sorry that is incorrect')
  }
  //asks another question
  let second = prompt('Another quick question, what is the capital of New Zeland')
  if (second == 'wellington') {
    // says the answer is correct if input is wellington
    alert("that's right " + name)
    //says incorrect if input is anything else
  } else {
    alert('sorry that is incorrect')
  }
  alert('good work !')
}

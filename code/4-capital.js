// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  // write your code here
let name = prompt('what is your name ?')
let answer = prompt('quick question, ' + name + ' what is the capital of France')
if (answer == 'paris') {
  alert("that's right " + name)
} else {
  alert('sorry that is incorrect')
}
}

// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  let age = prompt('what is your age ?')
  age = Number(age)

  if (age > 16) {
    alert("You're old enough to drive.")
  } else{
    alert('You are not old enough to drive yet.')
  }
}

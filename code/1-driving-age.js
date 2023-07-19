// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  let age = prompt('what is your age ?')
  age = Number(age)
  const minagetodrive = 16
  if (age > minagetodrive) {
    alert("You're old enough to drive.")
  } else {
    alert('You are not old enough to drive yet.')
  }
}

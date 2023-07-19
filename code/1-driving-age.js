// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  let age = prompt('what is your age ?')
  age = Number(age)
  const minagetodrive = 16
  if (age >= minagetodrive) {
    //if age inputed is bigger than or equal to 16 says can drive
    alert("You're old enough to drive.")
  } else {
    //if age inputed is smaller say not allowed to drive
    alert('You are not old enough to drive yet.')
  }
}

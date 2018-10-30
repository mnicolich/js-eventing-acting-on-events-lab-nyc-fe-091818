const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

let dodgerPosition = 0 
// dodger.style.left = '330px'

function moveDodger(event) {
  console.log(event.which)
}
dodger.addEventlistener('keydown', moveDodger)
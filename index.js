const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

let dodgerPosition = 0 
dodger.style.left = '330px'
function moveDodger() {
  
}
dodger.addEventlistener('keydown', moveDodger)
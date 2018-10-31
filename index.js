const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

let dodgerPosition = 0 
// dodger.style.left = '330px'

function moveDodger(event) {
 const keycode = (event.which)
 if (keycode === 37) {
   
 }
}
dodger.addEventlistener('keydown', moveDodger)
const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

let dodgerPosition = 0 
// dodger.style.left = '330px'

function moveDodger(event) {
 const keycode = (event.which)
 if (keycode === 37) {
   // this is the left arrow key 
   let oldLeft = dodger.style.left
   console.log(oldLeft)
   parseInt(oldLeft, 10)
 dodger.stlye.left = oldLeft - 10
   //figure out where it is
 } else if (keycode === 39) {
   // this is the right arrow key
 } else if (keycode === 38) {
   // up arrow key
 } else if (keycode === 40) {
   //down arrow key 
 }
}
dodger.addEventlistener('keydown', moveDodger)
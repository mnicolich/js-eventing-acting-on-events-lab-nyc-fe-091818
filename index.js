const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

let dodgerPosition = 0 
// dodger.style.left = '330px'

function moveDodger(event) {
 const keycode = (event.which)
 if (keycode === 37) {
   // this is the left arrow key 
   let oldLeft = dodger.style.left
   
   if (oldLeft === '0px') {
     return
   }
   // '180px'

   console.log(oldLeft)
   oldLeft = parseInt(oldLeft, 10)
   // 180
   
   //170 + 'px'

 dodger.style.left = (oldLeft - 10) + 'px'
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
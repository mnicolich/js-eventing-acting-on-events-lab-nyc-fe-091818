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
  
  function moveDodgerRight(event) {
    if (event.which === 39) {
      
    }
  }
  
dodger.addEventlistener('keydown', moveDodger)
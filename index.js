const dodger = document.getElementById('dodger')

dodger.style.backgroundColor = 'pink'

let dodgerPosition = 0 
// dodger.style.left = '330px'

function moveDodger(event) {
 const keycode = (event.which)
}
 if (keycode === 37) {
   
   // this is the left arrow key 
   let oldLeft = dodger.style.left
 }
   if (oldLeft === '0px') {
     return
   }
   // '180px'

   console.log(oldLeft)
   oldLeft = parseInt(oldLeft, 10)
   // 180
   
   //170 + 'px'

 dodger.style.left = (oldLeft - 10) + 'px'
 } else if (keycode == 39) {
   moveDodgerRight(event)
 }
  
  function moveDodgerRight(event) {
    if (event.which === 39) {
      let oldLocation = dodger.style.left 
      //'180px'
      
      if (oldLocation === '360px') {
        return
      }  
      
    oldLocation = parseInt(oldLocation, 10)
    //180
    
    dodger.style.left = (oldLocation + 10) + 'px'
    }
  }
  document.addEventListener('keydown', moveDodger)
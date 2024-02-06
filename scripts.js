function greetMe() {
    console.log("Hello!!");
  }
 
   function updateButtonText() {
        myTrigger.textContent = "Button Clicked!";
      }
  myTrigger.addEventListener('click', updateButtonText);
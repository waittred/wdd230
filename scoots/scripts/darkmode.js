//Dark Mode//
function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
     // Get the button element
     let button = document.querySelector('button');
  
     // Enable or disable dark mode on or off//
     if (element.classList.contains("dark-mode")) {
       button.textContent = "Dark Mode On";
     } else {
       button.textContent = "Dark Mode Off";
     }
   }

const text = document.querySelector(".second-text");

 const textLoad = () => {
   setTimeout(() => {
      text.textContent = "Web Designer ";
   } , 0);
   setTimeout(()=> {
      text.textContent = "Frontend Developer ";
   } , 4000);
   
 
 }
//  textLoad(); void
 textLoad();
 setInterval(textLoad, 12000) ;
//  nav==========

function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }
 // =======================
  function showslide(){
    const sidebar = document.querySelector (".sidebar")
 sidebar.style.display ="flex"
  }
 
  function hideslider(){
   const sidebar = document.querySelector (".sidebar")
 sidebar.style.display ="none"
 }
 function myFunction() {
   alert("Hello! I am an alert box!");
 }

//  =====================nabbar 

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const closeBtn = document.getElementById('closeBtn');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
});
// mybtn

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Button 

// Select the toggle switch input
const modeToggle = document.getElementById('modeToggle');

// Function to switch between dark and light mode
function toggleMode() {
    // Check if the toggle is checked (true = dark mode)
    if (modeToggle.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}

// Add event listener to the toggle switch
modeToggle.addEventListener('change', toggleMode);

// Default to light mode on page load
window.onload = () => {
    document.body.classList.add('light-mode');
};


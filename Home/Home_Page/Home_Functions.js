// Defining the variables for open menu
let nav = document.querySelector(".nav-container");

let menuOpenBtn = document.querySelector(".Container .bx-menu");

let menuCloseBtn = document.querySelector(".nav-container .bx-x");

var audio_o = new Audio('Home/Home_Page/Open_Menu.mp3');

var audio_c = new Audio('Home/Home_Page/Close_Menu.mp3')


// Open Menu when user click button
menuOpenBtn.onclick = function()
{
  audio_o.play();
  nav.style.left = "0";
}

menuCloseBtn.onclick = function()
{
  audio_c.play();
  nav.style.left = "-100%";
}


// Defining the variables for show list elements 
let customWebArrow = document.querySelector(".CheckT");

let jsArrow = document.querySelector(".CheckG");

// Open list when user click on menu buttons */
customWebArrow.onclick = function() 
{
  nav.classList.toggle("show1");
}

// -------------- Define All query elements ------------------------------

// PC menu elements
let Pc_L = document.querySelector(".PC_Link");
let PC_L_1 = document.querySelector(".PC_Link_1");

// Mobile menu Elements
let MB_L = document.querySelector(".Mobile_Link");
let MB_L_1 = document.querySelector(".Mobile_Link_1");

// Mobile Pargraph
let MB_p = document.querySelector(".Mobile_Paragraph");

// PC Pargraph
let PC_p = document.querySelector(".Pc_Paragraph");

//Stars move with device orentation
const background = document.querySelector(".dark-b-container");
const move = 5;

//When Click on Mobile menu Elements do margin 0 and padding 0
MB_L.addEventListener('click', function()
{
  MB_L.style = "margin: 0; padding: 0;";
});

MB_L_1.addEventListener('click', function()
{
  MB_L_1.style = "margin: 0; padding: 0;";
});

//Remove pc elements when media query is active
var x = window.matchMedia("(max-width: 1024px)")
myFunction(x)
x.addListener(myFunction)
function myFunction(x)
{
  if (x.matches)
  {
    //Remove Pc Elements
    Pc_L.style.display = "none";
    PC_L_1.style.display = "none";
    PC_p.style.display = "none";

    //Add Mobile Elements
    MB_L.style.display = "block";
    MB_L_1.style.display = "block";
    MB_p.style.display = "block";

    //Gyroscope Backgorund
    const handleMotion = e => 
    {
      const x = Math.round(e.accelerationIncludingGravity.x) * move;
      const y = Math.round(e.accelerationIncludingGravity.y) * move;
      const z = Math.round(e.accelerationIncludingGravity.z) * move;
      
      background.style.transform = `translate3d(${-x}px, ${y}px, ${z}px)`;
    }

    window.addEventListener("devicemotion", handleMotion, true);
  }

  else
  {
    //Remove Mobile Elements
    MB_L.style.display = "none";
    MB_L_1.style.display = "none";
    MB_p.style.display = "none";

    //Add Pc Elements
    Pc_L.style.display = "block";
    PC_L_1.style.display = "block";
    PC_p.style.display = "block";

    //Gyroscope Backgorund
    const handleMotion = e => 
    {
      const x = Math.round(e.accelerationIncludingGravity.x) * move;
      const y = Math.round(e.accelerationIncludingGravity.y) * move;
      const z = Math.round(e.accelerationIncludingGravity.z) * move;
      
      background.style.transform = `translate3d(0px, 0px, 0px)`;
    }

    window.addEventListener("devicemotion", handleMotion, true);
  }
}

//Loading
window.onload = function()
{
	setTimeout(function()
  {
	  var loader = document.getElementsByClassName("loader")[0];
	  loader.className="loader fadeout";
	  setTimeout(function()
    {
      loader.style.display="none";
    },2200);
	},2200);
};

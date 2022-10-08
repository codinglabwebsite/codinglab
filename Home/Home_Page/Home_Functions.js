/* Defining the variables */
let nav = document.querySelector(".nav-container");

let menuOpenBtn = document.querySelector(".Container .bx-menu");

let menuCloseBtn = document.querySelector(".nav-container .bx-x");

var audio_o = new Audio('Home/Home_Page/Open_Menu.mp3');

var audio_c = new Audio('Home/Home_Page/Close_Menu.mp3')


/*Open Menu when user click button*/
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


/* Defining the variables */
let customWebArrow = document.querySelector(".CheckT");

let jsArrow = document.querySelector(".CheckG");

/*Open list when user click on menu buttons*/
customWebArrow.onclick = function() 
{
  nav.classList.toggle("show1");
}

/*Remove pc email links for mobile*/
var x = window.matchMedia("(max-width: 1024px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
function myFunction(x)
{
    if (x.matches) 
    { // If media query matches
      document.querySelector(".PC_Link").style.display = "none";
      document.querySelector(".PC_Link_1").style.display = "none";
      document.querySelector(".Mobile_Link").style.display = "block";
      document.querySelector(".Mobile_Link").onclick = function()
      {
        document.querySelector(".Mobile_Link").style = "padding: 0; margin: 0;";
      };
      document.querySelector(".Mobile_Link_1").style.display = "block";
      document.querySelector(".Mobile_Link_1").onclick = function()
      {
        document.querySelector(".Mobile_Link_1").style = "padding: 0; margin: 0;";
      };
    } 
    else 
    {
      document.querySelector(".Mobile_Link").style.display = "none";
      document.querySelector(".Mobile_Link_1").style.display = "none";
      document.querySelector(".PC_Link").style.display = "block";
      document.querySelector(".PC_Link_1").style.display = "block";
    }
}

//Loading Function
window.onload = function()
{
	setTimeout(function()
  {
	  var loader = document.getElementsByClassName("loader")[0];
	  loader.className="loader fadeout";
	  setTimeout(function()
    {
      loader.style.display="none"
    },2200);
	},2200);
};

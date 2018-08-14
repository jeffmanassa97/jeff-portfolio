// DOM(document object model - ui structure - html tags and attributes, nav lists, branding)
// Select DOM Items

// querySelector acts like jQuery - select class, id, or elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
// since there's multiple nav-items, use querySelectorAll
// querySelectorAll will put them in a node list, similar to an array
// regular querySelector will only take the first one
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State Of Menu - Overlay
let showMenu = false;

// wait for click event, then do function toggleMenu
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    // add a class by .classList.add - close and show class
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    // need to loop through all the nav-items and add the show class to each one
    // forEach high order array method
    // pass in a variable you want to represent each item
    // arrow function =>
    // for Each nav item we want to add the "show" class
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    // COMMAND + D x5 selects all of what you highlight
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];
let dir1;
let dir2;

function navAnimation(dir1, dir2) {
  navItems.forEach((nav, i) => nav.classList.replace(dir1 + (i + 1), dir2 + (i + 1)));
}

function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Set slide-ins
    navAnimation('slide-out-', 'slide-in-');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Set slide-outs
    navAnimation('slide-in-', 'slide-out-');
  }
}

menuBars.addEventListener('click', toggleNav);

navItems.forEach((navItem) => navItem.addEventListener('click', toggleNav));
const dropdownmenu = document.getElementById('dropdownmenu');
const dropdown = document.getElementById('dropdown');
const subdropdown = document.querySelectorAll('.js_subdropdown');
const subdropdownicon = document.querySelectorAll('.js_subdropdownIcon');
const overlay = document.getElementById('overlay');

dropdown.style.transition = '0.3s';

let isOpen = false;

function handleClick(event) {
  if (isOpen) {
    dropdownmenu.classList.add('dropdownmenu_close');
    dropdownmenu.classList.remove('dropdownmenu_open');
    dropdown.style.transform = 'rotate(0)';
    overlay.style.display = 'none';
  } else {
    dropdownmenu.classList.add('dropdownmenu_open');
    dropdownmenu.classList.remove('dropdownmenu_close');
    dropdown.style.transform = 'rotate(90deg)';
    overlay.style.display = 'block';
  }
  isOpen = !isOpen;
}

function handleMouseOver(event) {
  try {
    event.target.querySelector('.js_subdropdownIcon').style.transform = 'rotate(-90deg)';
  } catch {
    event.target.style.transform = 'rotate(-90deg)';
  }
}

function handleMouseOut(event) {
  try {
    event.target.querySelector('.js_subdropdownIcon').style.transform = 'rotate(0)';
  } catch {
    event.target.style.transform = 'rotate(0)';
  }
}

dropdown.addEventListener('click', handleClick);

for (const s in subdropdown) {
  if (!isNaN(parseInt(s))) {
    subdropdown[s].style.transition = '0.3s';
    subdropdownicon[s].style.transition = '0.3s';
    subdropdown[s].addEventListener('mouseover', handleMouseOver);
    subdropdown[s].addEventListener('mouseout', handleMouseOut);
  }
}
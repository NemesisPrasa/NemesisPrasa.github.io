const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDown = document.querySelector('.drop-down');

toggleBtn.onclick = function(){
  dropDown.classList.toggle('open');
  const isOpen = dropDown.classList.contains('open');

  toggleBtnIcon.classList = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
};
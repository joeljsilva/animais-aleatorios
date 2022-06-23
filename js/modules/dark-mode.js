export default function initDarkMode() {
  const btnDarkMode = document.querySelector('.dark-mode');
  const btnAnimal = document.querySelector('.btn-animal');
  const header = document.querySelector('.header-bg');
  const body = document.querySelector('.corpo');
  const footer = document.querySelector('footer');
  const h2 = document.querySelectorAll('h2');
  function darkMode() {
    header.classList.toggle('dark-modeBG1');
    btnAnimal.classList.toggle('dark-modeBG1');
    body.classList.toggle('dark-modeBG2');
    footer.classList.toggle('dark-modeBG1');
    h2.forEach((item) => item.classList.toggle('dark-modeText'));
    btnDarkMode.classList.toggle('dark-modeText');
    btnDarkMode.classList.toggle('dark-modeBG1')
    if (btnDarkMode.classList.contains('dark-modeBG1')) {
      btnDarkMode.innerText = 'Light Mode'
    } else {
      btnDarkMode.innerText = 'Dark Mode'
    }
  }
  btnDarkMode.addEventListener('click', darkMode)
};


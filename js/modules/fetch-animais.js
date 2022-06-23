export default function initFetchAnimais() {
  const animalNome = document.querySelector('.animal-nome');
  const animalLatim = document.querySelector('.animal-latim');
  const animalHorario = document.querySelector('.animal-horario');
  const animalHabitat = document.querySelector('.animal-habitat');
  const animalAlimentacao = document.querySelector('.animal-alimentacao');
  const animalImg = document.querySelector('.animal-img img');
  const btnAnimal = document.querySelector('.btn-animal');
  function fetchAnimais() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
      .then((response) => response.json())
      .then((data) => {
        animalNome.innerHTML = data.name;
        animalLatim.innerHTML = data.latin_name;
        animalHorario.innerHTML = data.active_time;
        animalHabitat.innerHTML = data.habitat;
        animalAlimentacao.innerHTML = data.diet;
        animalImg.setAttribute('src', data.image_link);
      })
  }
  btnAnimal.addEventListener('click', fetchAnimais);
};
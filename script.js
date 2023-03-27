const pswrd = document.getElementById('pswrd');
const pswrdVerif = document.getElementById('pswrdVerif');

pswrdVerif.addEventListener('input', () => {
  if (pswrdVerif.value != pswrd.value && pswrdVerif.value != '') {
    pswrd.classList.add('pswrdInvalid');
    pswrdVerif.classList.add('pswrdInvalid');
  } else {
    pswrd.classList.remove('pswrdInvalid');
    pswrdVerif.classList.remove('pswrdInvalid');
  }
});

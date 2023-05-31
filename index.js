
const navLinks = document.querySelectorAll('.sidebar nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach((link) => link.classList.remove('active'));
    link.classList.add('active');
  });
});


const submitButton = document.querySelector('form button');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('clientname');
  const emailInput = document.getElementById('clientemail');
  const phoneInput = document.getElementById('clientphone');

  // Validating form
  if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
    alert('Please fill in all the fields.');
  } else {

    alert('Thank you for submitting!');
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
  }
});


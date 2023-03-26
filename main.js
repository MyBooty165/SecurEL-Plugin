const bannedDomains = ['edu.cfisd.net'];
const redirectDomains = {
  'stu.cfisd.net': 'https://example.com' // Replace with your desired URL
};
const emailInput = document.querySelector('input[type="email"]');
const submitButton = document.querySelector('input[type="submit"]');

emailInput.addEventListener('input', (event) => {
  const emailDomain = event.target.value.split('@')[1];
  if (bannedDomains.includes(emailDomain)) {
    submitButton.disabled = true;
    window.location.href = 'blockpage.html';
  } else if (redirectDomains[emailDomain]) {
    window.location.href = redirectDomains[emailDomain];
  } else {
    submitButton.disabled = false;
  }
});

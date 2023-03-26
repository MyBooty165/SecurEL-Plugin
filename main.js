const bannedDomains = ['edu.cfisd.net'];
const redirectDomains = {
  'stu.cfisd.net': 'https://example.com' // Replace with your desired URL
};
const emailInput = document.querySelector('input[type="email"]');
const submitButton = document.querySelector('input[type="submit"]');
const messageElement = document.querySelector('#message');

emailInput.addEventListener('input', (event) => {
  const emailDomain = event.target.value.split('@')[1];
  if (bannedDomains.includes(emailDomain)) {
    submitButton.disabled = true;
    window.location.href = 'blockpage.html';
  } else if (redirectDomains[emailDomain]) {
    messageElement.textContent = 'Access Granted!';
    messageElement.style.color = 'green';
    setTimeout(() => {
      messageElement.textContent = 'Redirecting to Tam´s Game Hub';
      messageElement.style.color = 'black';
      messageElement.style.fontWeight = 'bold';
      setTimeout(() => {
        window.location.href = redirectDomains[emailDomain];
      }, 3000);
    }, 1000);
  } else {
    submitButton.disabled = false;
  }
});

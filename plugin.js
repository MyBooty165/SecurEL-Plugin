// plugin.js
function getEmailDomain() {
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
  const email = document.cookie.match(emailRegex)[0];
  const domain = email.split('@')[1];
  return domain;
}

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const accessDenied = document.getElementById('access-denied');
  const accessGranted = document.getElementById('access-granted');
  
  const domain = getEmailDomain();

  setTimeout(() => {
    loader.style.display = 'none';

    if (domain === 'edu.cfisd.net') {
      accessDenied.style.display = 'block';
    } else {
      accessGranted.style.display = 'block';
    }
  }, 3000);
});

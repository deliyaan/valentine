const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.accordion-item');
    const isOpen = item.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const pleaseText = document.getElementById('pleaseText');

if (yesBtn && noBtn && pleaseText) {
  let noClicks = 0;

  noBtn.addEventListener('click', () => {
    noClicks += 1;
    const yesScale = Math.min(1 + noClicks * 0.25, 2.6);
    const noScale = Math.max(1 - noClicks * 0.17, 0.12);

    yesBtn.style.transform = `scale(${yesScale})`;
    noBtn.style.transform = `scale(${noScale})`;
    noBtn.style.opacity = `${Math.max(1 - noClicks * 0.18, 0.15)}`;

    pleaseText.textContent = 'Ну пожалуйста 🥺';
  });

  yesBtn.addEventListener('click', () => {
    window.location.href = 'success.html';
  });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

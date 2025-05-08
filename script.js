document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    answer.style.display = 'none';
    question.addEventListener('click', () => {
      const isOpen = answer.style.display === 'block';
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  const playButton = document.querySelector('.play-button');
  playButton.addEventListener('click', () => {
    window.open('https://scratch.mit.edu/projects/1171645176/', '_blank');
  });

  const ayaanButton = document.querySelector('.ayaan');
  const joeButton = document.querySelector('.joe');
  const jackeyButton = document.querySelector('.jackey');

  const ayaanText = "Ayaan is one of the visionary co-creators of *Muscle Man is Hungry*. He led the website and game design with precision and creativity, shaping a vibrant experience that celebrates teamwork and nutrition.";
  const joeText = "Joe stands as the main coder of *Muscle Man is Hungry*. He developed the gameplay mechanics and worked tirelessly on perfecting Evan's movements and Muscle Man’s animations.";
  const jackeyText = "Jake designed the adorable character Evan the Cat and created the dynamic game environments. His artwork brings the quest for magical protein to life.";

  const modal = document.createElement('div');
  modal.className = 'modal';
  document.querySelector('.account').appendChild(modal);

  function showModal(text) {
    modal.textContent = text;
    modal.classList.add('active');
  }

  function hideModal() {
    modal.classList.remove('active');
  }

  ayaanButton.addEventListener('click', () => {
    hideModal();
    showModal(ayaanText);
  });

  joeButton.addEventListener('click', () => {
    hideModal();
    showModal(joeText);
  });

  jackeyButton.addEventListener('click', () => {
    hideModal();
    showModal(jackeyText);
  });

  document.addEventListener('click', (e) => {
    if (!modal.contains(e.target) && !e.target.matches('.ayaan, .joe, .jackey')) {
      hideModal();
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  // FAQ Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    answer.style.display = 'none';
    question.addEventListener('click', () => {
      const isOpen = answer.style.display === 'block';



      document.querySelectorAll('.faq-answer').forEach(a => {
        a.style.display = 'none';
      });
      
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  const playButton = document.querySelector('.play-button');
  playButton.addEventListener('click', () => {
    window.open('https://scratch.mit.edu/projects/1171645176/', '_blank');

  });

  const ayaanButton = document.querySelector('.ayaan');
  const joeButton = document.querySelector('.joe');
  const jackeyButton = document.querySelector('.jackey');

  const ayaanText = "Ayaan is one of the visionary co-creators of *Turbo's Hungry*. He played a pivotal role in both the coding and design of the game, showcasing his remarkable talent as a developer and creative designer. Beyond his technical contributions, Ayaan is a close friend of Joe, the other co-creator of the game. Ayaan also singlehandedly designed and developed the game's official website—a fully functional and visually engaging platform that complements the gameplay experience beautifully.";

  const joeText = "Joe stands as one of the brilliant co-creators of *Turbo's Hungry* and served as the primary architect of the game. He built the game from the ground up, pouring his exceptional skills in coding and design into every detail. A dedicated innovator, Joe spent countless hours debugging and refining the game, ensuring it delivers an engaging and polished experience. He shares a strong friendship with Ayaan, reflecting the collaborative spirit behind the project.";

  const jackeyText = "Jake is the creative mind behind Turbo the Snail's design, bringing the game's charming protagonist to life. He also crafted the vibrant background art that sets the scene for the adventure. Jake is a close friend of both Ayaan and Joe.";


  // Create modal element
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

  // Close modal when clicking outside
  document.addEventListener('click', (e) => {
    if (!modal.contains(e.target) && !e.target.matches('.ayaan, .joe, .jackey')) {
      hideModal();
    }
  });
});

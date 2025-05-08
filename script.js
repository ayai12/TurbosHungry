
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

  const ayaanText = "Ayaan is one of the visionary co-creators of Turbo's Hungry. He played a pivotal role in both coding and design, showcasing his remarkable talent as a developer and creative designer. Beyond his technical contributions, Ayaan is a close friend of Joe, the game's other co-creator. He also singlehandedly designed and developed the game's official website—a fully functional and visually engaging platform that beautifully complements the gameplay experience. Ayaan struggled with the CSS of the website due to his perfectionism, as he wanted every detail to be just right.";

  const joeText = "Joe is one of the brilliant co-creators of Turbo's Hungry and served as the game's primary architect. He built the game from the ground up, pouring his exceptional coding and design skills into every detail. A dedicated innovator, Joe spent countless hours debugging and refining the game to ensure an engaging and polished experience. He shares a strong friendship with Ayaan, reflecting the project's collaborative spirit. Joe struggled with Scratch due to its inconsistencies and lack of robust bug support.";

  const jackeyText = "Jake is the creative mind behind the game's background art. He is also a close friend of Ayaan and Joe. Jake struggled with communication with the other two creators, which posed challenges during the development process.";

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

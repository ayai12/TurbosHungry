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

  // Play Button Interaction
  const playButton = document.querySelector('.play-button');
  playButton.addEventListener('click', () => {
    window.open('https://scratch.mit.edu/projects/1171645176/', '_blank');
  });

  // Account Button Interaction for Creators
  const ayaanButton = document.querySelector('.ayaan');
  const joeButton = document.querySelector('.joe');
  const jackeyButton = document.querySelector('.jackey');

  // Updated Struggles of Creators
  const ayaanText = "Ayaan is one of the visionary co-creators of *Muscle Man is Hungry*. He led the website and game design with precision and creativity, shaping a vibrant experience that celebrates teamwork and nutrition. Ayaan struggled with the CSS of the website due to his perfectionism, as he wanted every detail to be just right, especially ensuring that Muscle Man’s look and feel matched his heroic persona.";
  
  const joeText = "Joe is the brilliant coder behind *Muscle Man is Hungry*. He built the game from the ground up, especially focusing on Muscle Man's animations and movements. Joe struggled with debugging complex issues in Scratch, as the tool wasn’t ideal for such detailed animations, and he faced frustrations with the inconsistencies in how the game’s environment was rendered.";
  
  const jackeyText = "Jake is the creative mastermind behind the adorable Evan the Cat and the dynamic game environments. He designed the levels where Muscle Man must navigate obstacles to collect magical protein. Jake struggled with communication at times, as coordinating between the art and coding teams proved difficult, but the result was a visually stunning game that perfectly complemented the gameplay experience.";

  // Modal Creation
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

  // Event listeners for Creator Buttons
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

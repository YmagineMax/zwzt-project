// Button for hamburger menu
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav__links')[0]


toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
})

// Get the button and the section elements
const toggleCompletedChallengesBtn = document.getElementById('cmted_chall_btn');
const completedChallengesSection = document.getElementById('sec_cmted');

// Add click event listener to the button
toggleCompletedChallengesBtn.addEventListener('click', () => {
  // Check the current display style of the section and toggle it
  if (completedChallengesSection.style.display === 'none' || completedChallengesSection.style.display === '') {
    completedChallengesSection.style.display = 'block';
    toggleCompletedChallengesBtn.textContent = 'Schowaj zakończone wyzwania';
  } else {
    completedChallengesSection.style.display = 'none';
    toggleCompletedChallengesBtn.textContent = 'Sprwadź zakończone wyzwania';
  }
});

document.querySelectorAll('.challenge-container').forEach(container => {
    container.addEventListener('click', (event) => {
      // Prevent click event from affecting parent elements
      event.stopPropagation();
  
      const extendedInfo = container.querySelector('.extended-info');
      const isVisible = extendedInfo.style.display === 'block';
      extendedInfo.style.display = isVisible ? 'none' : 'block';
    });
  });
  

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

document.addEventListener('DOMContentLoaded', () => {
    // Function to close the modal
    function closeModal(modal) {
      modal.style.display = 'none';
    }
  
    // Open the modal when the challenge container is clicked
    document.querySelectorAll('.challenge-container').forEach(container => {
      container.addEventListener('click', (event) => {
        // Prevent the click from affecting parent elements
        event.stopPropagation();
  
        // Open the modal
        const extendedInfo = container.querySelector('.extended-info');
        extendedInfo.style.display = 'flex'; // Use 'flex' to center the modal content
      });
    });
  
    // Close the modal when the close button is clicked
    document.querySelectorAll('.close-button').forEach(button => {
      button.addEventListener('click', (event) => {
        // Prevent the click from affecting parent elements
        event.stopPropagation();
  
        // Close the modal
        const extendedInfo = button.closest('.extended-info');
        closeModal(extendedInfo);
      });
    });
  });
  

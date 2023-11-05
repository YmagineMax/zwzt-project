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
  
    // Open the modal when the action button is clicked
    document.querySelectorAll('.action').forEach(button => {
      button.addEventListener('click', (event) => {
        // Prevent the click from affecting parent elements
        event.stopPropagation();
  
        // Find the closest item-container ancestor to the button and then find the extended-info within it
        const itemContainer = button.closest('.item-container');
        const extendedInfo = itemContainer.querySelector('.extended-info');
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
  
    // Optional: Close the modal when clicking outside of it
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains('extended-info')) {
        closeModal(event.target);
      }
    });
  });
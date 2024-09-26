document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const overlay = document.getElementById('overlay');
    const displayCard = document.getElementById('displayCard');
    const dareText = document.getElementById('dareText');
    const closeButton = document.getElementById('closeButton');

    // Add click event listener to each card
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const dare = this.getAttribute('data-dare');

            // Check if the card has already been used
            if (this.classList.contains('used')) return;

            // Show the selected dare in the overlay
            dareText.innerText = dare;

            // Show the overlay and make the card appear in the center
            overlay.classList.add('active');
            displayCard.classList.add('active');

            // Mark the card as used by adding a class and updating the content with the dare
            this.classList.add('used');
            this.innerHTML = dare; // Show the dare on the card itself
        });
    });

    // Close button to hide the overlay
    closeButton.addEventListener('click', () => {
        overlay.classList.remove('active');
        displayCard.classList.remove('active');
    });

    // Click outside the card to close
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            displayCard.classList.remove('active');
        }
    });
});

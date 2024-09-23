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
            dareText.innerText = dare;

            // Show the overlay and make the card appear in the center
            overlay.classList.add('active');
            displayCard.classList.add('active');
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

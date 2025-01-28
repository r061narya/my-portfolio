// Initialize AOS (Animate On Scroll) library
AOS.init({ offset: 0 });

// Function to toggle the dropdown menu on mobile screen sizes
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('active');
}

// Close the dropdown if the window is resized to a larger size
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelector('.dropdown').classList.remove('active');
    }
});

// Function to close the dropdown menu
function cancel() {
    document.querySelector('.dropdown').classList.remove('active');
}

// Typewriter effect function
function typewriterEffect() {
    const roles = ["Student","Web-Developer","Designer"]; // Roles to display
    let index = 0; // Index for roles
    let charIndex = 0; // Index for characters
    const typewriterText = document.querySelector('.typewriter-text');
    
    function type() {
        if (charIndex < roles[index].length) {
            typewriterText.textContent += roles[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Typing speed
        } else {
            setTimeout(deleteText, 1000); // Pause before deleting
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            typewriterText.textContent = roles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, 100); // Deleting speed
        } else {
            index = (index + 1) % roles.length; // Move to the next role
            setTimeout(type, 500); // Pause before typing the next role
        }
    }

    // Start typing the first role
    type();
}

// Call typewriter effect function
typewriterEffect();

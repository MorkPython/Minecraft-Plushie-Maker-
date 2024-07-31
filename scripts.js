document.addEventListener('DOMContentLoaded', (event) => {
    let secretCode = 'Ugugula';
    let userInput = '';

    // Function to handle secret code detection
    function checkSecretCode(input) {
        if (input === secretCode) {
            document.querySelector('.menu-container').classList.add('red-bg');
            let secretMessage = document.createElement('div');
            secretMessage.className = 'secret-message';
            secretMessage.innerText = 'Welcome to the underworld. Have fun here bro :P';
            document.body.appendChild(secretMessage);
        }
    }

    // Handle key presses for the secret code
    document.addEventListener('keydown', (e) => {
        userInput += e.key;
        if (userInput.length > secretCode.length) {
            userInput = userInput.slice(-secretCode.length);
        }
        checkSecretCode(userInput);
    });

    // Show options GUI
    window.showOptions = function() {
        document.getElementById('skin-tricks-menu').classList.add('active');
    }

    // Hide options GUI
    window.closeOptions = function() {
        document.getElementById('skin-tricks-menu').classList.remove('active');
    }

    // Handle Quit Game button click
    window.quitGame = function() {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Rickroll link
    }

    // Toggle Dark Mode
    window.toggleDarkMode = function() {
        document.body.classList.toggle('dark-mode');
    }

    // Adjust Brightness
    window.adjustBrightness = function(value) {
        document.body.style.filter = `brightness(${value}%)`;
    }

    // Navigation function
    window.navigate = function(page) {
        window.location.href = page;
    }
});

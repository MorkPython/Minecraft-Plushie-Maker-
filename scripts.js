document.addEventListener('DOMContentLoaded', () => {
    let secretCode = '';
    const easterEggText = 'Welcome to the underworld. have fun here bro :P';
    const secretMessage = document.createElement('div');
    secretMessage.className = 'secret-message';
    secretMessage.textContent = easterEggText;

    document.body.appendChild(secretMessage);

    function showOptions() {
        document.querySelector('.options-gui').classList.add('active');
    }

    function closeOptions() {
        document.querySelector('.options-gui').classList.remove('active');
    }

    function quitGame() {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; // Rickroll URL
    }

    function adjustBrightness(value) {
        document.body.style.filter = `brightness(${value}%)`;
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }

    document.addEventListener('keydown', (event) => {
        secretCode += event.key;
        
        if (secretCode.includes('ugugula')) {
            document.querySelector('.menu-container').classList.add('red-bg');
            secretCode = ''; // Reset secret code after triggering
        } else if (secretCode.includes('einsteinpig')) {
            document.querySelector('.menu-container').classList.remove('red-bg');
            secretMessage.style.display = 'none'; // Hide secret message
            secretCode = ''; // Reset secret code after triggering
        }
    });

    window.showOptions = showOptions;
    window.closeOptions = closeOptions;
    window.quitGame = quitGame;
    window.adjustBrightness = adjustBrightness;
    window.toggleDarkMode = toggleDarkMode;
});

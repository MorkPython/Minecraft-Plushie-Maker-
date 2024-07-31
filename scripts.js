let keySequence = 'ugugula' or 'einstein';
let currentInput = '';

document.addEventListener('keydown', function(event) {
    currentInput += event.key;

    if (currentInput.toLowerCase().includes(keySequence.toLowerCase())) {
        document.querySelector('.menu-container').classList.add('red-bg');
        const secretMessage = document.createElement('div');
        secretMessage.className = 'secret-message';
        secretMessage.innerText = 'Welcome to the underworld. Have fun here bro :P';
        document.body.insertBefore(secretMessage, document.body.firstChild);
        currentInput = '';
    }

    if (currentInput.length > keySequence.length) {
        currentInput = currentInput.slice(-keySequence.length);
    }
});

function navigate(page) {
    window.location.href = page;
}

function showOptions() {
    document.getElementById('skin-tricks-menu').classList.add('active');
}

function closeOptions() {
    document.getElementById('skin-tricks-menu').classList.remove('active');
}

function quitGame() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function adjustBrightness(value) {
    document.body.style.filter = `brightness(${value}%)`;
}

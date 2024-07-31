let keySequence = 'Ugugula';
let currentInput = '';

document.addEventListener('keydown', function(event) {
    // Append the key pressed to the current input
    currentInput += event.key;

    // Check if the current input matches the key sequence
    if (currentInput.toLowerCase().includes(keySequence.toLowerCase())) {
        document.querySelector('.menu-container').classList.add('red-bg');
        const secretMessage = document.createElement('div');
        secretMessage.className = 'secret-message';
        secretMessage.innerText = 'Welcome to the underworld. Have fun here bro :P';
        document.body.insertBefore(secretMessage, document.body.firstChild);
        // Reset the current input
        currentInput = '';
    }

    // Reset current input if it exceeds the key sequence length
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

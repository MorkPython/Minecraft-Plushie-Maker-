// Global variables to track the secret code sequence
const secretCode = "ugugula";
const secretCodeReverse = "einsteinpig";
let inputSequence = "";
let easterEggActivated = false;

// Function to handle secret code input
function handleInput(event) {
    inputSequence += event.key.toLowerCase();

    if (inputSequence.includes(secretCode)) {
        activateEasterEgg();
        inputSequence = ""; // Reset input sequence
    } else if (inputSequence.includes(secretCodeReverse)) {
        deactivateEasterEgg();
        inputSequence = ""; // Reset input sequence
    }
}

// Function to activate the easter egg
function activateEasterEgg() {
    document.querySelector(".menu-container").classList.add("red-bg");
    const secretMessage = document.createElement("div");
    secretMessage.className = "secret-message";
    secretMessage.textContent = "Welcome to the underworld. have fun here bro :P";
    document.body.appendChild(secretMessage);
    easterEggActivated = true;
}

// Function to deactivate the easter egg
function deactivateEasterEgg() {
    document.querySelector(".menu-container").classList.remove("red-bg");
    const secretMessage = document.querySelector(".secret-message");
    if (secretMessage) {
        document.body.removeChild(secretMessage);
    }
    easterEggActivated = false;
}

// Event listener for keyboard input
document.addEventListener("keydown", handleInput);

// Function to navigate to a new page
function navigate(page) {
    window.location.href = page;
}

// Function to show the options GUI
function showOptions() {
    document.querySelector(".options-gui").classList.add("active");
}

// Function to hide the options GUI
function hideOptions() {
    document.querySelector(".options-gui").classList.remove("active");
}

// Function to quit the game (redirects to a rickroll)
function quitGame() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

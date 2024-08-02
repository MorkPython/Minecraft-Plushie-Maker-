document.addEventListener('DOMContentLoaded', function () {
    let step = 1;
    const maxSteps = 9;

    // Elements and Variables
    const optionsGui = document.querySelector('.options-gui');
    const secretMessage = document.createElement('div');
    secretMessage.classList.add('secret-message');
    document.body.appendChild(secretMessage);

    function updateStep() {
        console.log(`Current Step: ${step}`);
    }

    // Next Step Function
    function nextStep() {
        if (step < maxSteps) {
            step++;
            updateStep();
        }
    }

    // Previous Step Function
    function previousStep() {
        if (step > 1) {
            step--;
            updateStep();
        }
    }

    document.getElementById('open-options')?.addEventListener('click', () => {
        optionsGui.classList.add('active');
    });

    document.getElementById('close-options')?.addEventListener('click', () => {
        optionsGui.classList.remove('active');
    });

    document.getElementById('dark-mode-toggle')?.addEventListener('change', (event) => {
        if (event.target.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    // Easter egg functionality
    let secretCode = '';
    const secretPhrase = 'ugugula';
    const resetPhrase = 'einsteinpig';
    const cheesePhrase = 'cheese';
    const cheeseClickerUrl = 'https://chees.click';

    document.addEventListener('keydown', (event) => {
        secretCode += event.key.toLowerCase();

        if (secretCode.endsWith(secretPhrase)) {
            document.body.classList.add('red-bg');
            secretMessage.innerText = 'Welcome to the underworld. Have fun here bro :P';
            secretMessage.style.display = 'block';
        }

        if (secretCode.endsWith(resetPhrase)) {
            document.body.classList.remove('red-bg');
            secretMessage.style.display = 'none';
        }

        if (secretCode.endsWith(cheesePhrase)) {
            window.location.href = cheeseClickerUrl;
        }
    });

    updateStep();

    // Function to navigate between pages
    window.navigate = function(page) {
        window.location.href = page;
    }

    // Function to show a Rickroll video
   function quitGame() {
    window.open('www.youtube.com/watch?v=2qBlE2-WL60', '_blank').focus();
}

// Add event listener to trigger redirect on Ctrl+W
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'w') {
        event.preventDefault();  // Prevent the default action (navigation or refresh)
        quitGame();
    }
});

// Modify the existing 'beforeunload' event listener to also trigger the Rickroll
window.addEventListener('beforeunload', function(event) {
    quitGame();  // Trigger Rickroll when the user tries to leave the page
    event.returnValue = 'Are you sure you want to leave?';  // Show a confirmation dialog
});
function toggleOptions() {
    document.querySelector('.options-gui').classList.toggle('active');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function adjustBrightness() {
    const brightness = document.getElementById('brightnessControl').value;
    document.body.style.filter = `brightness(${brightness})`;
}

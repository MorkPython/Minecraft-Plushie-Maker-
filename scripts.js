document.addEventListener('DOMContentLoaded', function () {
    let step = 1;
    const maxSteps = 9;
    const stepElement = document.getElementById('step');
    const nextButton = document.getElementById('next-step');
    const prevButton = document.getElementById('prev-step');
    const optionsGui = document.querySelector('.options-gui');
    const secretMessage = document.createElement('div');
    secretMessage.classList.add('secret-message');
    document.body.appendChild(secretMessage);

    function updateStep() {
        stepElement.innerText = `Step ${step} out of ${maxSteps}`;
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (step < maxSteps) {
                step++;
                updateStep();
            }
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (step > 1) {
                step--;
                updateStep();
            }
        });
    }

    document.getElementById('open-options').addEventListener('click', () => {
        optionsGui.classList.add('active');
    });

    document.getElementById('close-options').addEventListener('click', () => {
        optionsGui.classList.remove('active');
    });

    document.getElementById('dark-mode-toggle').addEventListener('change', (event) => {
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
    });

    updateStep();

    // Function to navigate between pages
    window.navigate = function(page) {
        window.location.href = page;
    }

    // Function to show a Rickroll video before leaving the page
    function quitGame() {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }

    // Add event listener to trigger quitGame on page unload
    window.addEventListener('beforeunload', function(event) {
        // Show a confirmation dialog (this is required by some browsers)
        event.returnValue = '';
        // Open Rickroll video in a new tab (attempt to trigger quitGame)
        quitGame();
    });
});


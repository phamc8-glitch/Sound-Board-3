// Create an array of sounds
const sounds = ['aww','applause', 'tada', 'right', 'victory', 'eww', 'boo', 'gasp', 'wrong', 'failure', 'laugh', 'wow'];

// For each sound, create a button, add a class 'btn', update the text, append to DOM
sounds.forEach((sound) => {
    // Create a button
    const btn = document.createElement('button');

    // Add a class of 'btn' to the button element
    btn.classList.add('btn');
    
    // Set the button label text to be the same as the string value in the sound array
    btn.innerText = sound;

    // Add an event listener to this button
    btn.addEventListener('click', () => {
        // Stop all sounds first
        stopSounds();
        document.getElementById(sound).play();
    });
    
    // Add the button to the DOM
    document.getElementById('buttons').appendChild(btn);
});

// Helper functions
function stopSounds() {
    sounds. forEach((sound) => {
        const snd = document.getElementById(sound);

        snd.pause();
        snd.currentTime = 0;
    })
}
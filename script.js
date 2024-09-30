let farmingActive = false; // Initialize the farming state
let farmingTimer; // Declare the timer variable

function startFarming() {
    if (!farmingActive) {
        farmingActive = true; // Set to true when farming starts

        // Show the game section and start the animation
        document.getElementById('game-section').style.display = 'block';
        const farmingAnimation = document.getElementById('farming-animation');
        farmingAnimation.play(); // Start the animation

        let totalTime = 12 * 60 * 60; // 12 hours in seconds

        // Update the timer every second instead of every minute to ensure accurate updates
        farmingTimer = setInterval(() => {
            totalTime -= 1; // Reduce by 1 second every second

            if (totalTime <= 0) {
                clearInterval(farmingTimer); // Stop the timer when it reaches 0
                document.getElementById('timer').innerText = 'Time\'s up!';
                farmingAnimation.stop(); // Stop the animation
                farmingActive = false; // Reset farming state
                return;
            }

            const hours = Math.floor(totalTime / 3600); // Get hours
            const minutes = Math.floor((totalTime % 3600) / 60); // Get minutes
            const seconds = totalTime % 60; // Get seconds

            // Update the timer display in hours, minutes, and seconds
            document.getElementById('timer').innerText = `${hours}h ${minutes}m ${seconds}s`;
        }, 1000); // Update every second
    }
}

let farmingBtn = document.getElementById('farming-btn');
let timerDisplay = document.getElementById('timer');
let farmingActive = false;
let farmingTime = 6 * 60 * 60; // 6 hours 46 minutes in seconds

// Function to start farming
function startFarming() {
  if (farmingActive) return;
  
  farmingActive = true;
  farmingBtn.disabled = true;
  let startTime = Date.now();
  
  let interval = setInterval(() => {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let remainingTime = farmingTime - elapsedTime;

    if (remainingTime <= 0) {
      clearInterval(interval);
      farmingBtn.disabled = false;
      farmingActive = false;
      timerDisplay.textContent = "0h 0m 0s";
      return;
    }

    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;

    // Display the time in the format of hh:mm:ss
    timerDisplay.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

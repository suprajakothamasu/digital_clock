function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    // Get current hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Format: Add leading zero if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Create the time string
    const timeString = `${hours}<span>:</span>${minutes}<span>:</span>${seconds}`;

    // Update the HTML content of the clock
    clockElement.innerHTML = timeString;
}

// Start the clock and update it every second
setInterval(updateClock, 1000);

// Run the function once to avoid the 1-second delay
updateClock();

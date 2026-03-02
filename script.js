console.log("Script started")

// Variable to track the number of clicks 
let clicks = 0;

// This is the variable to store the click display h1
let clickDisplay = document.getElementById("click-display");

// Set initial text
clickDisplay.innerText = "Clicks: " + clicks;

//Called when the potato is clicked 
function handleClick() {
    console.log("click");

    // Add one to click count
    clicks = clicks + 1;
    
    // Update display
    clickDisplay.innerText = "Clicks: " + clicks;
}
    
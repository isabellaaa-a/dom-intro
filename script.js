console.log("Script started")

// Variable to track the number of clicks 
let clicks = 0;

let clickValue = 1;

// This is the variable to store the click display h1
let clickDisplay = document.getElementById("click-display");

// Variable to track level
let level = 1;

// This is the variable to store the level display h1
let levelDisplay = document.getElementById("level-display");

// Set initial text
clickDisplay.innerText = "Clicks: " + clicks;

levelDisplay.innerText = "Level: " + level;

//Called when the potato is clicked 
function handleClick() {
    console.log("click");

    // Add one to click count
    clicks = clicks + clickValue;
    
    // Update display
    clickDisplay.innerText = "Clicks: " + clicks;
    
    // Check if clicks equals 10
    if (clicks == 10) {
        alert("You've reached 10 clicks!");
        levelDisplay.innerText = "Level: 2";
        clickValue = 2;

    // check if clicks equals 50
    } else if (clicks == 50) {
        alert("Youve reached 50 clicks!");
        levelDisplay.innerText = "Level: 3";
        clickValue = 5;
    }
    }


    

// Function to get team names from the user
function getTeamNames() {
    let team1 = document.getElementById("team1").value.trim();
    let team2 = document.getElementById("team2").value.trim();
    
    console.log("Team 1: ", team1); // Debugging line
    console.log("Team 2: ", team2); // Debugging line
    
    if (!team1 || !team2) {
        alert("Both teams must have a name!");
        return null; // Return null if team names are invalid
    }
    
    return { team1, team2 };
}

// Function to generate random scores for both teams
function generateScores() {
    let score1 = Math.floor(Math.random() * 5);
    let score2 = Math.floor(Math.random() * 5);
    
    console.log("Generated Scores: ", score1, score2); // Debugging line
    
    return { score1, score2 };
}

// Function to display the match result
function displayResult(team1, team2, score1, score2) {
    let resultElement = document.getElementById("result");
    resultElement.innerHTML = `${team1} <strong>${score1}</strong> - <strong>${score2}</strong> ${team2}`;
    
    if (score1 > score2) {
        resultElement.classList.add("win");
        resultElement.classList.remove("loss");
    } else if (score1 < score2) {
        resultElement.classList.add("loss");
        resultElement.classList.remove("win");
    } else {
        resultElement.classList.remove("win", "loss");
    }
}

// Function to simulate a match
function simulateMatch() {
    console.log("Button clicked!"); // Debugging line
    
    const teams = getTeamNames();
    if (!teams) return; // Exit if team names are invalid
    
    const { team1, team2 } = teams;
    const { score1, score2 } = generateScores();
    
    displayResult(team1, team2, score1, score2);
}

// Event listener for button click
document.getElementById("simulateBtn").addEventListener("click", simulateMatch);

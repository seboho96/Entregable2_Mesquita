document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded!"); // Debugging line

    // Event listener for button click
    document.getElementById("simulateBtn").addEventListener("click", simulateMatch);

    // Load match history from localStorage on page load
    displayMatchHistory();
});

// Retrieve match history from localStorage or initialize an empty array
let matchHistory = JSON.parse(localStorage.getItem("matchHistory")) || [];

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
}

// Function to update match history
function updateMatchHistory(team1, team2, score1, score2) {
    let match = { team1, team2, score1, score2 };
    matchHistory.push(match); // Add new match to the history
    console.log(matchHistory,"match")
    // Store updated match history in localStorage
    localStorage.setItem("matchHistory", JSON.stringify(matchHistory));

    // Refresh the displayed match history
    displayMatchHistory();
}

// Function to display match history in HTML
function displayMatchHistory() {
    let historyElement = document.getElementById("history");
    historyElement.innerHTML = "<h2>Match History</h2>";

    if (matchHistory.length === 0) {
        historyElement.innerHTML += "<p>No matches played yet.</p>";
        return;
    }

    let list = document.createElement("ul");
    matchHistory.forEach(match => {
        let listItem = document.createElement("li");
        listItem.textContent = `${match.team1} ${match.score1} - ${match.score2} ${match.team2}`;
        list.appendChild(listItem);
    });

    historyElement.appendChild(list);
}

// Function to simulate a match
function simulateMatch() {
    console.log("Button clicked!"); // Debugging line
    
    const teams = getTeamNames();
    if (!teams) return; // Exit if team names are invalid
    
    const { team1, team2 } = teams;
    const { score1, score2 } = generateScores();
    
    displayResult(team1, team2, score1, score2);
    updateMatchHistory(team1, team2, score1, score2);
}

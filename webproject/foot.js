"use strict";

const players = [
    { id: 1, name: "John Doe", position: "Quarterback", team: "Team A" },
    { id: 2, name: "Alex Smith", position: "Wide Receiver", team: "Team B" },
    { id: 3, name: "Michael Johnson", position: "Running Back", team: "Team C" },
    { id: 4, name: "Chris Lee", position: "Tight End", team: "Team D" },
    { id: 5, name: "David Brown", position: "Linebacker", team: "Team E" },
    { id: 6, name: "Robert Wilson", position: "Safety", team: "Team F" },
    { id: 7, name: "Daniel Garcia", position: "Cornerback", team: "Team G" },
    { id: 8, name: "William Martinez", position: "Offensive Lineman", team: "Team H" },
    { id: 9, name: "James Anderson", position: "Defensive Lineman", team: "Team I" },
    { id: 10, name: "Joseph Thomas", position: "Kicker", team: "Team J" },
    { id: 11, name: "Charles Taylor", position: "Punter", team: "Team K" }
];

let playerSelect = document.getElementById("playerSelect");

for (const player of players) {
    let option = document.createElement("option");
    option.value = player.id;
    option.innerText = player.name;
    playerSelect.appendChild(option);
}

document.getElementById("checkDetailsButton").addEventListener("click", () => {
    const selectedId = parseInt(playerSelect.value);
    const selectedPlayer = players.find(player => player.id === selectedId);
    const playerInfo = document.getElementById("playerInfo");
    
    if (selectedPlayer) {
        playerInfo.innerText = `Name: ${selectedPlayer.name}, Position: ${selectedPlayer.position}, Team: ${selectedPlayer.team}`;
    } else {
        playerInfo.innerText = "Please select a player.";
    }
});
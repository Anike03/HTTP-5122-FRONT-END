var esportsPlayer = {
    // Four properties
    name: "GØBŁłɴ",
    team: "India",
    pubgkills: 78922,
    clutch: 167,

    // Method to update pubgkills
    updatekills: function(newpubgkills) {
        this.pubgkills = newpubgkills;
        alert("Kills updated! New kills: " + this.pubgkills);
    }
};

// Output initial object to console
console.log(esportsPlayer);

// Prompt user to update name
var newName = prompt("Update player's name:", esportsPlayer.name);
esportsPlayer.name = newName;

// Prompt user to update team
var newTeam = prompt("Update player's team:", esportsPlayer.team);
esportsPlayer.team = newTeam;

// Update kills via the method
var newpubgkills = prompt("Enter new pubg kills:", esportsPlayer.pubgkills);
esportsPlayer.updatekills(newpubgkills);

// Output updated object to console
console.log(esportsPlayer);

function Game(/* String */ id) {
	/* String */ var id;
    /* boolean */ var isActive;
    /* String */ var seq;

	this.id = id;
}

function Play(/* String */ id) {
	/* String */ var id;
    /* String */ var userName;
    /* int */ var score;

	this.id = id;
}

function Player(/* String */ id) {
	/* String */ var id;

	this.id = id;
}

function Player(User user) {
	this(user.id);
}

Player.prototype.create = function() {
}

function User(/* String */ id) {
	/* String */ var id;
	/* String */ var username;
	/* String */ var password;

	this.id = id;
}

User.prototype.create = function() {
}

User.prototype.update = function() {
}

User.prototype.createPlayer = function() {
	var player = new Player(this.id);
	return player.create();
}

User.prototype.login = function() {
}

User.prototype.logout = function() {
}

function ControllerGames() {
    var basePath = "/games";

}

ControllerGames.prototype.games() {
    var url = basePath;
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    return JSON.parse(request.responseText);
}

ControllerGames.prototype.game(/* String */ id) {
    var url = basePath + "/game/" + escape(id);
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    var response = JSON.parse(request.responseText);
    var game = Game(response.id);
    game.isActive = response.isActive;
    game.seq = response.seq;
    return game;
}

ControllerGames.prototype.createGame(/* int */ size) {
    var url = basePath + "/" + size;
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    var id = responseText;
    return Game(id);
}

// Initialize a constructor function for a new Simon Says.
function SimonSays() {
}

SimonSays.prototype.play = function() {
}
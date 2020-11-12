function Queue () {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
}

function enqueue (element) {
  this.dataStore.push (element);
}
function dequeue () {
  return this.dataStore.shift ();
}
// checking and examing the front and back or our queue

function front () {
  return this.dataStore[0];
}
function back () {
  return this.dataStore[this.dataStore.length - 1];
}

// display all the elements using the tostring

function toString () {
  var getStr = '';

  for (var i = 0; i < this.dataStore.length; i++) {
    getStr += this.dataStore[i] + '\n';
  }
  return getStr;
}

//  function that will tell us if que is empty

function empty () {
  if (this.dataStore.length === 0) {
    return `The Queue is Empty`;
  } else {
    return `Got some Data or Elements in Here`;
  }
}

const teams = ['Man-U', 'Barca', 'Paris', 'Juve', 'Ajax', 'Cska'];

function Teams (name, league) {
  this.name = name;
  this.league = league;
}

// loading the teams from they array of tea, into the fuction program

function gettingTeams (divLeague, club) {
  var names = teams;

  for (var i = 0; i < names.length; i++) {
    names[i] = names[i];
    console.log (names[i]);
  }
  for (var i = 0; i < names.length; i++) {
    var playingGame = names[i];
    var league = playingGame[0];
    var name = playingGame[1];

    if (league === 'Man-U') {
      englishTeam.enqueue (new Teams (name, league));
    } else {
      OtherLeagueTeam.enqueue (new Teams (name, league));
    }
  }
}

function play (divLeague, club) {
  console.log (`The game of Today is : \n`);
  while (!club.empty () && !divLeague.empty ()) {
    playing = club.dequeue ();
    console.log (`Club One playing is :- ${playing.name}`);
    playing = divLeague.dequeue ();
    console.log (`Club Two playing is :- ${playing.name}`);
  }
  console.log ();
}
function count () {
  return this.dataStore.length;
}

var englishTeam = new Queue ();
var OtherLeagueTeam = new Queue ();
gettingTeams (englishTeam, OtherLeagueTeam);
play (englishTeam, OtherLeagueTeam);
if (!OtherLeagueTeam.empty ()) {
  console.log (`${OtherLeagueTeam.front ().name} is waiting to play`);
}
if (!englishTeam.empty ()) {
  console.log (`${englishTeam.front ().name} is waiting to play`);
}
if (englishTeam.count () > 0) {
  console.log (`There are ${englishTeam.count ()} waiting to play next`);
}
if (OtherLeagueTeam.count () > 0) {
  console.log (`There are ${OtherLeagueTeam.count ()} waiting to play next`);
}

var raceOn = false;
var victoryImage = ["redVictory.png", "blueVictory.png"];
var stoplightImage = ["stoplightRed.png", "stoplightGreen.png"]


//Stoplight Race start
document.getElementById('Stoplight').addEventListener('click', function() {
//  raceOn = true;
  document.getElementById('Stoplight').src = stoplightImage[1];
  startRace();
})

//Script for the race
function startRace() {
  var elem1 = document.getElementById("redCyclist");
  var pos1 = 20;
  var elem2 = document.getElementById("blueCyclist");
  var pos2 = 20;
  var id = setInterval(frame, 10);

  function frame() {
    if (pos1 >= 1780 || pos2 >= 1780) {
      clearInterval(id);
    } else {
      pos1 = pos1 + (Math.floor(Math.random() * 11));
      elem1.style.left = pos1 + 'px';
      pos2 = pos2 + (Math.floor(Math.random() * 11));
      elem2.style.left = pos2 + 'px';
    }
    if (pos1 >= 1780 && pos2 != 1780){
      document.getElementById("victoryImage").src = victoryImage[0];
      document.getElementById("victoryImage").style.display = "block";
      document.getElementById("victoryImage").addEventListener('click', function(){
        newRace();
      });
    }
    if (pos1 != 1780 && pos2 >= 1780){
      document.getElementById("victoryImage").src = victoryImage[1];
      document.getElementById("victoryImage").style.display = "block";
      document.getElementById("victoryImage").addEventListener('click', function(){
        newRace();
      });
    }
  }
  function newRace(){
    document.getElementById("blueCyclist").style.left = "20px";
    document.getElementById("redCyclist").style.left = "20px";
    document.getElementById('Stoplight').src = stoplightImage[0];
    document.getElementById('victoryImage').style.display = "none";
  }
}

//Restart the race

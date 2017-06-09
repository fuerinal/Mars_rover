//Rovers
var myRover = {
  position: [0, 0],
  name: "myRover"
};
var myRover2 = {
  position: [0, 0],
  name: "myRover2"
};
directioncompass = 0;
//Obstacules

var obstacule = {
  position: [4, 5],
};
var obstacule2 = {
  position: [7, 3],
};
//Creation of grid
grid = new Array(2);
for (i = 0; i < 10; i++) {
  grid[i] = new Array(2);
  for (j = 0; j < 10; j++) {


    grid[i][j] = "[" + i + "," + j + "]";


  }

}

//Data Collect
var rnumber = myRover;
for (var i = 0; i < 3; i++) {

  alert("Position of " + rnumber.name + ": " + rnumber.position);
  alert("Attention, obstacule in : " + "(" + obstacule.position + ")" + " and " + "(" + obstacule2.position + ")");

  direction = prompt('Enter the desired moves (F: Forward B: Backward R: Turn Right L: Turn left ) :', '').toUpperCase();
  direction.toUpperCase();

  //alert(direction);

  var numletters = direction.length;
  //alert(numletters);








  //Actions
  for (var i = 0; i < numletters; i++) {



    if (direction.charAt(i) == 'L') {
      turnleft(rnumber);
    } else if (direction.charAt(i) == 'R') {

      turnright(rnumber);
    } else if (direction.charAt(i) == 'F') {
      goForward(rnumber);
    } else if (direction.charAt(i) == 'B') {
      goBackward(rnumber);
    } else {
      alert("The data entered is wrong");
    }
    if (obstacule.position[0] == myRover.position[0] && obstacule.position[1] == myRover.position[1]) {
      alert("The rover crashed with the obstacule. Recovering...");
      if (direction.charAt(i) == 'F') {
        turnright(rnumber);
        turnright(rnumber);
        goForward(rnumber);



      } else {

        goForward(myRover);

      }
    }
    if (obstacule2.position[0] == myRover.position[0] && obstacule2.position[1] == myRover.position[1]) {
      alert("The rover crashed with the obstacule. Recovering...");
      if (direction.charAt(i) == 'F') {
        turnright(rnumber);
        turnright(rnumber);
        goForward(rnumber);



      } else {

        goForward(rnumber);

      }
    }
    if (myRover2.position[0] == myRover.position[0] && myRover.position[1] == myRover2.position[1] && myRover2.position[0] !== 0 && myRover.position[0] !== 0 && myRover2.position[1] !== 0 && myRover.position[1] !== 0) {
      alert("The rover crashed with the obstacule. Recovering...");
      if (direction.charAt(i) == 'F') {
        turnright(rnumber);
        turnright(rnumber);
        goForward(rnumber);



      } else {

        goForward(rnumber);

      }
    }
    if (0 > myRover.position[0] || myRover.position[0] > grid.length || 0 > myRover.position[1] || myRover.position[1] > grid[0].length) {
      alert("The rover crashed with the limit of the grid. Recovering...");
      if (direction.charAt(i) == 'F') {
        turnright(rnumber);
        turnright(rnumber);
        goForward(myRover);



      } else {

        goForward(rnumber);

      }
    }



    if (i == numletters - 1) {
      rnumber = myRover2;

    }
  }
}
//functions
function turnleft() {


  directioncompass--;
  if (directioncompass == -1) {
    directioncompass = 3;

  }

}

function turnright() {


  directioncompass++;
  if (directioncompass == 4) {
    directioncompass = 0;

  }

}
//North=0 East=1 Sourth=2 west=3

function goForward(rover) {
  switch (directioncompass) {
    case 0:
      rover.position[1]++
        break;
    case 1:
      rover.position[0]++
        break;
    case 2:
      rover.position[1]--
        break;
    case 3:
      rover.position[0]--
        break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function goBackward(rover) {
  switch (directioncompass) {
    case 2:
      rover.position[1]++
        break;
    case 3:
      rover.position[0]++
        break;
    case 0:
      rover.position[1]--
        break;
    case 1:
      rover.position[0]--
        break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

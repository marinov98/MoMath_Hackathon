/* MoMath Math Square Behavior
 *
 *        Title: The Knight's Tour
 *  Description: Display user blobs and sensors (same as debug)
 * Scheduler ID:
 *    Framework: P5
 *       Author: Dylan Simon <dylan@dylex.net>
 *      Created: 2017-04
 *       Status: works
 */

import P5Behavior from 'p5beh'
import * as Display from 'display'
import * as Sensor from 'sensors'

const pb = new P5Behavior();
// for WEBGL: pb.renderer = 'webgl';

let squareSize = 53;
let boardStart = 100;
let boardEnd = boardStart + squareSize * 8;

var started = false;
var board = [];
var path = [];
var current;
var extendos;

const Square = function(id,i,j,x,y){
  this.id = id;
  this.i = i;
  this.j = j;
  this.x = x;
  this.y = y;
  this.state = 0;
};

const createBoard = function(){
  for(var i = 0; i < 8; i++){
    board.push([]);
    for(var j = 0; j < 8; j++){
      board[i].push(new Square(8*i + j + 1,i, j,boardStart + squareSize * j, boardStart + squareSize * (7-i)));
    }
  }
}

pb.preload = function (p) {
  /* this == pb.p5 == p */
  // ...
}

pb.setup = function (p) {
  /* this == pb.p5 == p */
  /* P5Behavior already calls createCanvas for us */
  // setup here...
  createBoard();

};

const getCoords = function(id){
  for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      if(board[i][j].id = id){
        return [i,j];
      }
    }
  }
}

const getSquare = function(x,y){
  for(var j = 0; j < 8;j++){
    if(board[0][j].x + squareSize > x){
      for(var i = 0; i < 8;i++){
        if(board[i][j].y < y){
          return board[i][j].id;
        }
      }
    }
  }
}

const getPosition = function(x,y){
  if(x > boardEnd|| y > boardEnd || y < boardStart){
    return -1;
  }
  else if(x < boardStart){
    console.log(y);
    return 66;
  }
  else{
    return getSquare(x,y);
  }
}

const inBounds = function(i,j){
  return i >=0 && i < 8 && j >=0 && j < 8;
}

const validMoves = function(iCoord, jCoord){
  var possibilities = [];
  var xMoves = [2, 1, -1, -2,-2, -1, 1, 2];
  var yMoves = [1, 2, 2, 1,-1, -2, -2, -1];
  var newX,newY;

  for(var k = 0; k < 8; k++){
    newX = iCoord + xMoves[k];
    newY = jCoord + yMoves[k];
    if(inBounds(newX, newY)){
      possibilities.push(board[newX][newY].id);
    }
  }
  return possibilities;
}

pb.draw = function (floor, p) {
  /* this == pb.p5 == p */
  // draw here...
  this.clear();
  this.fill(0, 0, 0)
  this.rect(0, 0, Display.width, Display.height);

  var input = floor.sensors;

  floor.maxUsers = 1;

  // shadow
  this.fill(255, 255, 255);
  this.rect(105, 105, 424, 424);
  
  // Title
  this.textSize(36);
  this.textFont('Palatino');
  this.text("Knight's Tour", 200, 60);

  // Underline
  this.stroke(255, 255, 255);
  this.strokeWeight(2);
  this.line(200, 65, 430, 65);

  // full board
  this.fill(232, 235, 225);
  this.stroke (0, 0, 0);
  this.rect(100, 100, squareSize * 8, squareSize * 8);

  current = 0;
  extendos = [];
  if(floor.users[0].id != -1){
    current = getPosition(floor.users[0].x, floor.users[0].y);
  }
  if(current != 0 && current < 65){
    var jCoord = current % 8;
    if (jCoord == 0){
      jCoord = 8;
    }
    var iCoord = (current - jCoord)/8;
    jCoord -= 1;
    extendos = validMoves(iCoord,jCoord);
  }

  for(var i = 0; i < 8; i ++){
    for(var j = 0; j < 8; j ++){
      if(board[i][j].id == current){
        this.fill(255,0,0);
      }
      else if(extendos.length > 0 && extendos.includes(board[i][j].id)){
        this.fill("#ffa500");
      }
      else if(i % 2 != j % 2){
        //dark tiles
        this.fill(100);
      }
      else{
        //light tiles
        this.fill(255, 255, 255);
      }

      this.rect(board[i][j].x,board[i][j].y,squareSize, squareSize);
    }
  }



this.textFont('Helvetica');
// Start
this.textSize(30);
this.fill(255, 255, 255);
this.text("START", 260, 560);

// restart button
this.textSize(14);
this.fill(255, 255, 255);
this.text("RESTART", 21, 141);
this.fill(182, 255, 224);
this.ellipse(50, 100, 50, 50);

// undo button
this.textSize(14);
this.fill(255, 255, 255);
this.text("UNDO", 28, 241);
this.fill(141, 235, 206);
this.ellipse(50, 200, 50, 50);

// redo button
this.textSize(14);
this.fill(255, 255, 255);
this.text("REDO", 28, 341);
this.fill(111, 184, 162);
this.ellipse(50, 300, 50, 50);

// help button
this.textSize(14);
this.fill(255, 255, 255);
this.text("HELP", 30, 441);
this.fill(91, 155, 132);
this.ellipse(50, 400, 50, 50);

//give up button
this.textSize(14);
this.fill(255, 255, 255);
this.text("GIVE UP", 21, 541);
this.fill(48, 79, 70);
this.ellipse(50, 500, 50, 50);


  for (let user of floor.users) {
    pb.drawUser(user);
    // console.log(user);
    // console.log(floor.users[0]);
  }

};

export const behavior = {
  title: "Sensor Debug (P5)",
  init: pb.init.bind(pb),
  frameRate: 'sensors',
  render: pb.render.bind(pb),
  numGhosts: 1
};
export default behavior

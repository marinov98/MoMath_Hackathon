/* MoMath Math Square Behavior
 *
 *        Title: P5 Example
 *  Description: Display user blobs and sensors (same as debug)
 * Scheduler ID:
 *    Framework: P5
 *       Author: Dylan Simon <dylan@dylex.net>
 *      Created: 2017-04
 *       Status: works
 */

import P5Behavior from 'p5beh';

const pb = new P5Behavior();

// for WEBGL: pb.renderer = 'webgl';

var goldenknight

pb.preload = function (p) {
  /* this == pb.p5 == p */
  // ...
goldenknight= this.loadImage('images/goldentrash2.png')
}

pb.setup = function (p) {
  /* this == pb.p5 == p */
  /* P5Behavior already calls createCanvas for us */
  // setup here...


};

pb.draw = function (floor, p) {
  /* this == pb.p5 == p */
  // draw here...
  this.clear();

this.fill(0)
  this.rect(0, 0, this.width, this.height);



  // shadow
  this.noStroke()
  this.fill(182, 255, 224);
  this.rect(117, 98, 424, 424);

// Title
this.stroke(232, 170, 21);
this.fill(232, 170, 21);
this.strokeWeight(1);
this.textSize(36);
this.textFont('Courier New');
this.text("The Golden Knight", 140, 60);

// Underthis.line
this.stroke(232, 253, 88);
this.strokeWeight(2);
this.line(130, 65, 520, 65);

// full board
this.stroke (0, 0, 0);
this.fill(232, 235, 225);


// square 1
this.fill(255, 255, 255);
this.rect(110, 90, 53, 53);

// square 2
this.fill(232, 235, 225);
this.rect(163, 90, 53, 53);

// square 3
this.fill(255, 255, 255);
this.rect(216, 90, 53, 53);

// square 4
this.fill(232, 235, 225);
this.rect(269, 90, 53, 53);

// square 5
this.fill(255, 255, 255);
this.rect(322, 90, 53, 53);

// square 6
this.fill(232, 235, 225);
this.rect(375, 90, 53, 53);

// square 7
this.fill(255, 255, 255);
this.rect(428, 90, 53, 53);

// square 8
this.fill(232, 235, 225);
this.rect(481, 90, 53, 53);

// square 9
this.fill(232, 235, 225);
this.rect(110, 143, 53, 53);

// square 10
this.fill(255, 255, 255);
this.rect(163, 143, 53, 53);

// square 11
this.fill(232, 235, 225);
this.rect(216, 143, 53, 53);

// square 12
this.fill(255, 255, 255);
this.rect(269, 143, 53, 53);

// square 13
this.fill(232, 235, 225);
this.rect(322, 143, 53, 53);

// square 14
this.fill(255, 255, 255);
this.rect(375, 143, 53, 53);

// square 15
this.fill(232, 235, 225);
this.rect(428, 143, 53, 53);

// square 16
this.fill(255, 255, 255);
this.rect(481, 143, 53, 53);

// square 17
this.fill(255, 255, 255);
this.rect(110, 196, 53, 53);

// square 18
this.fill(232, 235, 225);
this.rect(163, 196, 53, 53);

// square 19
this.fill(255, 255, 255);
this.rect(216, 196, 53, 53);

// square 20
this.fill(232, 235, 225);
this.rect(269, 196, 53, 53);

// square 21
this.fill(255, 255, 255);
this.rect(322, 196, 53, 53);

// square 22
this.fill(232, 235, 225);
this.rect(375, 196, 53, 53);

// square 23
this.fill(255, 255, 255);
this.rect(428, 196, 53, 53);

// square 24
this.fill(232, 235, 225);
this.rect(481, 196, 53, 53);

// square 25
this.fill(232, 235, 225);
this.rect(110, 249, 53, 53);

// square 26
this.fill(255, 255, 255);
this.rect(163, 249, 53, 53);

// square 27
this.fill(232, 235, 225);
this.rect(216, 249, 53, 53);

// square 28
this.fill(255, 255, 255);
this.rect(269, 249, 53, 53);

// square 29
this.fill(232, 235, 225);
this.rect(322, 249, 53, 53);

// square 30
this.fill(255, 255, 255);
this.rect(375, 249, 53, 53);

// square 31
this.fill(232, 235, 225);
this.rect(428, 249, 53, 53);

// square 32
this.fill(255, 255, 255);
this.rect(481, 249, 53, 53);

// square 33
this.fill(255, 255, 255);
this.rect(110, 302, 53, 53);

// square 34
this.fill(232, 235, 225);
this.rect(163, 302, 53, 53);

// square 35
this.fill(255, 255, 255);
this.rect(216, 302, 53, 53);

// square 36
this.fill(232, 235, 225);
this.rect(269, 302, 53, 53);

// square 37
this.fill(255, 255, 255);
this.rect(322, 302, 53, 53);

// square 38
this.fill(232, 235, 225);
this.rect(375, 302, 53, 53);

// square 39
this.fill(255, 255, 255);
this.rect(428, 302, 53, 53);

// square 40
this.fill(232, 235, 225);
this.rect(481, 302, 53, 53);

// square 41
this.fill(232, 235, 225);
this.rect(110, 355, 53, 53);

// square 42
this.fill(255, 255, 255);
this.rect(163, 355, 53, 53);

// square 43
this.fill(232, 235, 225);
this.rect(216, 355, 53, 53);

// square 44
this.fill(255, 255, 255);
this.rect(269, 355, 53, 53);

// square 45
this.fill(232, 235, 225);
this.rect(322, 355, 53, 53);

// square 46
this.fill(255, 255, 255);
this.rect(375, 355, 53, 53);

// square 47
this.fill(232, 235, 225);
this.rect(428, 355, 53, 53);

// square 48
this.fill(255, 255, 255);
this.rect(481, 355, 53, 53);

// square 49
this.fill(255, 255, 255);
this.rect(110, 408, 53, 53);

// square 50
this.fill(232, 235, 225);
this.rect(163, 408, 53, 53);

// square 51
this.fill(255, 255, 255);
this.rect(216, 408, 53, 53);

// square 52
this.fill(232, 235, 225);
this.rect(269, 408, 53, 53);

// square 53
this.fill(255, 255, 255);
this.rect(322, 408, 53, 53);

  // square 54
this.fill(232, 235, 225);
this.rect(375, 408, 53, 53);

// square 55
this.fill(255, 255, 255);
this.rect(428, 408, 53, 53);

// square 56
this.fill(232, 235, 225);
this.rect(481, 408, 53, 53);

 // square 57
this.fill(178, 235, 206);
this.rect(110, 461, 53, 53);

// square 58
this.fill(61, 104, 100);
this.rect(163, 461, 53, 53);

// square 59
this.fill(98, 168, 161);
this.rect(216, 461, 53, 53);

// square 60
this.fill(142, 25, 22);
this.rect(269, 461, 53, 53);

// square 61
this.fill(232, 235, 225);
this.rect(322, 461, 53, 53);

// square 62
this.fill(255, 255, 255);
this.rect(375, 461, 53, 53);

// square 63
this.fill(232, 235, 225);
this.rect(428, 461, 53, 53);

// square 64
this.fill(255, 255, 255);
this.rect(481, 461, 53, 53);

// Golden Knight
this.image(goldenknight, 105, 457, 65, 60)

// restart button
this.textSize(14);
this.textFont('Helvetica');
this.fill(255, 255, 255);
this.text("RESTART", 21, 191);

//arrow
this.stroke(0, 0, 0)
this.strokeWeight(2);
this.fill(182, 255, 224);
this.ellipse(50, 150, 50, 50);

this.line(51, 155, 49, 160);
this.line(49, 160, 54, 164);
this.stroke(0, 0, 0);
this.strokeWeight(3);
this.noFill();
this.arc(50, 150, 20, 20, Math.PI, Math.PI/2);


// undo button
this.textSize(14);
this.textFont('Helvetica');
this.fill(255, 255, 255);
this.text("UNDO", 28, 305);
this.fill(141, 235, 206);
this.ellipse(50, 265, 50, 50);

// arrow
this.stroke(0, 0, 0);
this.strokeWeight(3);

// arrow
this.stroke(0, 0, 0);
this.strokeWeight(3);
this.line(42, 261, 42, 271)
this.line(42, 271, 61, 271)
this.line(63, 271, 42, 271)

this.line(63, 271, 60, 266)
this.line(63, 271, 60, 275)


// redo button
this.textSize(14);
this.textFont('Helvetica');
this.fill(255, 255, 255);
this.text("REDO", 28, 416);
this.fill(111, 184, 162);
this.ellipse(50, 375, 50, 50);

// arrow
this.stroke(0, 0, 0);
this.strokeWeight(3);
this.line(42, 371, 42, 381)
this.line(42, 381, 61, 381)
this.line(63, 381, 42, 381)

this.line(63, 381, 60, 376)
this.line(63, 381, 60, 385)

//give up button
this.textSize(14);
this.textFont('Helvetica');
this.fill(255, 255, 255);
this.text("GIVE UP", 22, 516);
this.text("(on life)", 26, 529)
this.fill(48, 79, 70);
this.ellipse(50, 475, 50, 50);

this.stroke(0, 0, 0);
this.strokeWeight(3);
this.line(50, 460, 50, 485);

this.line(42, 480, 50, 485);
this.line(58, 480, 50, 485);

// Start text
this.textSize(30);
this.textFont('Helvetica');
this.fill(255, 255, 255);
this.text("START", 280, 555);

// start arrow

// point
this.stroke(255, 255, 255);
this.strokeWeight(6)
this.line(140, 530, 130, 535)
this.line(140, 530, 150, 535)

// extension
this.stroke(255, 255, 255);
this.strokeWeight(6)
this.line(140, 530, 140, 540);

// right straight
this.stroke(255, 255, 255);
this.strokeWeight(6);
this.line(150, 550, 245, 550);

// curve
this.stroke(255, 255, 255);
this.strokeWeight(6);
this.noFill();
this.arc(150, 540, 20, 20, Math.PI/2, Math.PI);


};



export const behavior = {
  title: "Sensor Debug (P5)",
  init: pb.init.bind(pb),
  frameRate: 'sensors',
  render: pb.render.bind(pb),
  numGhosts: 1
};
export default behavior

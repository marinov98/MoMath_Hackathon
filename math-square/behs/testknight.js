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


pb.preload = function (p) {
  /* this == pb.p5 == p */
  // ...
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

  this.rect(0, 0, this.width, this.height);
  // Title
  // shadow
this.fill(0, 0, 0);
this.rect(103, 95, 424, 424);

// Title
this.textSize(36);
this.textFont('Palatino');
this.text("Knight's Tour", 300, 60);

// Underthis.line
this.line(175, 63, 415, 63);

// full board
this.fill(232, 235, 225);
this.stroke (0, 0, 0);
this.rect(100, 90, 424, 424);

// square 1
this.fill(255, 255, 255);
this.rect(100, 90, 53, 53);

// square 2
this.fill(232, 235, 225);
this.rect(153, 90, 53, 53);

// square 3
this.fill(255, 255, 255);
this.rect(206, 90, 53, 53);

// square 4
this.fill(232, 235, 225);
this.rect(259, 90, 53, 53);

// square 5
this.fill(255, 255, 255);
this.rect(312, 90, 53, 53);

// square 6
this.fill(232, 235, 225);
this.rect(365, 90, 53, 53);

// square 7
this.fill(255, 255, 255);
this.rect(418, 90, 53, 53);

// square 8
this.fill(232, 235, 225);
this.rect(471, 90, 53, 53);

// square 9
this.fill(232, 235, 225);
this.rect(100, 143, 53, 53);

// square 10
this.fill(255, 255, 255);
this.rect(153, 143, 53, 53);

// square 11
this.fill(232, 235, 225);
this.rect(206, 143, 53, 53);

// square 12
this.fill(255, 255, 255);
this.rect(259, 143, 53, 53);

// square 13
this.fill(232, 235, 225);
this.rect(312, 143, 53, 53);

// square 14
this.fill(255, 255, 255);
this.rect(365, 143, 53, 53);

// square 15
this.fill(232, 235, 225);
this.rect(418, 143, 53, 53);

// square 16
this.fill(255, 255, 255);
this.rect(471, 143, 53, 53);

// square 17
this.fill(255, 255, 255);
this.rect(100, 196, 53, 53);

// square 18
this.fill(232, 235, 225);
this.rect(153, 196, 53, 53);

// square 19
this.fill(255, 255, 255);
this.rect(206, 196, 53, 53);

// square 20
this.fill(232, 235, 225);
this.rect(259, 196, 53, 53);

// square 21
this.fill(255, 255, 255);
this.rect(312, 196, 53, 53);

// square 22
this.fill(232, 235, 225);
this.rect(365, 196, 53, 53);

// square 23
this.fill(255, 255, 255);
this.rect(418, 196, 53, 53);

// square 24
this.fill(232, 235, 225);
this.rect(471, 196, 53, 53);

// square 25
this.fill(232, 235, 225);
this.rect(100, 249, 53, 53);

// square 26
this.fill(255, 255, 255);
this.rect(153, 249, 53, 53);

// square 27
this.fill(232, 235, 225);
this.rect(206, 249, 53, 53);

// square 28
this.fill(255, 255, 255);
this.rect(259, 249, 53, 53);

// square 29
this.fill(232, 235, 225);
this.rect(312, 249, 53, 53);

// square 30
this.fill(255, 255, 255);
this.rect(365, 249, 53, 53);

// square 31
this.fill(232, 235, 225);
this.rect(418, 249, 53, 53);

// square 32
this.fill(255, 255, 255);
this.rect(471, 249, 53, 53);

// square 33
this.fill(255, 255, 255);
this.rect(100, 302, 53, 53);

// square 34
this.fill(232, 235, 225);
this.rect(153, 302, 53, 53);

// square 35
this.fill(255, 255, 255);
this.rect(206, 302, 53, 53);

// square 36
this.fill(232, 235, 225);
this.rect(259, 302, 53, 53);

// square 37
this.fill(255, 255, 255);
this.rect(312, 302, 53, 53);

// square 38
this.fill(232, 235, 225);
this.rect(365, 302, 53, 53);

// square 39
this.fill(255, 255, 255);
this.rect(418, 302, 53, 53);

// square 40
this.fill(232, 235, 225);
this.rect(471, 302, 53, 53);

// square 41
this.fill(232, 235, 225);
this.rect(100, 355, 53, 53);

// square 42
this.fill(255, 255, 255);
this.rect(153, 355, 53, 53);

// square 43
this.fill(232, 235, 225);
this.rect(206, 355, 53, 53);

// square 44
this.fill(255, 255, 255);
this.rect(259, 355, 53, 53);

// square 45
this.fill(232, 235, 225);
this.rect(312, 355, 53, 53);

// square 46
this.fill(255, 255, 255);
this.rect(365, 355, 53, 53);

// square 47
this.fill(232, 235, 225);
this.rect(418, 355, 53, 53);

// square 48
this.fill(255, 255, 255);
this.rect(471, 355, 53, 53);

// square 49
this.fill(255, 255, 255);
this.rect(100, 408, 53, 53);

// square 50
this.fill(232, 235, 225);
this.rect(153, 408, 53, 53);

// square 51
this.fill(255, 255, 255);
this.rect(206, 408, 53, 53);

// square 52
this.fill(232, 235, 225);
this.rect(259, 408, 53, 53);

// square 53
this.fill(255, 255, 255);
this.rect(312, 408, 53, 53);

  // square 54
this.fill(232, 235, 225);
this.rect(365, 408, 53, 53);

// square 55
this.fill(255, 255, 255);
this.rect(418, 408, 53, 53);

// square 56
this.fill(232, 235, 225);
this.rect(471, 408, 53, 53);

 // square 57
this.fill(178, 235, 206);
this.rect(100, 461, 53, 53);

// square 58
this.fill(255, 255, 255);
this.rect(153, 461, 53, 53);

// square 59
this.fill(232, 235, 225);
this.rect(206, 461, 53, 53);

// square 60
this.fill(255, 255, 255);
this.rect(259, 461, 53, 53);

// square 61
this.fill(232, 235, 225);
this.rect(312, 461, 53, 53);

// square 62
this.fill(255, 255, 255);
this.rect(365, 461, 53, 53);

// square 63
this.fill(232, 235, 225);
this.rect(418, 461, 53, 53);

// square 64
this.fill(255, 255, 255);
this.rect(471, 461, 53, 53);

  // Start
this.textSize(14);
this.textFont('Helvetica');
this.textStyle(BOLD);
this.fill(0, 0, 0);
this.text("START", 127, 493);

// restart button
this.textSize(14);
this.textFont('Helvetica');
this.textStyle(NORMAL);
this.fill(0, 0, 0);
this.text("RESTART", 51, 141);
this.fill(182, 255, 224);
this.ellipse(50, 100, 50, 50);

// undo button
this.textSize(14);
this.textFont('Helvetica');
this.textStyle(NORMAL);
this.fill(0, 0, 0);
this.text("UNDO", 51, 241);
this.fill(141, 235, 206);
this.ellipse(50, 200, 50, 50);

// redo button
this.textSize(14);
this.textFont('Helvetica');
this.textStyle(NORMAL);
this.fill(0, 0, 0);
this.text("REDO",51, 341);
  this.fill(111, 184, 162);
this.ellipse(50, 300, 50, 50);

// help button
this.textSize(14);
this.textFont('Helvetica');
this.textStyle(NORMAL);
this.fill(0, 0, 0);
this.text("HELP",52, 441);
this.fill(91, 155, 132);
this.ellipse(50, 400, 50, 50);

//give up button
this.textSize(14);
this.textFont('Helvetica');
this.textStyle(NORMAL);
this.fill(0, 0, 0);
this.text("GIVE UP", 51, 541);
this.fill(48, 79, 70);
this.ellipse(50, 500, 50, 50);

};

export const behavior = {
  title: "Sensor Debug (P5)",
  init: pb.init.bind(pb),
  frameRate: 'sensors',
  render: pb.render.bind(pb),
  numGhosts: 1
};
export default behavior

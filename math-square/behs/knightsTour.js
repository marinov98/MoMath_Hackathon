/* MoMath Math Square Behavior
 *
 *        Title: The Knight's Tour
 *  Description: Do the Knight's Tour Challenge
 * Scheduler ID: 
 *    Framework: P5
 *       Author: Gang Gang Gang
 *      Created: 2018-06
 *       Status: lmao
 */

//import * as Display from 'display'
import P5Behavior from 'p5beh';
//import * as Floor from 'floor';

const pb = new P5Behavior();

// for WEBGL: pb.renderer = 'webgl';

var meteorImage;
var targetImage;

pb.preload = function (p) {
  /* this == pb.p5 == p */
  meteorImage = this.loadImage('images/meteor.png')
  targetImage = this.loadImage('images/target.png')
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

    // shadow
this.rect(103, 95, 424, 424);

// Title
this.textSize(36);
this.text("Knight's Tour", 300, 60);

// Underline
this.line(200, 63, 400, 63);

console.log(this);

  for (let u of floor.users) {
    pb.drawUser(u);
  }

  this.fill(128, 128, 128, 128);
  this.noStroke();
  pb.drawSensors(floor.sensors);
};

export const behavior = {
  title: "Knight's Tour Challenge",
  init: pb.init.bind(pb),
  frameRate: 'sensors',
  render: pb.render.bind(pb),
  numGhosts: 1
};
export default behavior

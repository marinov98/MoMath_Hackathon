function setup() {
  createCanvas(576, 576);
}

function draw() {
  // background
	background(255, 255, 255);

		// shadow
	fill(0, 0, 0);
	rect(103, 95, 424, 424);

	// Title
	textSize(36);
	textAlign(CENTER);
	text("Knight's Tour", 300, 60);

	// Underline
	line(200, 63, 400, 63);

	// full board
	fill(232, 235, 225);
	stroke (0, 0, 0);
	rect(100, 90, 424, 424);

	// square 1
	fill(255, 255, 255);
	rect(100, 90, 53, 53);

	// square 2
  fill(232, 235, 225);
	rect(153, 90, 53, 53);

	// square 3
  fill(255, 255, 255);
  rect(206, 90, 53, 53);

	// square 4
  fill(232, 235, 225);
	rect(259, 90, 53, 53);

	// square 5
  fill(255, 255, 255);
	rect(312, 90, 53, 53);

	// square 6
  fill(232, 235, 225);
	rect(365, 90, 53, 53);

  // square 7
  fill(255, 255, 255);
	rect(418, 90, 53, 53);

  // square 8
  fill(232, 235, 225);
	rect(471, 90, 53, 53);

  // square 9
  fill(232, 235, 225);
	rect(100, 143, 53, 53);

  // square 10
  fill(255, 255, 255);
	rect(153, 143, 53, 53);

  // square 11
  fill(232, 235, 225);
	rect(206, 143, 53, 53);

  // square 12
  fill(255, 255, 255);
	rect(259, 143, 53, 53);

  // square 13
  fill(232, 235, 225);
	rect(312, 143, 53, 53);

  // square 14
  fill(255, 255, 255);
	rect(365, 143, 53, 53);

  // square 15
  fill(232, 235, 225);
	rect(418, 143, 53, 53);

  // square 16
  fill(255, 255, 255);
	rect(471, 143, 53, 53);

  // square 17
	fill(255, 255, 255);
	rect(100, 196, 53, 53);

	// square 18
  fill(232, 235, 225);
	rect(153, 196, 53, 53);

	// square 19
  fill(255, 255, 255);
  rect(206, 196, 53, 53);

	// square 20
  fill(232, 235, 225);
	rect(259, 196, 53, 53);

	// square 21
  fill(255, 255, 255);
	rect(312, 196, 53, 53);

	// square 22
  fill(232, 235, 225);
	rect(365, 196, 53, 53);

  // square 23
  fill(255, 255, 255);
	rect(418, 196, 53, 53);

  // square 24
  fill(232, 235, 225);
	rect(471, 196, 53, 53);

  // square 25
  fill(232, 235, 225);
	rect(100, 249, 53, 53);

  // square 26
  fill(255, 255, 255);
	rect(153, 249, 53, 53);

  // square 27
  fill(232, 235, 225);
	rect(206, 249, 53, 53);

  // square 28
  fill(255, 255, 255);
	rect(259, 249, 53, 53);

  // square 29
  fill(232, 235, 225);
	rect(312, 249, 53, 53);

  // square 30
  fill(255, 255, 255);
	rect(365, 249, 53, 53);

  // square 31
  fill(232, 235, 225);
	rect(418, 249, 53, 53);

  // square 32
  fill(255, 255, 255);
	rect(471, 249, 53, 53);

  // square 33
  fill(255, 255, 255);
  rect(100, 302, 53, 53);

  // square 34
  fill(232, 235, 225);
  rect(153, 302, 53, 53);

  // square 35
  fill(255, 255, 255);
  rect(206, 302, 53, 53);

  // square 36
  fill(232, 235, 225);
  rect(259, 302, 53, 53);

  // square 37
  fill(255, 255, 255);
  rect(312, 302, 53, 53);

  // square 38
  fill(232, 235, 225);
  rect(365, 302, 53, 53);

  // square 39
  fill(255, 255, 255);
  rect(418, 302, 53, 53);

  // square 40
  fill(232, 235, 225);
  rect(471, 302, 53, 53);

  // square 41
  fill(232, 235, 225);
  rect(100, 355, 53, 53);

  // square 42
  fill(255, 255, 255);
  rect(153, 355, 53, 53);

  // square 43
  fill(232, 235, 225);
  rect(206, 355, 53, 53);

  // square 44
  fill(255, 255, 255);
  rect(259, 355, 53, 53);

  // square 45
  fill(232, 235, 225);
  rect(312, 355, 53, 53);

  // square 46
  fill(255, 255, 255);
  rect(365, 355, 53, 53);

  // square 47
  fill(232, 235, 225);
  rect(418, 355, 53, 53);

  // square 48
  fill(255, 255, 255);
  rect(471, 355, 53, 53);

  // square 49
  fill(255, 255, 255);
  rect(100, 408, 53, 53);

	// square 50
  fill(232, 235, 225);
  rect(153, 408, 53, 53);

  // square 51
  fill(255, 255, 255);
  rect(206, 408, 53, 53);

	// square 52
  fill(232, 235, 225);
  rect(259, 408, 53, 53);

  // square 53
  fill(255, 255, 255);
  rect(312, 408, 53, 53);

		// square 54
  fill(232, 235, 225);
  rect(365, 408, 53, 53);

  // square 55
  fill(255, 255, 255);
  rect(418, 408, 53, 53);

	// square 56
  fill(232, 235, 225);
  rect(471, 408, 53, 53);

	 // square 57
  fill(232, 235, 225);
  rect(100, 461, 53, 53);

  // square 58
  fill(255, 255, 255);
  rect(153, 461, 53, 53);

  // square 59
  fill(232, 235, 225);
  rect(206, 461, 53, 53);

  // square 60
  fill(255, 255, 255);
  rect(259, 461, 53, 53);

  // square 61
  fill(232, 235, 225);
  rect(312, 461, 53, 53);

  // square 62
  fill(255, 255, 255);
  rect(365, 461, 53, 53);

  // square 63
  fill(232, 235, 225);
  rect(418, 461, 53, 53);

  // square 64
  fill(255, 255, 255);
  rect(471, 461, 53, 53);

	// restart button
	ellipse(50, 100, 50, 50);

	// undo button
	ellipse(50, 200, 50, 50);

	// redo button
	ellipse(50, 300, 50, 50);

	// help button
	ellipse(50, 400, 50, 50);

	//give up button
	ellipse(50, 500, 50, 50);

};

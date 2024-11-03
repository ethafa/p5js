let sketch7 = (p) => {
  let x = 100;
  let y = 50;

  let colg1 = 0;
  let colg2 = 0;
  let colg3 = 255;

  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(30);
  };

  p.draw = function() {
    colg1 = 255;
    colg2 = p.random(255);
    colg3 = p.random(255);
    x = p.random(0, p.width);
    y = p.random(0, p.height);

    // Set the fill with transparency for each rectangle
    p.fill(colg1, colg2, colg3, 90);
    p.noStroke();
    p.rect(x, y, 24, 24);

    // Draw a static red ellipse
    p.fill(255, 0, 0);
    p.noStroke();
    p.ellipse(329, 200, 80, 80);

    // Display text
    p.fill(0);
    p.textStyle(p.BOLDITALIC);
    p.text('switch off', 300, 205);

    // Clear background when mouse is moved past 300px on the x-axis
    if (p.mouseX > 300) {
      p.background(0);
    }
  };
};

// Attach the sketch to the div with id="sketch7"
new p5(sketch7, 'sketch7');

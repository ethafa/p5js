let sketch3 = (p) => {
  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(0);

    p.fill(0, 255, 0);
    p.noStroke();
    p.circle(p.mouseX, p.mouseY, 50); // Draw a circle following the mouse

    // Draw stationary circles at the corners
    p.fill(255, 10, 191);
    p.circle(100, 100, 25);
    p.circle(300, 100, 25);
    p.circle(300, 300, 25);
    p.circle(100, 300, 25);
  };
};

// Attach the sketch to the div with id="sketch3"
new p5(sketch3, 'sketch3');

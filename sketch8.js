let sketch8 = (p) => {
  let x = 0;
  let speed = 3;

  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(0);

    // Draw a moving rectangle
    p.noStroke();
    p.fill(20, 255, 50);
    p.rect(x, 200, 24, 24);

    // Draw two ellipses at different positions
    p.fill(255, 255, 50);
    p.ellipse(x, 100, 40, 40);

    p.fill(0, 255, 255);
    p.ellipse(x, 100, 20, 20);
    p.ellipse(x, 300, 20, 20);

    // Reverse direction when reaching canvas boundaries
    if (x > p.width) {
      speed = -3;
    } else if (x <= 0) {
      speed = 3;
    }

    // Update position
    x += speed;
  };
};

// Attach the sketch to the div with id="sketch8"
new p5(sketch8, 'sketch8');

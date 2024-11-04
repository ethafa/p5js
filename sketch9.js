let sketch9 = (p) => {
  let x = 0;
  let speed = 3;

  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(0);
    p.noStroke();

    // Conditional shapes based on mouseX position
    if (p.mouseX > 200) {
      p.fill(250, 0, 230);
      p.ellipse(230, 100, 20, 20);
    } else if (p.mouseX > 100) {
      p.stroke(140, 0, 210);
      p.line(0, 0, p.width, p.height);
    } else if (p.mouseX > 50) {
      p.stroke(0, 240, 0);
      p.rect(100, 350, 30, 30);
    } else {
      p.fill(20, 255, 50);
      p.rect(100, 200, 24, 24);
    }
  };
};

// Attach the sketch to the div with id="sketch9"
new p5(sketch9, 'sketch9');

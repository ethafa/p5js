let sketch4 = (p) => {
  let circleX = 0;

  p.setup = function() {
    p.createCanvas(400, 400);
    p.textStyle(p.BOLDITALIC); // Set text style to bold italic
  };

  p.draw = function() {
    p.background(25, 250, 100);

    p.fill(0); // Black color for the text
    p.text('Do not let it reach the end, Click!', 100, 200); // Display text

    p.fill(40, 50, 200); // Blue fill for the circle
    p.noStroke();
    p.ellipse(circleX, 200, 50); // Draw moving circle
    circleX = circleX + 1; // Increment circle position
  };

  p.mousePressed = function() {
    circleX -= 5; // Move circle left when mouse is pressed
  };
};

// Attach sketch to the div with id="sketch3"
new p5(sketch4, 'sketch4');

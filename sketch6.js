let sketch6 = (p) => {
  let x = 100;
  let y = 50;

  let colg1 = 255;
  let colg2 = 0;
  let colg3 = 0;

  p.setup = function() {
    p.createCanvas(400, 400);
    p.background(0);
  };

  p.draw = function() {
    colg1 = p.random(100, 255);
    colg2 = 0;
    colg3 = p.random(100, 190);
    x = p.random(0, p.width);
    y = p.random(0, p.height);

    // Set the alpha to 90 for semi-transparency
    p.fill(colg1, colg2, colg3, 90);
    p.noStroke();
    p.ellipse(x, y, 24, 24);

    p.fill(0, 255, 0);
    p.textStyle(p.BOLDITALIC);
    p.text('one step at a time', 150, 200); // Display message
  };
};

// Attach the sketch to the div with id="sketch6"
new p5(sketch6, 'sketch6');

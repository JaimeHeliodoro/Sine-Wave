function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 255, 0, 100)
}

function draw() {
  background(10);
  stroke(133, 200, 255);
  strokeWeight(2);
  noFill();
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 359; i++) {
       var r1Min = map(sin(frameCount), -1, 1, 50, 100);
       var r1Max = map(sin(frameCount * 2), -1, 1, 100, 0);
       var r2Min = map(sin(frameCount / 2), -1, 1, 50, 100);
       var r2Max = map(sin(frameCount), -1, 1, 0, 100);
       var r1 = map(sin(i * 15), -1, 1, r1Min, r1Max);
       var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
       var r = r1 + r2;
       var x = r * cos(i);
       var y = r * sin(i);
       vertex(x, y);
  }
  endShape(CLOSE);

  translate(width / 4, height / 4);
  beginShape();
  for (var i = 0; i < 359; i++) {
       var r1Min = map(sin(frameCount), -1, 1, 50, 100);
       var r1Max = map(sin(frameCount * 4), -1, 1, 100, 0);
       var r2Min = map(sin(frameCount / 4), -1, 1, 50, 100);
       var r2Max = map(sin(frameCount), -1, 1, 0, 100);
       var r1 = map(sin(i *11), -1, 1, r1Min, r1Max);
       var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
       var r = r1 + r2;
       var x = r * cos(i);
       var y = r * sin(i);
       vertex(x, y);
  }
  endShape(CLOSE);

  translate(width / -2, height / -2);
  beginShape();
  for (var i = 0; i < 359; i++) {
       var r1Min = map(sin(frameCount), -1, 1, 50, 100);
       var r1Max = map(sin(frameCount * 4), -1, 1, 100, 0);
       var r2Min = map(sin(frameCount / 4), -1, 1, 50, 100);
       var r2Max = map(sin(frameCount), -1, 1, 0, 100);
       var r1 = map(sin(i *11), -1, 1, r1Min, r1Max);
       var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
       var r = r1 + r2;
       var x = r * cos(i);
       var y = r * sin(i);
       vertex(x, y);
  }
  endShape(CLOSE);

  translate(width / -4, height / 4);
  beginShape();
  for (var i = 0; i < 359; i++) {
       var r1Min = map(sin(frameCount), -1, 1, 50, 100);
       var r1Max = map(sin(frameCount * 8), -1, 1, 100, 0);
       var r2Min = map(sin(frameCount / 8), -1, 1, 50, 100);
       var r2Max = map(sin(frameCount), -1, 1, 0, 100);
       var r1 = map(sin(i * 6), -1, 1, r1Min, r1Max);
       var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
       var r = r1 + r2;
       var x = r * cos(i);
       var y = r * sin(i);
       vertex(x, y);
  }
  endShape(CLOSE);

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 359; i++) {
       var r1Min = map(sin(frameCount), -1, 1, 50, 100);
       var r1Max = map(sin(frameCount * 6), -1, 1, 100, 0);
       var r2Min = map(sin(frameCount / 6), -1, 1, 50, 100);
       var r2Max = map(sin(frameCount), -1, 1, 0, 100);
       var r1 = map(sin(i * 9), -1, 1, r1Min, r1Max);
       var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
       var r = r1 + r2;
       var x = r * cos(i);
       var y = r * sin(i);
       vertex(x, y);
  }
  endShape(CLOSE);

  translate(width / 2, height / -2);
  beginShape();
  for (var i = 0; i < 359; i++) {
       var r1Min = map(sin(frameCount), -1, 1, 50, 100);
       var r1Max = map(sin(frameCount * 8), -1, 1, 100, 0);
       var r2Min = map(sin(frameCount / 8), -1, 1, 50, 100);
       var r2Max = map(sin(frameCount), -1, 1, 0, 100);
       var r1 = map(sin(i * 6), -1, 1, r1Min, r1Max);
       var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
       var r = r1 + r2;
       var x = r * cos(i);
       var y = r * sin(i);
       vertex(x, y);
  }
  endShape(CLOSE);
}

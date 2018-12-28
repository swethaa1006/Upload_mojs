/* animated shape of the uploading arrow using mo.js is a JavaScript library devoted to motion for the web.
It offers a declarative syntax motion and the creation of elements for animation. Even though mo.js is still in beta,
there is already a host of amazing features to play with.*/

const rect = new mojs.Shape({
  shape: 'line',
  left: '50%',
  fill: 'none',
  radius: 39.8,
  x: 0,
  y: -0.2,
  stroke: {
    'rgba(0,255,255, 1)': 'magenta'
  },
  strokeWidth: {
    8: 0
  },
  strokeDasharray: '100%',
  strokeDashoffset: {
    '-100%': '100%'
  },
  angle: 90,
  duration: 2000,
  repeat: 999,
}).play();


const rect1 = new mojs.Shape({
  shape: 'line',
  // left:         '50%',
  x: 15.55,
  y: -23.8,
  fill: 'none',
  radius: 22,
  stroke: {
    'rgba(0,255,255, 1)': 'magenta'
  },
  strokeWidth: {
    8: 0
  },
  strokeDasharray: '100%',
  strokeDashoffset: {
    '-95%': '100%'
  },
  angle: 45,
  duration: 2000,
  repeat: 999,
}).play();

const rect2 = new mojs.Shape({
  shape: 'line',
  // left:         '50%',
  x: -15.55,
  y: -23.8,
  fill: 'none',
  radius: 22,
  stroke: {
    'rgba(0,255,255, 1)': 'magenta'
  },
  strokeWidth: {
    8: 0
  },
  strokeDasharray: '100%',
  strokeDashoffset: {
    '100%': '-98%'
  },
  angle: -45,
  duration: 2000,
  repeat: 999,
}).play();


//p5.js code to display text of uploading.
var col = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(255);
  textSize(15);
  textAlign(CENTER, CENTER);


  text("U  P  L  O  A  D  I  N  G", width / 2, height / 2 + 60);
  if (col > 50) {
    col -= 9;
  } else if (col <= 50) {
    col = 255;
  }
  fill(255, 0, 0, col);
  console.log(col);
}

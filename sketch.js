let currentWindow = 0
let lightFont, bookFont, mediumFont, boldFont, extraBoldFont, blackFont;

let categories = [
  {
    "name": "Music",
    "color": "lightblue",
  },
  {
    "name": "Marketing & Advertising",
    "color": "lavender",
  },
  {
    "name": "Retail & Ecommerce",
    "color": "pink",
  },
  {
    "name": "Science",
    "color": "coral",
  },
  {
    "name": "Consumer Technology",
    "color": "lightyellow",
  }
]

function preload() {
  lightFont = loadFont('Light.ttf');
  bookFont = loadFont('Book.ttf');
  mediumFont = loadFont('Medium.ttf');
  boldFont = loadFont('Bold.ttf');
  extraBoldFont = loadFont('ExtraBold.ttf');
  blackFont = loadFont('Black.ttf');
}

function setup() {
  textAlign(CENTER, CENTER);
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  if (currentWindow === 0) {
    drawHomePage()
  }
}

function drawHomePage () {
  fill(255)
  textFont(blackFont)
  textSize(width/16)
  text('30 X AGE DIRECTORY', width/2, height/10)
  let startHeight = height/5
  for (var i = 0; i < categories.length; i++) {
    textFont(boldFont)
    textSize(width/32)
    fill(categories[i].color)
    text(categories[i].name, width/2, startHeight)    
    startHeight+=height/15
  }
}
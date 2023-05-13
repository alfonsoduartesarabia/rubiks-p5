import './App.css';
import Sketch from 'react-p5';

let translateX, translateY, translateZ = 0;

function setup(p5, canvasParentRef) {
  // p5.createCanvas(window.innerWidth,window.innerHeight).parent(canvasParentRef);
  p5.createCanvas(800,window.innerHeight,p5.WEBGL).parent(canvasParentRef);
  p5.frameRate(this);
  // p5.noLoop();
};

function drawYellowSide(p5) {
  p5.fill("yellow");
  for(let i = 0; i < 4; i++){
    p5.push();
    p5.translate(translateX,translateY,translateZ);
    p5.box(50,50,0);
    // translateX = 50;
    if(translateX === 0 && translateY === 0) translateX = 50;
    else if(translateX === 50 && translateY === 0) translateY = 50;
    else if(translateX === 50 && translateY === 50) translateX = 0;
    p5.pop();
  }
  translateX = 0; translateY = 0; translateZ = 0;
  p5.translate(translateX,translateY,translateZ);
}
function drawRedSide(p5) {
  p5.fill("red");
  translateY = -25; translateZ = -25;
  for(let i = 0; i < 4; i++){
    p5.push();
    p5.translate(translateX,translateY,translateZ);
    p5.box(50,0,50);
    // translateX = 50;
    if(translateY === -25 && translateZ === -25) translateZ = -75;
    else if(translateY === -25 && translateZ === -75 && translateX !== 50) translateX = 50;
    else if(translateX === 50 && translateY === -25 && translateZ === -75) translateZ = -25;
    p5.pop();
  }
  translateX = 0; translateY = 0; translateZ = 0;
  p5.translate(translateX,translateY,translateZ); 
}
function drawBlueSide(p5) {
  p5.fill("blue");
  translateX = 75; translateZ = -25;
  for(let i = 0; i < 4; i++){
    p5.push();
    p5.translate(translateX,translateY,translateZ);
    p5.box(0,50,50);
    // translateX = 50;
    if(translateX === 75 && translateZ === -25) translateZ = -75;
    else if(translateX === 75 && translateZ === -75 && translateY !== 50) translateY = 50;
    else if(translateX === 75 && translateY === 50 && translateZ === -75) translateZ = -25;
    p5.pop();
  }
  translateX = 0; translateY = 0; translateZ = 0;
  p5.translate(translateX,translateY,translateZ); 
}
function drawGreenSide(p5) {
  p5.fill("green");
  translateX = -25; translateY = 50; translateZ = -25;
  for(let i = 0; i < 4; i++){
    p5.push();
    p5.translate(translateX,translateY,translateZ);
    p5.box(0,50,50);
    // translateX = 50;
    if(translateX === -25 && translateY === 50 && translateZ === -25) translateY = 0;
    else if(translateX === -25 && translateY === 0 && translateZ == -25) translateZ = -75;
    else if(translateX === -25 && translateY === 0 && translateZ === -75) translateY = 50;
    p5.pop();
  }
  translateX = 0; translateY = 0; translateZ = 0;
  p5.translate(translateX,translateY,translateZ); 
}
function drawOrangeSide(p5) {
  p5.fill("orange");
  translateX = 0; translateY = 75; translateZ = -25;
  for(let i = 0; i < 4; i++){
    p5.push();
    p5.translate(translateX,translateY,translateZ);
    p5.box(50,0,50);
    // translateX = 50;
    if(translateX === 0 && translateY === 75 && translateZ === -25) translateZ = -75;
    else if(translateX === 0 && translateY === 75 && translateZ === -75) translateX = 50;
    else if(translateX === 50 && translateY === 75 && translateZ === -75) translateZ = -25;
    p5.pop();
  }
  translateX = 0; translateY = 0; translateZ = 0;
  p5.translate(translateX,translateY,translateZ); 
}
function drawWhiteSide(p5) {
  p5.fill("white");
  translateX = 50; translateY = 0; translateZ = -100;
  for(let i = 0; i < 4; i++){
    p5.push();
    p5.translate(translateX,translateY,translateZ);
    p5.box(50,50,0);
    // translateX = 50;
    if(translateX === 50 && translateY === 0 && translateZ === -100) translateX = 0;
    else if(translateX === 0 && translateY === 0 && translateZ === -100) translateY = 50;
    else if(translateX === 0 && translateY === 50 && translateZ === -100) translateX = 50;
    p5.pop();
  }
  translateX = 0; translateY = 0; translateZ = 0;
  p5.translate(translateX,translateY,translateZ); 
}

function draw(p5) {
  p5.background(220);
  p5.orbitControl(10,10);
  // p5.rotateX(0.5);
  // p5.rotateY(0.5);
  p5.rotateX(p5.frameCount * 0.01);
  p5.rotateY(p5.frameCount * 0.01);
  p5.strokeWeight(4);
  p5.stroke(51);

  drawGreenSide(p5);
  drawBlueSide(p5);
  drawRedSide(p5);
  drawOrangeSide(p5);
  drawYellowSide(p5);
  drawWhiteSide(p5);
};

function App() {
  return (
    <div className="App">
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default App;

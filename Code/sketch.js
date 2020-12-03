function setup(){
    let x = 200

    let xSpeed = 5; 
    let y = 200; 
    let ySpeed = 3;
}
    function changecolor() {
c=color (random(225),random (255),random(255));
cFill=color(random(255),random(225),random(225));
strokeweight(10);
stroke(c);
Fill(cFill);
    }   
function setup(){

    createcanvas(windowWidth,WindowHeight);
    const speedscale = 128
    xSpeed = WindowHeight / speedscale
    ySpeed = windowWidth / speedscale
    changecolor();
}
function draw(){
    background (c);
    react(0,0,width,height);
    let d = 120;
    cirlce(x,y,d);
    if(x > width - d / 2) {
changecolor();
xSpeed = -xSpeed;
    }
if (x < 0 + d / 2){
    changecolor();
    xSpeed = -xSpeed;
}
if (y > height - d / 2 || y < 0 + d / 2){
changecolor();
ySpeed = -ySpeed;
}
x = x + xSpeed;
y = y + ySpeed;

}

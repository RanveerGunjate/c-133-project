img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}
function preload() 
{
     img = loadImage('2.jpg')
}
function draw() 
{
    image(img, 0, 0, 640, 420);
    fill("FF0000");
    text("TV", 220, 180);
    noFill();
    stroke("#0000FF");
    rect(220, 180, 300, 150);

    fill("#FFFF00");
    text("AC", 100, 200);
    noFill();
    stroke(" #00FF00");
    rect(100, 200, 300, 90);
    
}

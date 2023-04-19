img = "";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}
function preload() 
{
     img = loadImage('5.jpg')
}
function draw() 
{
    image(img, 0, 0, 640, 420);
    fill("FF0000");
    text("Bed", 100, 220);
    noFill();
    stroke("#ff0000");
    rect(90, 200, 500, 200);

    fill("#FFFF00");
    text("Pillows", 100, 200);
    noFill();
    stroke("#FFFF00");
    rect(100, 200, 300, 90);

    fill("#0000FF");
    text("Lamp", 280, 60);
    noFill();
    stroke("#0000FF");
    rect(270, 50, 100, 110);

    fill("#00FF00");
    text("Pictures", 100, 100);
    noFill();
    stroke("#00FF00");
    rect(100, 100, 200, 110);

    fill("#00FF00");
    text("Side Table", 100, 100);
    noFill();
    stroke("#00FF00");
    rect(100, 100, 200, 110);
    
}

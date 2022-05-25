status1 = "";
object = [] ;
function setup() {
canvas = createCanvas(600,400);
canvas.center();
objectDetector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded() {
    console.log("Model Loaded !");
    status1 = true ;
    objectDetector.detect(img,gotResult) ;
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        object = results ;
    }
}

function preload() {
    img = loadImage("photo frame.jpg");
}

function draw() {
    image(img,0,0,600,400);
    if (status1 != "") {
        for (let i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected" ;
            fill("#FF0000");
            percent = floor(object[i].confidence*100);
            text(object[i].label + "" + percent + "%" , object[i].x + 15,object[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}

 function change() {
     window.location("index.html")
 }
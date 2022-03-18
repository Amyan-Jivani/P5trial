


function preload(){}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(190,297)
    video=createCapture(VIDEO);
    video.hide();
    tintcolor="";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tintcolor);
}

function take_snapshot(){
save("video.png");
}

function filtercolor(){
    tintcolor=document.getElementById("colortext").value;
}
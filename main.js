status1="";
song="";

function preload() {
    song= loadSound("mariah_christmas_isu.mp3");
}

function setup() {
    canvas= createCanvas(600,500);
    canvas.position(650,400);

    video= createCapture(VIDEO); 
    video.hide();

    loading_model= ml5.objectDetector("cocossd", loadedm);
}
function loadedm() {
    console.log("Cocossd has been inputed");
    status1=true;
    loading_model.detect(video, recieve_result);
}
function recieve_result(error,result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);
        z=result;
    
    }
    }
function draw() {
    image(video, 0, 0, 600, 500);
    song.play();
    if (status1 != "") {
        loading_model.detect(video, recieve_result);
     for(var i=0; i < z.length; i++) {
     noFill();
     if(z="person") {
         document.getElementById("status").innerHTML="Status: Mysterious Baby Detected...??";
         song.stop()
     }
     else if(z.length<0) {
    document.getElementById("status").innerHTML="Status: WHERE IS YOUR BABY?!?!?";
    song.play();
     }


     else {
         document.getElementById("status").innerHTML="Status: Searching For your baby";
         song.play();
     }
     
     textSize(20);
     noStroke();
     text(objects[i].label + " " + number_save + "%", objects[i].x, objects[i].y);
     noFill();
     stroke("blue");
     strokeWeight(3);
     rect(objects[i].x, objects[i].y, objects[i].width , objects[i].height);
     }   

    }
}


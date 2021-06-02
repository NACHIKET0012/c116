nosex=0;
nosey=0;
function preload(){
    clown_nose= loadImage('https://i.postimg.cc/nrpy8yZY/images.jpg');
    

}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(results){
    console.log(results);
    if (results.length>0){
        nosex= results[0].pose.nose.x -10;
        nosey=  results[0].pose.nose.y -10;

        console.log("nose x=  "+nosex);
        console.log("nose y=  "+nosey);
    }
    

}
function modelLoaded(){
    console.log('posenet is initialise');
}

function draw(){
    image(video, 0,0, 300,300);
   image(clown_nose, nosex, nosey, 30,30);
    


}

function take_snapshot(){
    save('snapshot.png');
}

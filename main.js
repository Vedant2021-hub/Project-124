function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#FF2E2E')
}

function modelLoaded() {
    console.log('Pose Net is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

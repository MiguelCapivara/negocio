 function setup() {
video = createCapture(VIDEO);
video.size(210, 210)
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);

 }

 function gotPoses(results) 
 {
if (results.length > 0){
    console.log(results)
};
 };
 
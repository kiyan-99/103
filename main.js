Webcam.set({ width:360, height:250, image_format:'png', png_quality:90 }); camera=document.getElementById("camera"); Webcam.attach( '#camera' ); function take_snapshot() { Webcam.snap(function(data_uri){ document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); }
console.log("modal veriol",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hrZ-e9uUA/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
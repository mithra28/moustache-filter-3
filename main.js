function preload()
{
  moustache_image = loadImage('https://i.postimg.cc/c46vGY2Z/moustache.png')
}

noseX = 0;
noseY = 0;

function setup()
{
    canvas = createCanvas(300 , 300)
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
    
    //filter_type = "";

}

function modelLoaded()
{
    console.log("PoseNet is installed");
}

function draw()
{
  image(video , 0 , 0 , 300 , 300);
  image(moustache_image , noseX , noseY , 50 , 50);
  //filter(filter_type);
}



function take_snapshot()
{
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
       console.log(results);
       noseX = results[0].pose.nose.x - 25;
       noseY = results[0].pose.nose.y - 15;
       console.log("nose X = " + noseX);
       console.log("nose Y = " + noseY);
    }
}

//function applyFilter()
//{
    //filter_type = document.getElementById("filter_input").value;
//}
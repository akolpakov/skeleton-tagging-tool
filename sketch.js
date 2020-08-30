// canvas Z-Index
var zIndex = 300;
var imgSize = 800;

var countFrame = 0;
var dataFrames = [];

var dragObject = "";
dragging = false;

// --- DOM ACTIONS --- //
var nextBtn;
var prevBtn;
var saveBtn;

// puase the simulation draw loop and manage the control buttons 
function prev()
{
	if (countFrame != 0)
	{
		countFrame--;
	}
	openCloseBtns();
	dataFrames[countFrame].print(true);
}

// start the simulation draw loop and manage the control buttons 
function next()
{
	if (dataFrames.length - 1 != countFrame)
	{
		countFrame++;
	}
	openCloseBtns();
	dataFrames[countFrame].print(true);
}

// start the simulation draw loop and manage the control buttons 
function saveTags()
{
	var answer = "";
	for (var i = 0; i < dataFrames.length; i++)
	{
		answer += dataFrames[i].toString() + ",";
	}
	answer = answer.substring(0, answer.length - 1);
	downloadasTextFile("gt_skeletons.json", answer);
}

function openCloseBtns()
{
	if (countFrame == 0)
	{
		// close and open buttons 
		document.getElementById("prev").disabled = true;
	}
	else
	{
		document.getElementById("prev").disabled = false;
	}
	if (countFrame == dataFrames.length - 1)
	{
		// close and open buttons 
		document.getElementById("next").disabled = true;
	}
	else
	{
		document.getElementById("next").disabled = false;
	}
	console.log("Frame Index #" + (1 + countFrame));
}

// --- END DOM ACTIONS --- //


// ------------------- END OF GLOBAL VARS ------------------------ // 

let skeletons = [[682.5520782470703, 1370.0000610351562, 549.5520782470703, 1423.6666870117188, 567.5520782470703, 1218.5555725097656, 551.5520782470703, 1205.5555725097656, 574.5520782470703, 1316.6666870117188, 567.5520782470703, 1293.6666870117188, 604.5520782470703, 1192.5555725097656, 663.5520782470703, 1190.5555725097656, 585.5520782470703, 1128.5555725097656, 642.5520782470703, 1108.5555725097656, 671.5520782470703, 1234.6666870117188, 601.5520782470703, 1050.5555725097656],
				[682.5520782470703, 1370.0000610351562, 549.5520782470703, 1423.6666870117188, 567.5520782470703, 1218.5555725097656, 551.5520782470703, 1205.5555725097656, 574.5520782470703, 1316.6666870117188, 567.5520782470703, 1293.6666870117188, 604.5520782470703, 1192.5555725097656, 663.5520782470703, 1190.5555725097656, 585.5520782470703, 1128.5555725097656, 642.5520782470703, 1108.5555725097656, 671.5520782470703, 1234.6666870117188, 601.5520782470703, 1050.5555725097656],
				[640.5520782470703, 1376.6666870117188, 548.5520782470703, 1419.6666870117188, 533.5520782470703, 1214.6666870117188, 527.5520782470703, 1197.6666870117188, 563.5520782470703, 1309.6666870117188, 542.5520782470703, 1288.6666870117188, 581.5520782470703, 1187.6666870117188, 631.5520782470703, 1192.6666870117188, 585.5520782470703, 1130.4444580078125, 615.5520782470703, 1117.6666870117188, 653.5520782470703, 1248.6666870117188, 588.5520782470703, 1050.6666870117188],
				[544.5520782470703, 1416.6666870117188, 520.5520782470703, 1416.6666870117188, 467.5520782470703, 1142.6666870117188, 447.5520782470703, 1140.6666870117188, 513.5520782470703, 1300.6666870117188, 505.5520782470703, 1316.6666870117188, 508.5520782470703, 1184.6666870117188, 553.5520782470703, 1188.6666870117188, 552.5520782470703, 1126.6666870117188, 589.5520782470703, 1120.6666870117188, 601.5520782470703, 1239.6666870117188, 570.5520782470703, 1057.6666870117188],
				[541.5520782470703, 1413.6666870117188, 512.5520782470703, 1412.6666870117188, 470.5520782470703, 1029.6666870117188, 459.5520782470703, 1026.6666870117188, 482.5520782470703, 1321.6666870117188, 482.5520782470703, 1322.6666870117188, 450.5520782470703, 1126.6666870117188, 481.5520782470703, 1109.6666870117188, 522.5520782470703, 1107.6666870117188, 570.5520782470703, 1104.6666870117188, 570.5520782470703, 1231.6666870117188, 551.5520782470703, 1047.6666870117188],
				[549.5520782470703, 1408.77783203125, 509.5520782470703, 1407.77783203125, 508.5520782470703, 963.77783203125, 499.5520782470703, 964.77783203125, 502.5520782470703, 1297.77783203125, 473.5520782470703, 1298.77783203125, 437.5520782470703, 1040.77783203125, 472.5520782470703, 1029.77783203125, 518.5520782470703, 1053.77783203125, 551.5520782470703, 1057.77783203125, 535.5520782470703, 1198.77783203125, 541.5520782470703, 998.77783203125],
				[525.5520782470703, 1389.6666870117188, 491.5520782470703, 1377.6666870117188, 493.5520782470703, 897.6666870117188, 492.5520782470703, 899.6666870117188, 510.5520782470703, 1247.6666870117188, 479.5520782470703, 1250.6666870117188, 435.5520782470703, 976.6666870117188, 469.5520782470703, 959.6666870117188, 499.5520782470703, 989.6666870117188, 541.5520782470703, 983.6666870117188, 525.5520782470703, 1130.6666870117188, 538.5520782470703, 943.6666870117188],
				[494.5520782470703, 1355.5556030273438, 485.5520782470703, 1352.5556030273438, 463.5520782470703, 822.5556030273438, 453.5520782470703, 832.5556030273438, 502.5520782470703, 1207.5556030273438, 484.5520782470703, 1207.5556030273438, 428.5520782470703, 926.5556030273438, 469.5520782470703, 901.5556030273438, 477.5520782470703, 962.5556030273438, 519.5520782470703, 952.5556030273438, 520.5520782470703, 1097.5556030273438, 528.5520782470703, 917.5556030273438],
				 [483.5520782470703, 1350.4444580078125, 467.5520782470703, 1346.4444580078125, 420.5520782470703, 810.4444580078125, 393.5520782470703, 834.4444580078125, 502.5520782470703, 1205.4444580078125, 472.5520782470703, 1207.4444580078125, 447.5520782470703, 891.4444580078125, 459.5520782470703, 886.4444580078125, 479.5520782470703, 954.4444580078125, 520.5520782470703, 951.4444580078125, 507.5520782470703, 1101.4444580078125, 517.5520782470703, 906.4444580078125],
				[475.5520782470703, 1377.6666870117188, 468.5520782470703, 1372.6666870117188, 417.5520782470703, 839.6666870117188, 394.5520782470703, 846.6666870117188, 494.5520782470703, 1230.6666870117188, 463.5520782470703, 1230.6666870117188, 438.5520782470703, 914.6666870117188, 452.5520782470703, 908.6666870117188, 477.5520782470703, 967.6666870117188, 513.5520782470703, 971.6666870117188, 497.5520782470703, 1098.6666870117188, 508.5520782470703, 927.6666870117188],
				[503.5520782470703, 1413.5556030273438, 452.5520782470703, 1408.5556030273438, 415.5520782470703, 880.5556030273438, 392.5520782470703, 881.5556030273438, 478.5520782470703, 1276.5556030273438, 448.5520782470703, 1270.5556030273438, 435.5520782470703, 951.5556030273438, 451.5520782470703, 948.5556030273438, 470.5520782470703, 1016.5556030273438, 518.5520782470703, 1022.5556030273438, 495.5520782470703, 1149.5556030273438, 508.5520782470703, 967.5556030273438],
				 [507.5520782470703, 1418.77783203125, 480.5520782470703, 1417.77783203125, 423.5520782470703, 914.6666870117188, 393.5520782470703, 923.6666870117188, 455.5520782470703, 1305.77783203125, 432.5520782470703, 1310.77783203125, 429.5520782470703, 984.6666870117188, 439.5520782470703, 983.6666870117188, 467.5520782470703, 1043.6666870117188, 500.5520782470703, 1051.6666870117188, 483.5520782470703, 1178.77783203125, 505.5520782470703, 996.6666870117188]];
let balls = [[550, 1213],
			[550, 1213],
			[511, 1210],
			[445, 1140],
			[460, 1026],
			[511, 961],
			[500, 900],
			[458, 827],
			[365, 717],
			[255, 621],
			[163, 560],
			[71, 518]];

function preload() 
{
	for (var index = 1; index <= 12; index++)
	{
		var dataIndex = index - 1;
		var img = loadImage('img/image' + index + '.jpg');
		img.resize(imgSize, imgSize);
		try
		{
			var skeleton = Skeleton.fromJsonString(skeletons[dataIndex]);	
		}
		catch (error)
		{
		
			var skeleton = new Skeleton(skeletons[dataIndex][0],
										skeletons[dataIndex][1],
										skeletons[dataIndex][2],
										skeletons[dataIndex][3],
										skeletons[dataIndex][4],
										skeletons[dataIndex][5],
										skeletons[dataIndex][6],
										skeletons[dataIndex][7],
										skeletons[dataIndex][8],
										skeletons[dataIndex][9],
										skeletons[dataIndex][10],
										skeletons[dataIndex][11],
										skeletons[dataIndex][12],
										skeletons[dataIndex][13],
										skeletons[dataIndex][14],
										skeletons[dataIndex][15],
										skeletons[dataIndex][16],
										skeletons[dataIndex][17],
										skeletons[dataIndex][18],
										skeletons[dataIndex][19],
										skeletons[dataIndex][20],
										skeletons[dataIndex][21],
										skeletons[dataIndex][22],
										skeletons[dataIndex][23]);
		}
		
		var ball = new Ball(balls[dataIndex][0], balls[dataIndex][1]);
		dataFrames.push(new imageSkeleton(img, skeleton, ball, "image" + index + ".jpg"));
	}
}

// setup all the simulation before starting 
function setup()
{
	var cnv = createCanvas(1024, 1820);
	cnv.parent('game');
	// setup for simulation
	frameRate(24);
	dataFrames[countFrame].print(true);
}

// loop run on the simulation
function draw() 
{
	dataFrames[countFrame].print();
	
	if(dragging)
	{
		dataFrames[countFrame].set_new_point(dragObject, mouseX, mouseY);
	}
}

/*when mouse is pressed, 
check if mouse is intersecting w/ circle */
function mousePressed() {
  
  dragging = true;
  dragObject = dataFrames[countFrame].on_point(mouseX, mouseY);
}

function mouseReleased(){
  dragging = false;
}

// download a .txt file into your computer
function downloadasTextFile(filename, text) 
{
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);	
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();	
	document.body.removeChild(element);
}
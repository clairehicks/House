var house;
var storeyHeight;
var sideWallLength;
var innerWallOffset;

function drawHouse(){
	//draws a 2 story house
	//width = 2 * depth
	//room height = roof height
	
	house = document.getElementById("house");
	
	//draw external wall
	drawBrickWall();
	//add windows and door;
	
	//add floor
	
	//draw inner wall
	drawInnerWall();
	
	//add windows and door

	//add floor
	
	//draw roof inc ceiling
	
	//draw first floor
}

function placeBrick(x, y, length, height){
	var newBrick = createBrick(height, length);
	newBrick.setAttributeNS(null, "x", x); 
	newBrick.setAttributeNS(null, "y", y); 
	newBrick.setAttributeNS(null, "class", "brick"); 
	house.appendChild(newBrick);
}

function drawBrickWall() {
	var wallLengthSide = 6;
	var wallLengthBack = 12;
	var brickLength = 500;
	var halfLength = brickLength/2;
	var cornerLength = halfLength*3;
	
	var wallHeight =  46;
	var brickHeight = 130;

	/*create the wall*/
	var yPosition = 0;
	var startWithHalfBrick = false;
	sideWallLength = wallLengthSide * brickLength;
	storeyHeight = wallHeight * brickHeight / 2;
	
	for (var y=0; y < wallHeight; y++) {
		//We are drawing a side, followed by the back, followed by another side
		//Note that when going round corners, bricks are 1.5*brick length

		var xPosition = sideWallLength * 2;

		if(startWithHalfBrick){
			placeBrick( xPosition, yPosition, halfLength, brickHeight);
			xPosition += halfLength;
		}
		
		//first side
		for (var x = 0; x < wallLengthSide - 1; x++){
			placeBrick(xPosition, yPosition, brickLength, brickHeight);
			xPosition += brickLength;
		}

		//corner
		placeBrick(xPosition, yPosition, cornerLength, brickHeight);
		xPosition += cornerLength;
		
		//back
		for (var x1 = 0; x1 < wallLengthBack - (startWithHalfBrick ? 2 : 1); x1++){
			placeBrick(xPosition, yPosition, brickLength, brickHeight);
			xPosition += brickLength;
		}

		//corner
		placeBrick(xPosition, yPosition, cornerLength, brickHeight);
		xPosition += cornerLength;
		
		//second side
		for (var x2 = 0; x2 < wallLengthSide -1 ; x2++){
			placeBrick(xPosition, yPosition, brickLength, brickHeight);
			xPosition += brickLength;
		}			
		
		if(startWithHalfBrick){
			placeBrick( xPosition, yPosition, halfLength, brickHeight);
		}
		
		startWithHalfBrick = !startWithHalfBrick;
		yPosition += brickHeight;
	}
	
	//add roof cutout
	var roofMask = document.createElementNS(svgNS, "path");
	
	var path = "M" + sideWallLength + " 0" +
				" L" + sideWallLength * 6 + " 0"+
				" L" + sideWallLength * 6 + " " + storeyHeight + 
				" L" + sideWallLength * 5 + " " + storeyHeight + 
				" L" + sideWallLength * 4 + " 0" +
				" L" + sideWallLength * 3 + " " + storeyHeight +
				" L0 " + storeyHeight +
				" Z";
				
	roofMask.setAttributeNS(null, "d", path);
	roofMask.setAttributeNS(null, "fill", "#fff");
	house.appendChild(roofMask);
}


function drawInnerWall(){

	// left room
	var innerWallLeft = document.createElementNS(svgNS, "path");
	
	var path = "M0 " + storeyHeight +
				" L" + sideWallLength * 2 + " " + storeyHeight +
				" L" + sideWallLength * 2 + " " + storeyHeight * 2 +
				" L0" + " " + storeyHeight * 2 +
				" Z";
				
	innerWallLeft.setAttributeNS(null, "d", path);
	innerWallLeft.setAttributeNS(null, "fill", "#dfefdf");
	house.appendChild(innerWallLeft);
	
	//right room
	var innerWall = document.createElementNS(svgNS, "path");
	
	var path = "M" + sideWallLength * 6 + " " + storeyHeight +
			" L" + sideWallLength * 8 + " " + storeyHeight +
			" L" + sideWallLength * 8 + " " + storeyHeight * 2 +
			" L" + sideWallLength * 6 + " " + storeyHeight * 2 +
			" Z";
				
	innerWall.setAttributeNS(null, "d", path);
	innerWall.setAttributeNS(null, "fill", "#FFE4E1");
	house.appendChild(innerWall);

	//roof wall
	var innerWallRoof = document.createElementNS(svgNS, "path");
	
	var path = "M" + sideWallLength * 7 + " " + storeyHeight +
				" L" + sideWallLength * 8 + " 0" +
				" L" + sideWallLength * 9 + " " + storeyHeight + 
				" Z";
				
	innerWallRoof.setAttributeNS(null, "d", path);
	innerWallRoof.setAttributeNS(null, "fill", "#FFF8DC");
	house.appendChild(innerWallRoof);
}
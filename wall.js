var house;

function drawHouse(){
	house = document.getElementById("house");
	drawWall(house);
}

function placeBrick(x, y, length, height){
	var newBrick = createBrick(height, length);
	newBrick.setAttributeNS(null, "x", x); 
	newBrick.setAttributeNS(null, "y", y); 
	newBrick.setAttributeNS(null, "class", "brick"); 
	house.appendChild(newBrick);
}

function drawWall(house) {
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

	for (var y=0; y < wallHeight; y++) {
		//We are drawing a side, followed by the back, followed by another side
		//Note that when going round corners, bricks are 1.5*brick length

		var xPosition = 0;

		if(startWithHalfBrick){
			placeBrick( 0, yPosition, halfLength, brickHeight);
			xPosition = halfLength;
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
	var quarterHouseLength = wallLengthSide * brickLength;
	var roofHeight = wallHeight * brickHeight / 2;
	
	var path = "M0 0" +
				" L" + quarterHouseLength * 4 + " 0"+
				" L" + quarterHouseLength * 4 + " " + roofHeight + 
				" L" + quarterHouseLength * 3 + " " + roofHeight + 
				" L" + quarterHouseLength * 2 + " 0" +
				" L" + quarterHouseLength + " " + roofHeight +
				" L0 " + roofHeight +
				" Z";
				
	roofMask.setAttributeNS(null, "d", path);
	roofMask.setAttributeNS(null, "fill", "#fff");
	house.appendChild(roofMask);
}
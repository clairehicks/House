function drawWall() {
	/*create the wall*/
	var wallLengthSide = 14;
	var wallLengthBack = 28;
	var wallHeight = 92;
	var brickLength = 216;
	var halfLength = brickLength/2;
	var brickHeight = 65;
	
	var startWithHalfBrick = false;
	for (var y=0; y < wallHeight; y++) {
		var offset = startWithHalfBrick ? halfLength : 0;
		for (var x = 0; x < wallLengthBack; x++){
			var newBrick = createBrick(brickHeight,brickLength);
			var xPosition = x * brickLength - offset;
			var yPosition = y * brickHeight;
			newBrick.setAttributeNS(null, "x", xPosition); 
			newBrick.setAttributeNS(null, "y", yPosition); 
			document.getElementById("wall").appendChild(newBrick);
		}
		
		if(startWithHalfBrick){
			var newBrick = createBrick(brickHeight,halfLength);
			var xPosition = wallLengthBack * brickLength - offset;
			var yPosition = y * brickHeight;
			newBrick.setAttributeNS(null, "x", xPosition); 
			newBrick.setAttributeNS(null, "y", yPosition); 
			document.getElementById("wall").appendChild(newBrick);
		}			
		
		startWithHalfBrick = !startWithHalfBrick;
	}
}
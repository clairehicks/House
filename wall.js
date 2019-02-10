var house;
var storeyHeight;
var sideWallLength;

function drawHouse(){
	//draws a 2 story house
	//width = 2 * depth
	//room height = roof height
	
	house = document.getElementById("house");
	setHouseSize();
	
	//draw external wall
	drawBrickWall();
	//add windows and door;
	drawWindows();

	//draw left room
	drawKitchen();
	
	//add right room
	drawLounge();

	//draw bedroom
	drawBedroom();
	
	//draw roof inc ceiling

}

function setHouseSize(){
	sideWallLength = 3000;
	storeyHeight =  2990;
}

function drawRectangle(x, y, length, height, colourType){
	var newBrick = document.createElementNS(svgNS, "rect");
	newBrick.setAttributeNS(null, "height", height);
	newBrick.setAttributeNS(null, "width", length);
	newBrick.setAttributeNS(null, "x", x); 
	newBrick.setAttributeNS(null, "y", y); 
	
	newBrick.setAttributeNS(null, "fill", selectColour(colourType) 	);
		
	house.appendChild(newBrick);
}

function selectColour(type){
	switch (type){
		case "RedBrick":
			return "hsl("+(0+Math.round(Math.random()*20))+", "+(40-10+Math.round(Math.random()*20))+"%, "+(40-10+Math.round(Math.random()*5))+"%)";
		case "KitchenTile":
			return "hsl("+(70+Math.round(Math.random()*10))+", "+(40-10+Math.round(Math.random()*20))+"%, "+(30-10+Math.round(Math.random()*5))+"%)";
		default:
			return type;
	}
}

function drawBrickWall() {
	/*define brick size*/
	var brickLength = 500;
	var brickHeight = 130;
	var halfLength = brickLength/2;
	var cornerLength = halfLength*3;

	/*define length and height of wall in bricks*/
	var wallLengthSide = sideWallLength/brickLength;
	var wallLengthBack = wallLengthSide * 2;
	
	var wallHeight =  storeyHeight/brickHeight*2;

	/*create the wall*/
	var yPosition = 0;
	var startWithHalfBrick = false;
	
	for (var y=0; y < wallHeight; y++) {
		//We are drawing a side, followed by the back, followed by another side
		//Note that when going round corners, bricks are 1.5*brick length

		var xPosition = sideWallLength * 2;

		if(startWithHalfBrick){
			drawRectangle( xPosition, yPosition, halfLength, brickHeight, "RedBrick");
			xPosition += halfLength;
		}
		
		//first side
		for (var x = 0; x < wallLengthSide - 1; x++){
			drawRectangle(xPosition, yPosition, brickLength, brickHeight, "RedBrick");
			xPosition += brickLength;
		}

		//corner
		drawRectangle(xPosition, yPosition, cornerLength, brickHeight, "RedBrick");
		xPosition += cornerLength;
		
		//back
		for (var x1 = 0; x1 < wallLengthBack - (startWithHalfBrick ? 2 : 1); x1++){
			drawRectangle(xPosition, yPosition, brickLength, brickHeight, "RedBrick");
			xPosition += brickLength;
		}

		//corner
		drawRectangle(xPosition, yPosition, cornerLength, brickHeight, "RedBrick");
		xPosition += cornerLength;
		
		//second side
		for (var x2 = 0; x2 < wallLengthSide -1 ; x2++){
			drawRectangle(xPosition, yPosition, brickLength, brickHeight, "RedBrick");
			xPosition += brickLength;
		}			
		
		if(startWithHalfBrick){
			drawRectangle( xPosition, yPosition, halfLength, brickHeight, "RedBrick");
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

function drawKitchen(){

	// left room
	drawRectangle(0, storeyHeight, sideWallLength * 2, storeyHeight, "#dfefdf");
				
	//kitchen furniture
	drawRectangle(sideWallLength * 0.07, storeyHeight * 1.7, sideWallLength * 0.4, storeyHeight * 0.3, "#fefefe");
	drawRectangle(sideWallLength * 0.55, storeyHeight * 1.25, sideWallLength * 0.4, storeyHeight * 0.75, "url(#fridge)");
	
	//draw floor
	var numberOfTiles = 7;
	var tileSize = sideWallLength/numberOfTiles;
	
	var yPosition = storeyHeight * 2;
	for (var y=0; y < numberOfTiles; y++) {
		var xPosition = 0;
	
		//first side
		for (var x = 0; x < numberOfTiles; x++){
			drawRectangle(xPosition, yPosition, tileSize, tileSize,"KitchenTile");
			xPosition += tileSize;
		}

		yPosition += tileSize;
	}
}

function drawLounge(){
	//right room
	drawRectangle(sideWallLength * 6, storeyHeight, sideWallLength * 2, storeyHeight, "#FFE4E1");
	
	//lounge furniture
	
	
	//draw floor

}

function drawBedroom(){
	
	//roof wall
	var innerWallRoof = document.createElementNS(svgNS, "path");
	
	var path = "M" + sideWallLength * 7 + " " + storeyHeight +
				" L" + sideWallLength * 8 + " 0" +
				" L" + sideWallLength * 9 + " " + storeyHeight + 
				" Z";
				
	innerWallRoof.setAttributeNS(null, "d", path);
	innerWallRoof.setAttributeNS(null, "fill", "#FFF8DC");
	house.appendChild(innerWallRoof);
	
	//draw floor
}

function drawWindows(){}
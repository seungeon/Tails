
var trailX = [0,0,0,0,0] ;
var trailY = [0,0,0,0,0] ;

/*
var trailX0 = 0;
var trailX1 = 0;
var trailX2 = 0;
var trailX3 = 0;


var trailY0 = 0;
var trailY1 = 0;
var trailY2 = 0;
var trailY3 = 0;
*/


function setup()
{
	createCanvas(800,600);
	noFill();
	stroke(fill(225,mouseY*225/320,mouseY*225/210));
}


function draw()
{
	background(0);

	//ellipse(400,300,mouseX,mouseY);
/*


	// mouse ellipse
	ellipse(mouseX, mouseY, 100, 100);

	//trail ellipse #0

	trailX0 = (mouseX + trailX0 * 9) / 10;
	trailY0 = (mouseY + trailY0 * 9) / 10;
	ellipse(trailX0,trailY0,80,80);


	//trail ellipse #1

	trailX1 = (trailX0 + trailX1 * 9) / 10;
	trailY1 = (trailY0 + trailY1 * 9) / 10;
	ellipse(trailX1,trailY1,80,80);

//trail ellipse #2

    trailX2 = (trailX1 + trailX2 * 9) / 10;
	trailY2 = (trailY1 + trailY2 * 9) / 10;
	ellipse(trailX2,trailY2,80,80);

//trail ellipse #3

    trailX3 = (trailX1 + trailX3 * 9) / 10;
	trailY3 = (trailY1 + trailY3 * 9) / 10;
	ellipse(trailX3,trailY3,80,80);

//trail ellipse #4

    trailX4 = (trailX2 + trailX4 * 9) / 10;
	trailY4 = (trailY2 + trailY4 * 9) / 10;
	ellipse(trailX4,trailY4,80,80);

*/


	// mouse ellipse
	ellipse(mouseX, mouseY, 100, 100);

	//trail ellipse #0

	trailX[0] = (mouseX + trailX[0] * 9) / 10;
	trailY[0] = (mouseY + trailY[0] * 9) / 10;
	fill(225,mouseY*225/320,mouseY*225/210)
	stroke(225,mouseY*225/320,mouseY*225/210);
	ellipse(trailX[0],trailY[0],80,80);


    for (var i = 1; i < 5; i = i+1)
    {
	trailX[i] = (trailX[i-1] + trailX[i] * 9) / 10;
	trailY[i] = (trailY[i-1] + trailY[i] * 9) / 10;
	stroke(225,mouseY*225/320,mouseY*225/210);
	fill(225,mouseY*225/320,mouseY*225/210)
	ellipse(trailX[i],trailY[i],80,80);
    }

/*
	//trail ellipse #1

	trailX[1] = (trailX[0] + trailX[1] * 9) / 10;
	trailY[1] = (trailY[0] + trailY[1] * 9) / 10;
	ellipse(trailX[1],trailY[1],80,80);

//trail ellipse #2

    trailX[2] = (trailX[1] + trailX[2] * 9) / 10;
	trailY[2]= (trailY[1] + trailY[2] * 9) / 10;
	ellipse(trailX[2],trailY[2],80,80);

//trail ellipse #3

    trailX[3] = (trailX[1] + trailX[3] * 9) / 10;
	trailY[3] = (trailY[1] + trailY[3] * 9) / 10;
	ellipse(trailX[3],trailY[3],80,80);

//trail ellipse #4

    trailX[4] = (trailX[2] + trailX[4] * 9) / 10;
	trailY[4] = (trailY[2] + trailY[4] * 9) / 10;
	ellipse(trailX[4],trailY[4],80,80);

*/

}


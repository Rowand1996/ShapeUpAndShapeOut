// class Shape {
//     constructor(){

//     }
// }

class Circle {
    constructor(radius) {
        this.radius = radius;
        let circleDiv = document.createElement("div");
        circleDiv.classList.add("circleDiv");
        let xy = randomCirclePosition();
        circleDiv.style.backgroundColor = "black";
        circleDiv.style.height = 2 * radius + "px";
        circleDiv.style.width = 2 * radius + "px";
        circleDiv.style.borderRadius = radius + "px";
        circleDiv.style.top = xy[0] + "px";
        circleDiv.style.left = xy[1] + "px";
        circleDiv.style.backgroundColor = getRandomColor();
        console.log(circleDiv.style.top,circleDiv.style.left);
        $(".shapeBox").append(circleDiv);
    }
}

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        let xy = randomSquarePosition();
        squareDiv.style.backgroundColor = "black";
        squareDiv.style.height = sideLength + "px";
        squareDiv.style.width = sideLength + "px";
        squareDiv.style.top = xy[0] + "px";
        squareDiv.style.left = xy[1] + "px";
        squareDiv.style.backgroundColor = getRandomColor();

        $(".shapeBox").append(squareDiv);
    }
}

let createSquare = () => {
    let sideLength = $(".squareSideLength").val();
    let square = new Square(sideLength);
}

let createCircle = () => {
    let circleRadius = $(".circleRadius").val();
    let circle = new Circle(circleRadius);
}

let randomCirclePosition = () => {
    let circleRadius = $(".circleRadius").val();
    let circleDiameter = 2 * circleRadius;
    let shapeBoxWidth = $(".shapeBox").width();
    let shapeBoxHeight = $(".shapeBox").height();
    var randomX = Math.floor(Math.random() * ((shapeBoxWidth - circleDiameter) - 0) + 0);
    var randomY = Math.floor(Math.random() * ((shapeBoxHeight - circleDiameter) - 0) + 0);
    return [randomX, randomY];
}

let randomSquarePosition = () => {
    let squareSideLength = $(".squareSideLength").val();
    let shapeBoxWidth = $(".shapeBox").width();
    let shapeBoxHeight = $(".shapeBox").height();
    var randomX = Math.floor(Math.random() * (( shapeBoxWidth - squareSideLength) - 0) + 0);
    var randomY = Math.floor(Math.random() * (( shapeBoxHeight - squareSideLength) - 0) + 0);
    return [randomX, randomY];
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
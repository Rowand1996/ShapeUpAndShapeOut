class Shape {
    constructor() {
    }

    addToBox = () => {

        let xy = this.getPosition();

        this.div.style.top = xy[0] + "px";
        this.div.style.left = xy[1] + "px";

        $(".shapeBox").append(this.div);
    }

    getPosition = () => {
        let shapeBoxWidth = $(".shapeBox").width();
        let shapeBoxHeight = $(".shapeBox").height();

        var randomX = Math.floor(Math.random() * (shapeBoxWidth - this.height));
        var randomY = Math.floor(Math.random() * (shapeBoxHeight - this.width));

        return [randomX, randomY];
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();

        //dont allow a shape that is bigger than the box!
        if (radius * 2 > 500) {
            radius = 500 / 2;
        }
        
        this.radius = radius;
        this.height = radius * 2;
        this.width = radius * 2;

        this.div = document.createElement("div");
        this.div.classList.add("circleDiv");

        this.div.style.height = this.height + "px";
        this.div.style.width = this.width + "px";
        this.div.style.backgroundColor = this.getRandomColor();

        this.div.style.borderRadius = radius + "px";

        this.addToBox();
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super();

        //dont allow a shape that is bigger than the box!
        if (sideLength > 500) {
            sideLength = 500;
        }

        this.sideLength = sideLength;
        this.height = sideLength;
        this.width = sideLength;

        this.div = document.createElement("div");
        this.div.classList.add("squareDiv");

        this.div.style.height = this.height + "px";
        this.div.style.width = this.width + "px";
        this.div.style.backgroundColor = this.getRandomColor();

        this.addToBox();
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();

        //dont allow a shape that is bigger than the box!
        if (height > 500) {
            height = 500;
        }
        if (width > 500) {
            width = 500;
        }

        this.width = width;
        this.height = height;

        this.div = document.createElement("div");
        this.div.classList.add("rectangleDiv");

        this.div.style.height = this.height + "px";
        this.div.style.width = this.width + "px";
        this.div.style.backgroundColor = this.getRandomColor();

        this.addToBox();
    }
}

class Triangle extends Shape {
    constructor(height) {
        super();

        //dont allow a shape that is bigger than the box!
        if (height > 500) {
            height = 500;
        }

        this.height = height;
        this.width = height;
    
        this.div = document.createElement("div");
        this.div.classList.add("triangleDiv");

        this.div.style.height = 0 + "px";
        this.div.style.width = 0 + "px";
        this.div.style.borderBottom = this.height + "px";
        this.div.style.borderBottomColor = this.getRandomColor();
        this.div.style.borderBottomStyle = "solid";
        this.div.style.borderRight = this.height + "px";
        this.div.style.borderRightStyle = "solid";
        this.div.style.borderRightColor = "transparent";

        this.addToBox();
    }
}

let createSquare = () => {
    let sideLength = $(".squareSideLength").val();
    let square = new Square(sideLength);
}

let createCircle = () => {
    let radius = $(".circleRadius").val();
    let circle = new Circle(radius);
}

let createRectangle = () => {
    let width = $(".rectangleWidth").val();
    let height = $(".rectangleHeight").val();
    let rectangle = new Rectangle(width, height);
}

let createTriangle = () => {
    let height = $(".triangleHeight").val();
    let triangle = new Triangle(height);
}


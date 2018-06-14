var canvas = document.getElementById("drawingCanvas");
var context = canvas.getContext("2d");

canvas.onmousedown = canvasClick;   
canvas.onmouseup = stopDragging;
canvas.onmouseout = stopDragging;
canvas.onmousemove = dragCircle;

// Пользовательский объект Circle 
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;
}

// Этот массив хранит все окружности на холсте
var circles = [];

function addRandomCircle() {
    // Устанавливаем произвольный размер и позицию круга
    var radius = randomFromTo(10, 60);
    var x = randomFromTo(0, canvas.width);
    var y = randomFromTo(0, canvas.height);

    // Окрашиваем круг произвольным цветом
    var colors = ["green", "blue", "red", "yellow", "magenta", "orange", "brown", "purple", "pink"];
    var color = colors[randomFromTo(0, 8)];

    // Создаем новый круг
    var circle = new Circle(x, y, radius, color);

    // Сохраняем его в массиве
    circles.push(circle);

    // Обновляем отображение круга
    drawCircles();
}

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function drawCircles() {
    // Очистить холст
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Перебираем все круги
    for (var i = 0; i < circles.length; i++) {
        var circle = circles[i];

        // Рисуем текущий круг
        context.globalAlpha = 0.85;
        context.beginPath();
        context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        context.fillStyle = circle.color;
        context.strokeStyle = "black";

        // Выделяем выбранный круг рамкой (потребуется позже)
        if (circle.isSelected) {
            context.lineWidth = 5;
        }
        else {
            context.lineWidth = 1;
        }
        context.fill();
        context.stroke();
    }
}

function clearCanvas() {
    // Очистить массив
    circles = [];

    // Очистить холст
    drawCircles();
}


var previousSelectedCircle;

function canvasClick(e) {
    // Получаем координаты точки холста, в которой щелкнули
    var clickX = e.pageX - canvas.offsetLeft;
    var clickY = e.pageY - canvas.offsetTop;

    // Проверяем, щелкнули ли no кругу
    for (var i = circles.length - 1; i >= 0; i--) {
        var circle = circles[i];

        // С помощью теоремы Пифагора вычисляем расстояние от 
        // точки, в которой щелкнули, до центра текущего круга
        var distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2))

        // Определяем, находится ли точка, в которой щелкнули, в данном круге
        if (distanceFromCenter <= circle.radius) {
            // Сбрасываем предыдущий выбранный круг	
            if (previousSelectedCircle != null) previousSelectedCircle.isSelected = false;
            previousSelectedCircle = circle;

            // Устанавливаем новый выбранный круг и обновляем холст
            circle.isSelected = true;
            drawCircles();

            // Начинаем перетаскивание
            isDragging = true;

            // Прекращаем проверку
            return;
        }
    }
}

var isDragging = false;

function stopDragging() {
    isDragging = false;
}

function dragCircle(e) {
    // Проверка возможности перетаскивания
    if (isDragging == true) {
        // Проверка попадания
        if (previousSelectedCircle != null) {
            // Сохраняем позицию мыши
            var x = e.pageX - canvas.offsetLeft;
            var y = e.pageY - canvas.offsetTop;

            // Перемещаем круг в новую позицию
            previousSelectedCircle.x = x;
            previousSelectedCircle.y = y;

            // Обновляем холст
            drawCircles();
        }
    }
}
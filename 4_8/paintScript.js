// Тип данных, представляющий отдельный мячик
function Ball(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.strokeColor = "black";
    this.fillColor = "red";
}

// Массив, содержащий информацию обо всех мячиках на холсте
var balls = [];

function addBall() {
    // Устанавливаем размер мячика
    var radius = parseFloat(document.getElementById("ballSize").value);

    // Создаем новый мячик
    var ball = new Ball(50, 50, 1, 1, radius);

    // Сохраняем его в массиве
    balls.push(ball);
}

function clearBalls() {
    // Удаляем все мячики
    balls = [];
}

window.onload = function () {
    // Определение контекста рисования
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");

    canvas.onmousedown = canvasClick;

    // Обновляем холст через 0.02 секунды
    setTimeout("drawFrame()", 20);
}

function drawFrame() {
    // Очистить холст
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Вызываем метод beginPath(), чтобы убедиться,
    // что мы не рисуем часть уже нарисованного содержимого холста
    context.beginPath();

    // Перебираем все мячики
    for (var i = 0; i < balls.length; i++) {
        // Перемещаем каждый мячик в его новую позицию
        var ball = balls[i];
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Добавляем эффект "гравитации", который ускоряет падение мячика
        if ((ball.y) < canvas.height) ball.dy += 0.22;

        // Добавляем эффект "трения", который замедляет движение мячика
        ball.dx = ball.dx * 0.998;

        // Если мячик натолкнулся на край холста, отбиваем его
        if ((ball.x + ball.radius > canvas.width) || (ball.x - ball.radius < 0)) {
            ball.dx = -ball.dx;
        }

        // Если мячик упал вниз, отбиваем его, но слегка уменьшаем скорость
        if ((ball.y + ball.radius > canvas.height) || (ball.y - ball.radius < 0)) {
            ball.dy = -ball.dy * 0.96;
        }

        // Проверяем, хочет ли пользователь соединительные линии
        //не хочет
        if (!document.getElementById("connectedBalls").checked) {
            context.beginPath();
            context.fillStyle = ball.fillColor;
        }
        //хочет
        else {
            context.fillStyle = "white";
        }

        // Рисуем мячик
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.lineWidth = 1;
        context.fill();
        context.stroke();
    }

    // Рисуем следующий кадр через 20 миллисекунд
    setTimeout("drawFrame()", 20);
}

function canvasClick(e) {
    // Координаты щелчка мышью
    var clickX = e.pageX - canvas.offsetLeft;
    var clickY = e.pageY - canvas.offsetTop;

    for (var i in balls) {
        var ball = balls[i];

        // Проверка попадания
        if ((clickX > (ball.x - ball.radius)) && (clickX < (ball.x + ball.radius))) {
            if ((clickY > (ball.y - ball.radius)) && (clickY < (ball.y + ball.radius))) {
                // Изменить скорость мячика
                ball.dx -= 2;
                ball.dy -= 3;
                return;
            }
        }
    }
}
slideNumber = 0;
var req = new XMLHttpRequest();

function nextSlide() {
    if (slideNumber == 5) {
        slideNumber = 1;
    } else {
        slideNumber += 1;
    }

    // Добавленный код
    history.pushState(slideNumber, null, "exotic_china"
        + slideNumber + ".html");
    //

    //это не работает
    // location.href = "exotic_china"
    // + slideNumber + ".html";

    goToNewSlide();
    return false;
}

function previousSlide() {
    if (slideNumber == 1) {
        slideNumber = 5;
    } else {
        slideNumber -= 1;
    }

    // Добавленный код
    history.pushState(slideNumber, null, "exotic_china"
        + slideNumber + ".html");

    goToNewSlide();
    return false;
}

function goToNewSlide() {
    // Отправляем номер слайда в файл exotic_china.php
    req.open("GET", "exotic_china.aspx?slide=" + slideNumber, true);

    // Подключаем функцию для обработки данных слайдов
    req.onreadystatechange = newSlideReceived;

    // Отправляем запрос
    req.send();
}

function newSlideReceived() {
    if ((req.readyState == 4) && (req.status == 200)) {
        document.getElementById("slide").innerHTML = req.responseText;
    }
}

window.onpopstate = function(e) {
    if (e.state != null) {
      // Определяем номер слайда для данного состояния. 
      // (Этот номер также можно было вырезать из URL, используя 
      // свойство location.href, но для этого потребуется больше работы.)
      slideNumber = e.state;
      
      // Запрашиваем этот слайд у веб-сервера
      goToNewSlide();
    }
  }
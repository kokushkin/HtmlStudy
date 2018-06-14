slideNumber = 0;
var req = new XMLHttpRequest();

function nextSlide() {
    if (slideNumber == 5) {
       slideNumber = 1;
    } else {
       slideNumber += 1;
    }
 
    goToNewSlide();
    return false;
 }
 
 function previousSlide() {
    if (slideNumber == 1) {
       slideNumber = 5;
    } else {
       slideNumber -= 1;
    }
 
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
    if ((req.readyState == 4) && (req.status == 200))
    {
        document.getElementById("slide").innerHTML = req.responseText;
    }
  }
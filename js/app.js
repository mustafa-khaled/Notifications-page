
let markRead = document.getElementById("mark-read");
let boxes = document.querySelectorAll(".read");
let point = document.querySelectorAll(".point");
let number = document.querySelector(".number");



boxes.forEach(function (ele) {
    ele.addEventListener("click", function () {
        // Remove background Color From Element
        this.style.backgroundColor = "hsl(0, 0%, 100%)";
        point.forEach(function (e) {
            if (e.parentNode.parentNode.parentNode === ele) {
                e.style.display = "none";
            }
        });


        number.innerHTML -= 1;
        if (number.innerHTML <= 0) {
            number.style.display = "none";
        }
    });
});



markRead.addEventListener("click", function () {
    boxes.forEach(function (ele) {
        ele.style.backgroundColor = "hsl(0, 0%, 100%)";
    });
    point.forEach(function (ele) {
        ele.style.display = "none";
    });
    number.innerHTML = "0";
});


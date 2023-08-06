dropInElementbyID("Title");
dropInElementbyID("Description");
dropInElementbyID("NavBar");

function dropInElementbyID(elementID) {
    let element = document.getElementById(elementID);
    element.style.position = "relative";
    element.style.bottom = "1000px";
    let pos = 1000;
    let movement = setInterval(moveDown, 3);
    function moveDown() {
        if (pos <= 0) {
            clearInterval(movement);
            return;
        } else {
            pos -= 10;
            element.style.bottom = pos + "px";
        }
    }
}

let pingPongBall = document.getElementById("ball");
let Xpos = Math.random() * 100;
let Ypos = Math.random() * 100;
let Xincrease = Math.random();
let Yincrease = Math.random();

let movement = setInterval(moveBall, 3);
function moveBall() {
    Xpos += Xincrease;
    Ypos += Yincrease;
    pingPongBall.style.left = Xpos + "px";
    pingPongBall.style.bottom = Ypos + "px";
    if (Xpos > window.innerWidth - 80)
    {
        Xincrease *= -1;
    }
    if (Xpos < 0)
    {
        Xincrease *= -1;
    }
    if (Ypos > window.innerHeight + 150)
    {
        Yincrease *= -1;
    }
    if (Ypos < -150)
    {
        Yincrease *= -1;
    }
}
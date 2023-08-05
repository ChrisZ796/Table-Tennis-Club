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
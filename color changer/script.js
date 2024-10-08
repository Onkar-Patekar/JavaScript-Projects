const body = document.getElementsByTagName("body")[0];

function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
}

randomColor();


// -----------------------------------------------------------------

// const body = document.getElementsByTagName("body")[0];

// function colorRed(red){
//     body.style.backgroundColor = "red";
// }

// function colorOrange(orange){
//     body.style.backgroundColor = "orange";
// }

// function colorBlue(blue){
//     body.style.backgroundColor = "blue";
// }

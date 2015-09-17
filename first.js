var temp = document.createTextNode("START");
var button_beggining = document.createElement("button");
button_beggining.appendChild(temp);
button_beggining.className = "start button";
button_beggining.setAttribute("onclick", "funtion1()");
document.body.appendChild(button_beggining);

function funtion1(){
    console.log("X");
    var field,
        play1,
        play2,
        play3,
        play4,
        play5,
        play6,
        paddle,
        ball,
        lifesNode,
        scoreNode,
        bigDiv;
    field = document.createElement("div");field.id - "field";
    play1 = document.createElement("div");play1.className = "brick play1";
    play2 = document.createElement("div");play2.className = "brick play2";
    play3 = document.createElement("div");play3.className = "brick play3";
    play4 = document.createElement("div");play4.className = "brick play4";
    play5 = document.createElement("div");play5.className = "brick play5";
    play6 = document.createElement("div");play6.className = "brick play6";
    bigDiv = document.createElement("div");bigDiv.id = "bigDiv";
    paddle = document.createElement("div");paddle.id = "paddle";
    ball = document.createElement("div");ball.id = "ball";
    lifesNode = document.createElement("div");lifesNode.id = "lifesNode";
    scoreNode = document.createElement("div");scoreNode.id = "scoreNode";
    $("body").append(bigDiv);
    bigDiv = document.getElementById("bigDiv");
    bigDiv.appendChild(lifesNode);
    bigDiv.appendChild(scoreNode);
    bigDiv.appendChild(paddle);
    bigDiv.appendChild(ball);
    bigDiv.appendChild(field);
    field.appendChild(play1);
    field.appendChild(play2);
    field.appendChild(play3);
    field.appendChild(play4);
    field.appendChild(play5);
    field.appendChild(play6);
    field = document.getElementById("field");
    return bigDiv;
}



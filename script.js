function movestar1() {
    document.getElementById('star1').style.top = JSON.stringify(Math.floor(Math.random() * 500))+"px";
    document.getElementById('star1').style.left = JSON.stringify(Math.floor(Math.random() * 1200))+"px";
}
function movestar2() {
    document.getElementById('star2').style.top = JSON.stringify(Math.floor(Math.random() * 500))+"px";
    document.getElementById('star2').style.left = JSON.stringify(Math.floor(Math.random() * 1200))+"px";
}
function movestar3() {
    document.getElementById('star3').style.top = JSON.stringify(Math.floor(Math.random() * 500))+"px";
    document.getElementById('star3').style.left = JSON.stringify(Math.floor(Math.random() * 1200))+"px";
}
function movestar4() {
    document.getElementById('star4').style.top = JSON.stringify(Math.floor(Math.random() * 500))+"px";
    document.getElementById('star4').style.left = JSON.stringify(Math.floor(Math.random() * 1200))+"px";
}
function movestar5() {
    document.getElementById('star5').style.top = JSON.stringify(Math.floor(Math.random() * 500))+"px";
    document.getElementById('star5').style.left = JSON.stringify(Math.floor(Math.random() * 1200))+"px";
}

setInterval(movestar1, 10000);
setInterval(movestar2, 10000);
setInterval(movestar3, 10000);
setInterval(movestar4, 10000);
setInterval(movestar5, 10000);
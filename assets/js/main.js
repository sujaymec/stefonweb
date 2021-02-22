function fitBackround(windowHeight) {
    document.getElementById('landing').style.height = windowHeight - 1 + 'px'
}

function placeHeader(windowHeight) {
    document.getElementsByTagName('h1')[0].style.marginTop = windowHeight/2 - 10 + 'px'
}

window.onload = window.onresize = function(){
    var windowHeight = window.innerHeight
    fitBackround(windowHeight);
    placeHeader(windowHeight);

}
function displayData(n){
    display.value += n
}
function allClear(){
    display.value=""
}
function deleteData(){
    display.value= (display.value.slice(0,-1))
}
function offCalc() {
    var calculatorFrame = document.getElementById("calc");
    calculatorFrame.style.display = "none";
}
function result(){
    display.value = eval(display.value)
}
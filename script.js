var num = 1;
function numIncrease(){
    var element = document.querySelector("#like_count");
    element.innerText = num +" like(s)";
    num++;
}
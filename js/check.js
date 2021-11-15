
function checkList(num) {
    var checkbox = document.getElementById(`checkBox${num}`);
    var list = document.getElementById(`row${num}`);
    console.log(checkbox.checked);
    if (checkbox.checked) {
        list.style.textDecorationLine = "line-through";;
    } else {
        list.style.textDecorationLine = "none";
    }

}
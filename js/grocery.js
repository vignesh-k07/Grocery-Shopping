function showList() {
    var table = document.getElementById("table-list");
    var button = document.getElementById("button");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.response);
            var data = "";
            for (var i = 0; i < response.list.length; i++) {
                data += `<tr id="row${i+1}" class="table-light"><th scope="row">${i+1}</th><td>${response.list[i].item}</td><td>${response.list[i].quantity}</td><td>${response.list[i].unit}</td><td>${response.list[i].department}</td><td>${response.list[i].notes}</td><td><input  type="checkbox" onclick="checkList(${i+1})" id="checkBox${i+1}"></td></tr>`;
            }
            table.innerHTML = data;
            button.innerHTML = "";
        }
    }
    console.log("Hi")
    xhttp.open("GET", "../list.json", true);
    xhttp.send();
}
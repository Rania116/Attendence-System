window.addEventListener("load", function() {
        getData()
        empEmail = document.getElementById("emailName");
        empName = document.getElementById("empname");
        timeEmployee = document.getElementById("empTime")



    }) //end load




function attendence() {
    var today = new Date()
    for (var i = 0; i <= arr.length; i++) {
        if (empEmail.value == arr[i].Email) {
            temp = arr[i];
            empName.innerText = temp.firstname + " " + temp.lastname;

            var dayTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            timeEmployee.innerText = dayTime

        }

        if (today.getHours() == 9 && today.getMinutes <= 5 && today.getSeconds <= 55) {
            temp.attendence[temp.attendence.length - 1].attend++;
            SaveData();

        } else if (today.getHours() == 9 && today.getMinutes == 15 && today.getSeconds <= 55) {
            temp.attendence[temp.attendence.length - 1].attend++;
            temp.attendence[temp.attendence.length - 1].latetime++;
            SaveData();

        } else {
            temp.attendence[temp.attendence.length - 1].abcensetime++
                SaveData();

        }
    }

}


//getData Form Json
function getData() {
    let _url = "data.json";
    $.ajax({
        url: _url,
        type: "get",
        success: function(res) {
            arr = res

        },
        error: function(ErrorMessage) {
            console.log(ErrorMessage);
        }

    })
}





function SaveData() {
    var _StoreData = new Blob([JSON.stringify(arr)], { type: "appliction/json" });
    var Linkelement = document.createElement("a");
    Linkelement.href = window.webkitURL.createObjectURL(_StoreData);
    Linkelement.setAttribute("download", "data.json");
    document.body.appendChild(Linkelement);
    Linkelement.click();
    document.body.removeChild(Linkelement);
}
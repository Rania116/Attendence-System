window.addEventListener("load", function() {
        getData();
        $(document).on('click', '#empDelet', function() {
            var checkboxes = document.getElementsByClassName('checkbtn');
            var table = document.getElementById('_tbl');
            for (var i = 0; i < table.rows.length; i++) {
                if (checkboxes[i].checked == true) {
                    _tbl.deleteRow(i);
                    arr.splice(i, 1);
                    i--;
                }
            }
            SaveData(arr);
        });
        $(document).on('click', '#empApprove', function() {
            var checkboxes = document.getElementsByClassName('checkbtn');
            var table = document.getElementById('_tbl');
            for (var j = 0; j < table.rows.length; j++) {
                if (checkboxes[j].checked == true) {
                    console.log("sucess")
                    for (var j = 0; j < arr.length; j++) {
                        arr[j].flag = "true";
                        arr[j].attendence.push({
                            "attend": 0,
                            "latetime": 0,
                            "abcensetime": 0,

                        });
                        console.log("attendence")
                    }

                }
            }

            SaveData(arr);
        });

    }) //end loading






function getData() {
    let _url = "data.json";
    $.ajax({
        url: _url,
        type: "get",
        success: function(res) {
            arr = res
            var tbl = document.getElementById("_tbl");


            for (var i = 0; i < arr.length; i++) {
                var _tr = "<tr><td >" + arr[i].firstname + "</td><td>" + arr[i].lastname + "</td><td>" + arr[i].Address + "</td><td>" + arr[i].Email + "</td><td>" + arr[i].pass + "</td><td>" + arr[i].Age + "</td><td><input type='checkbox' class='checkbtn'></td></tr>";
                tbl.innerHTML += _tr;

            }
            var tb2 = document.getElementById("tblfull")
            for (var j = 0; j < arr.length; j++) {
                if (arr[j].flag == "true") {
                    var tr2 = "<tr><td >" + arr[j].firstname + " " + arr[j].lastname + "</td><td>" + arr[j].attendence[0].attend + "</td><td>" + arr[j].attendence[0].latetime + "</td><td>" + arr[j].attendence[0].abcensetime + "</td></tr>";
                    tb2.innerHTML += tr2;

                }

            }

            var tb3 = document.getElementById('latetab')
            for (var k = 0; k < arr.length; k++) {
                if (arr[k].flag == "true") {
                    var tr3 = "<tr><td>" + arr[k].firstname + " " + arr[k].lastname + "</td><td>" + arr[k].attendence[0].attend + "</td></tr>"
                    tb3.innerHTML += tr3;
                }

            }



            var tb4 = document.getElementById('excuetab')
            for (var x = 0; x < arr.length; x++) {
                if (arr[x].flag == "true") {
                    var tr4 = "<tr><td >" + arr[x].firstname + " " + arr[x].lastname + "</td><td>" + arr[x].attendence[0].abcensetime + "</td></tr>";
                    tb4.innerHTML += tr4;
                }

            }


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
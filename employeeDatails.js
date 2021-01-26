window.addEventListener("load", function() {
        getLocalStorge = localStorage.getItem("employeeEmail")
        console.log(getLocalStorge)

        _url = "data.json";
        $.ajax({
            url: _url,
            type: "get",
            success: function(res) {
                arr = res
                tab = document.getElementById("latetab");
                for (var i = 0; i <= arr.length; i++) {
                    if (getLocalStorge == arr[i].Email) {
                        var tr1 = "<tr><td>" + arr[i].firstname + " " + arr[i].lastname + "</td><td>" + arr[i].attendence[0].attend + "</td><td>" + arr[i].attendence[0].latetime + "</td><td>" + arr[i].attendence[0].abcensetime + "</td></tr>"
                        tab.innerHTML += tr1
                    }
                }
            },
            error: function(ErrorMessage) {
                console.log(ErrorMessage);
            }

        })




    }) //end load
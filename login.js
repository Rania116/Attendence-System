window.addEventListener('load', function() {

    mail = document.getElementById("username");
    pass = document.getElementById("password");

    spantxt = document.getElementById("spanName");
    spanpass = document.getElementById("passwor");

    mail.addEventListener('blur', function() {
        if (!isValidmail()) {
            mail.focus();
            mail.select();
            spantxt.style.display = 'block';
            fname.className = 'form-control';
        } else {
            mail.className = 'form-control';
            spantxt.style.display = 'none';
        }

    }); //end of name blur

    pass.addEventListener('blur', function() {
        if (!isValidPass()) {
            pass.focus();
            pass.select();
            spanpass.style.display = 'block';
            pass.className = 'form-control';
        } else {
            pass.className = 'form-control';
            spanpass.style.display = 'none';
        }
    });

    document.forms[0].addEventListener('submit', function(e) {

        e.preventDefault();

        if (!isValidmail()) {
            mail.focus();
            spantxt.style.display = 'block';
        }

        if (!isValidPass()) {
            pass.focus();
            spanpass.style.display = 'block';
        }


        if (mail.value == 'admin11@gmail.com' && pass.value == 123456789) {

            window.open("adiman.html", "_self");
        } else if (mail.value == 'subadmin23@gmail.com' && pass.value == 987654321) {
            window.open("subadiman.html", "_self");
        } else {
            let _url = "data.json";
            $.ajax({
                url: _url,
                type: "get",
                success: function(res) {
                    arr = res
                    for (i = 0; i <= arr.length; i++) {
                        // alert(mydata[i].Email)
                        if (arr[i].Email == mail.value && arr[i].pass == pass.value && arr[i].flag == "true") {
                            localStoreEmail = localStorage.setItem("employeeEmail", mail.value)
                            window.open("employeeDetails.html", "_self");

                            // alert(localStorage.getItem("employeeEmail"))
                        }

                    }
                },
                error: function(ErrorMessage) {
                    console.log(ErrorMessage);
                }

            })
        }



    })




}); //end of load

function isValidmail() {
    return mail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

}

function isValidPass() {
    return pass.value.match(/^[A-Za-z0-9]{8}/g);
}
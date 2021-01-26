window.addEventListener("load", function() {
    fname = document.getElementById("email");
    pass = document.getElementById("password");

    spantxt = document.getElementById("emailtSpan");
    spanpass = document.getElementById("passSpan");

    fname.addEventListener('blur', function() {
        if (!isValidmail()) {
            fname.focus();
            fname.select();
            spantxt.style.display = 'block';
            fname.className = 'form-control';
        } else {
            fname.className = 'form-control';
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
    }); //end of name blur 
    (function() {

        var forms = document.querySelectorAll('.formRegest')
        Array.prototype.slice.call(forms)

        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity() && !isValidPass() && !isValidmail()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                if (!isValidmail()) {
                    fname.focus();
                    spantxt.style.display = 'block';
                }

                if (!isValidPass()) {
                    pass.focus();
                    spanpass.style.display = 'block';
                } else {
                    getdata();

                }
                form.classList.add('was-validated')
            }, false)
        })
    })()
})

function getdata() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", 'data.json');
    xhr.onload = function() {
        arr = JSON.parse(xhr.responseText);
        arr.push({
            'firstname': $('#first_name').val(),
            'lastname': $('#last_name').val(),
            'Address': $('#address').val(),
            'Email': $('#email').val(),
            'pass': $('#password').val(),
            'Age': $('#age').val(),
            "attendence": [],
            "flag": "false"


        });
        SaveData(arr);
    };
    xhr.send();

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

function isValidmail() {
    return fname.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

}

function isValidPass() {
    return pass.value.match(/^[A-Za-z0-9]{8}/g);
}
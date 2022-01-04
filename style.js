// Fungsi biar bisa login pake enter
$("#passInput").keypress(function(event) {
    if (event.keyCode === 13) {
        $("#btnLogin").click();
    }
  });


// Fungsi Login
function login() {
    var mail = document.getElementById("mailInput").value;
    var pass = document.getElementById("passInput").value;
    var salah = document.getElementById("slh");
    const mailDb = "administrator"                                     // Email Admin
    const passDb = "sudo123"                                          //  Password Admin
  
    console.log(mail)
    console.log(pass)
    salah.style.display = "none";
    if (mail === mailDb && pass === passDb) {
      location.replace("/co.html")
    } else{
        salah.style.display = "block";
      }
  }
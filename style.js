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
    const mailDb = "admin"                                     // Email Admin
    const passDb = "adminpass"                                 //  Password Admin
  
    console.log(mail)
    console.log(pass)
    salah.style.display = "none";
    if (mail === mailDb && pass === passDb) {
      location.replace("beranda.html")
    } else{
        salah.style.display = "block";
      }
  }

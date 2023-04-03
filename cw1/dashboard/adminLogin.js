let form = document.querySelector("#login_button>a");
form.addEventListener("click", function (event) {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#pass").value;
  event.preventDefault();


  if (username == "Saurabh" || 
      username == "Kamlesh" ||
      username == "Hari"    ||  
      username == "Omkar"   ||
      username == "Prabhat"
       && password == "admin") {
        setTimeout(() => {
          window.location.assign("dashboard.html");
          console.log("I am admin"); 
        }, 1500);

  }
  else
    alert("Invalid Credential Please try again");
})        
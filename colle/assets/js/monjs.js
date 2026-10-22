const t1 = document.getElementById("loginUsername");
const t2 = document.getElementById("loginPassword");
const b = document.getElementById("loginBtn");
const msg = document.getElementById("loginError");

if (b) {
  b.addEventListener("click", () => {
    if (t1.value === "" || t2.value === "") {
      msg.classList.remove("d-none");
    } else {
      msg.classList.add("d-none");
      localStorage.setItem("username", t1.value);
      localStorage.setItem("password", t2.value);
      window.location.href = "profile.html";
    }
  });
}

const champUsername = document.getElementById("username");

if (champUsername) {
  const user = localStorage.getItem("username");

  if (user === null) {
    window.location.href = "index.html";
  } else {
    champUsername.value = user;
    document.getElementById("email").value = user + "@gmail.com";
    document.getElementById("level").value = "42";

    const champPassword = document.getElementById("password");
    if (champPassword) {
      champPassword.value = localStorage.getItem("password");
    }
  }
}

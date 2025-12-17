window.addEventListener("DOMContentLoaded", () => {
  const parentBox = document.querySelector("#parent"),
    loginForm = document.querySelector("form");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm),
      userName = formData.get("username").trim(),
      passWord = formData.get("password").trim();
    const fields = [
      { name: "Username", value: userName },
      { name: "Password", value: passWord },
    ];
    const emptyFields = fields.filter((f) => !f.value);
    if (emptyFields.length > 0) {
      const emptySides = emptyFields.map((value) => value.name).join(",");
      const alertMessage = document.createElement("div");
      alertMessage.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Hey</strong> You should check in on some of those fields below: ${emptySides}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          `;
      alertMessage.classList.add("alert-position");
      setTimeout(() => {
        alertMessage.remove();
      }, 5000);
      parentBox.prepend(alertMessage);
      return;
    } else if (emptyFields.length === 0) {
      window.location.href = "/pages/main.html";
    }
  });
});

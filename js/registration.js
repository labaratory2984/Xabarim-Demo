window.addEventListener("DOMContentLoaded", () => {
  "use strick";
  const parentEl = document.querySelector("#first__box"),
    myForm = document.querySelector("form");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(myForm),
      bioValue = formData.get("bio").trim(),
      fullName = formData.get("fullName").trim(),
      userName = formData.get("username").trim(),
      passwordVal = formData.get("password").trim(),
      motherLand = formData.get("motherland").trim();

    const fields = [
      { name: "Bio", value: bioValue },
      { name: "Full-Name", value: fullName },
      { name: "Username", value: userName },
      { name: "Password", value: passwordVal },
      { name: "Motherland", value: motherLand },
    ];
    const emptyFields = fields.filter((f) => !f.value);
    if (emptyFields.length > 0) {
      const emptySides = emptyFields.map((variable) => variable.name).join(",");
      const alertMessage = document.createElement("div");
      alertMessage.innerHTML = `
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Hey</strong> You should check in on some of those fields below: ${emptySides}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
      alertMessage.classList.add("alert-position");
      setTimeout(function () {
        alertMessage.remove();
      }, 3000);
      parentEl.prepend(alertMessage);
      return;
    }
    // SERVER REGISTRATION
    const server = "https://xabarim.pythonanywhere.com/auth/register";
    fetch(server, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bio: bioValue,
        full_name: fullName,
        username: userName,
        password: passwordVal,
        location: motherLand,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server javobi:", data);
      })
      .catch((error) => {
        console.log("Xatolik", error);
      });
    myForm.reset();
  });
});

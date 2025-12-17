window.addEventListener("DOMContentLoaded", () => {
  const fullName = document.querySelectorAll(".full-name"),
    server = "https://xabarim.pythonanywhere.com/users";
  fetch(server)
    .then((res) => res.json())
    .then((data) => {
      fullName.forEach((e) => {
        e.textContent = data[8].full_name;
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

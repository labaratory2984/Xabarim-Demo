window.addEventListener("DOMContentLoaded", () => {
  const logins = document.querySelector(".logins"),
    stopBtn = document.querySelector(".stop-button"),
    claerBtn = document.querySelector(".clear-button"),
    deleteBtn = document.querySelector(".delete-btn"),
    tableSection = document.querySelectorAll(".data"),
    controlBtn = document.querySelector(".control-btn");
  function loginSeans() {
    const logs = document.createElement("p");
    logs.textContent = `
    Reply from 95.46.96.167: bytes=32 time=88ms TTL=57
    `;
    logs.classList.add("logs");
    logins.append(logs);
    window.scrollTo(0, document.body.scrollHeight);
  }
  const intervalId = setInterval(loginSeans, 1000);
  stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    alert("Yaratish to‘xtatildi!");
  });
  claerBtn.addEventListener("click", () => {
    document.querySelectorAll(".logins > p").forEach((p) => {
      p.remove();
    });
  });
  // Table
  deleteBtn.addEventListener("click", () => {
    tableSection.forEach((tr) => {
      tr.remove();
    });
  });
  controlBtn.addEventListener("click", () => {
    const alertation = document.createElement("div");
  });
});
// I need work with massive and keys with some ice tea at the appartment today.

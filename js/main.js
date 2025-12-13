window.addEventListener("DOMContentLoaded", () => {
  const parentBox = document.querySelector("body");
  const successMessage = document.createElement("div");
  successMessage.classList.add("success__msg");
  successMessage.innerHTML = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Congratulations 🎉</strong> You logged successfully
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          `;
  successMessage.classList.add("alert-position");
  parentBox.prepend(successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, 4000);
});

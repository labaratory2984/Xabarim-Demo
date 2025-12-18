window.addEventListener("DOMContentLoaded", () => {
  const parentBox = document.querySelector("body");
  // Alert success login
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
  }, 3000);
  // /Alert success login
  // Followers events:
  const followers = document.querySelectorAll(".follower");
  followers.forEach((event) => {
    event.addEventListener("click", () => {
      const cardImg = followers.querySelector("img").src;
      const followerName =
        followers.querySelector(".profile__name").textContent;
      const followerStatus = followers.querySelector("span").textContent;
    });
  });
});

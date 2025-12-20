window.addEventListener("DOMContentLoaded", () => {
  // `use strict`;
  const myProfileBtn = document.querySelector(".my-profile"),
    modalProfile = document.querySelector(".my_profile-modal"),
    closeMyProfile = document.querySelector("#close-myProfile");
  myProfileBtn.addEventListener("click", () => {
    modalProfile.classList.add("show-modal");
    modalProfile.classList.remove("hide");
  });
  closeMyProfile.addEventListener("click", () => {
    modalProfile.classList.add("hide");
    modalProfile.classList.remove("show-modal");
  });
});

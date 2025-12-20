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
  // Buttons
  const searchBtn = document.querySelector(".search");
  searchBtn.addEventListener("click", () => {
    const searchModal = document.createElement("div");
    searchModal.innerHTML = `
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content" id="search-modal">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">Search Someone</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body border-none">
              <input class="form-control outline-none">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Search <i class="bi bi-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.querySelector("body").append(searchModal);
  });
  // Followers events:
  const parentFollowers = document.querySelector(".followers");
  // GET data form API
  const server = "https://xabarim.pythonanywhere.com/users";
  fetch(server)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const followerItem = document.createElement("div");
        followerItem.classList.add("follower-item");
        followerItem.innerHTML = `
      <div class="d-flex">
        <img src = "/img/profile 4.png" class="img-fluid img-follower">
        <div class="api-data">
          <div>${item.full_name}</div>
          <div>${item.username}</div>
        </div>
      </div>
      `;
        parentFollowers.append(followerItem);
      });
    });
  // const followersClass = document.querySelectorAll(".follower");
  // followers.forEach((event) => {
  //   event.addEventListener("click", () => {
  //     const cardImg = followers.querySelector("img").src;
  //     const followerName =
  //       followers.querySelector(".profile__name").textContent;
  //     const followerStatus = followers.querySelector("span").textContent;
  //   });
  // });
});

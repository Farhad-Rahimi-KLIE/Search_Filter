console.log("Welcome to Search Filter...");
let search = document.querySelector("#search-input");
search.addEventListener("input", filterList);

function filterList() {
  let search = document.querySelector("#search-input");
  const filter = search.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-item");
  listItems.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

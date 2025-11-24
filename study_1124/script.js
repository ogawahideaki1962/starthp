
// getElementByIdで一意の要素を取得
    const titleButton = document.getElementById("changeTitleBtn");
    titleButton.addEventListener("click", () => {
      const title = document.getElementById("pageTitle");
      title.textContent = "Shopping List";
    });

    // querySelectorで最初の要素を取得
    const highlightButton = document.querySelector("#highlightBtn");
    highlightButton.addEventListener("click", () => {
      const firstItem = document.querySelector(".item");
      firstItem.classList.add("highlight");
    });

    // querySelectorAllで複数要素を取得
    const doneButton = document.querySelector("#doneBtn");
    doneButton.addEventListener("click", () => {
      const items = document.querySelectorAll(".item");
      items.forEach((item, index) => {
        if ((index + 1) % 2 === 1) { // 偶数番目だけ
          item.classList.add("done");
        }
      });
    });


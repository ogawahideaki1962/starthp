document.getElementById("img1").addEventListener("click", () => {
  alert("img1クリックされました");
});
document.getElementById("img2").addEventListener("click", () => {
  alert("img2クリックされました");
});
document.getElementById("box3").addEventListener("click", () => {
  alert("box3クリックされました");
});
document.getElementById("box2").addEventListener("click", () => {
  alert("box2クリックされました");
});
document.getElementById("box1").addEventListener("click", (event) => {
  alert("box1がクリックされました");
  event.stopPropagation(); // ここで伝播を停止
});

function writeSource(filename) {
  console.log(filename);
  const newMsg = document.createElement("p");
  newMsg.textContent = filename;
  document.body.appendChild(newMsg);

  // 外部の sample.html を読み込む
  fetch(filename)
    .then((response) => response.text())
    .then((data) => {
      // そのままテキストとして表示（タグは解釈されない）
      document.getElementById("output").textContent = data;
    })
    .catch((error) => {
      console.error("読み込みエラー:", error);
    });
}

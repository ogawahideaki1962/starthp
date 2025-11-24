function writeSource(filename) {
  console.log("読み込み開始:", filename); 
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

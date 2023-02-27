import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期かする
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // DIV生成
  const div = document.createElement("li");
  div.className = "list-row";

  const li = document.createElement("div");
  li.className = "item-name";
  li.innerText = inputText;

  // 完了ボタン
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    deleteFromIncompleteList(complateButton.parentNode);

    const addTarget = complateButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("div");
    li.className = "item-name";
    li.innerText = text;

    // button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  // 作成した要素をリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから要素削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

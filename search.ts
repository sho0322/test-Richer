addEventListener("load", () => {
  const isWriteTextField = document.querySelector("#inWriteTextField");
  const isTextValueInputField = document.querySelector("#searchInputValue");
  isWriteTextField?.addEventListener("click", () => {
    setTimeout(() => {
      isWriteTextField!.setAttribute(
        "style",
        "background-color: rgba(255, 255, 255, 0.25)"
      );
    }, 100);
  });
  isTextValueInputField?.addEventListener("click", () => {
    if (Object(isWriteTextField).value.match(/\S/g)) {
      setTimeout(() => {
        isTextValueInputField!.setAttribute("style", "transform: scale(0);");
      }, 100);
    } else {
      alert(
        "検索ワードを入力してください。\n ※ 半角スペースや、全角スペースのみの検索はできません。"
      );
      isWriteTextField!.setAttribute("style", "background-color: #ffff");
    }
  });
});

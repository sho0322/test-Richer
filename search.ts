addEventListener("load", () => {
  const isSearchAction = document.querySelector("#isSearchAction");
  const isSearchText = document.querySelector("#isSearchText");
  const isSearchInput = document.querySelector("#isSearchInput");
  isSearchInput?.addEventListener("click", () => {
    if (Object(isSearchText).value.match(/\S/g)) {
      Object(isSearchInput).innerHTML = "";
      Object(isSearchText).setAttribute("style", "background-color: orange;");
      Object(isSearchAction).setAttribute(
        "action",
        "http://www.google.co.jp/search"
      );
    } else {
      alert(
        "検索ワードを入力してください。\n ※ 半角スペースや、全角スペースのみの検索はできません。"
      );
    }
  });
});

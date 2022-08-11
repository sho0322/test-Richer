addEventListener("load", function () {
    var isSearchAction = document.querySelector("#isSearchAction");
    var isSearchText = document.querySelector("#isSearchText");
    var isSearchInput = document.querySelector("#isSearchInput");
    isSearchInput === null || isSearchInput === void 0 ? void 0 : isSearchInput.addEventListener("click", function () {
        if (Object(isSearchText).value.match(/\S/g)) {
            Object(isSearchInput).innerHTML = "";
            Object(isSearchText).setAttribute("style", "background-color: orange;");
            Object(isSearchAction).setAttribute("action", "http://www.google.co.jp/search");
        }
        else {
            alert("検索ワードを入力してください。\n ※ 半角スペースや、全角スペースのみの検索はできません。");
        }
    });
});

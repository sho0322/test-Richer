addEventListener("load", function () {
    var isWriteTextField = document.querySelector("#inWriteTextField");
    var isTextValueInputField = document.querySelector("#searchInputValue");
    isWriteTextField === null || isWriteTextField === void 0 ? void 0 : isWriteTextField.addEventListener("click", function () {
        setTimeout(function () {
            isWriteTextField.setAttribute("style", "background-color: rgba(255, 255, 255, 0.25)");
        }, 100);
    });
    isTextValueInputField === null || isTextValueInputField === void 0 ? void 0 : isTextValueInputField.addEventListener("click", function () {
        if (Object(isWriteTextField).value.match(/\S/g)) {
            setTimeout(function () {
                isTextValueInputField.setAttribute("style", "transform: scale(0);");
            }, 100);
        }
        else {
            alert("検索ワードを入力してください。\n ※ 半角スペースや、全角スペースのみの検索はできません。");
            isWriteTextField.setAttribute("style", "background-color: #ffff");
        }
    });
});

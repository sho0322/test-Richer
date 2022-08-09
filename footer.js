addEventListener("load", function () {
    //ページ遷移(URLとfooterメニューを紐付ける)
    var NAVIGATIONN_LIST = [];
    var pageNavigation = document.querySelector("#footer");
    var pageNavigationChildren = Object(pageNavigation).children;
    for (var i = 0; i < pageNavigationChildren.length; i++) {
        Object(NAVIGATIONN_LIST).push(pageNavigationChildren[i]);
    }
    var PAGE_URL = [
        "/timeline.html",
        "/schedule.html",
        "/search/pre.html",
        "/notification.html",
        "/contact.html",
    ];
    var PAGE_URL_LIST = PAGE_URL.length;
    var _loop_1 = function (i) {
        Object(NAVIGATIONN_LIST[i]).addEventListener("click", function () {
            setTimeout(function () {
                location.href = PAGE_URL[i];
            }, 280);
        });
    };
    for (var i = 0; i < PAGE_URL_LIST; i++) {
        _loop_1(i);
    }
});

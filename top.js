addEventListener("load", function () {
    // 時間によって挨拶の種類を変更する処理。
    var Greeting = /** @class */ (function () {
        function Greeting(message) {
            this.greeting = message;
        }
        Greeting.prototype.greetingMessages = function () {
            return this.greeting;
        };
        return Greeting;
    }());
    var now = new Date();
    var hour = now.getHours();
    var morning = new Greeting("おはよう");
    var afternoon = new Greeting("こんにちは");
    var evening = new Greeting("こんばんは");
    var goodMorning = morning.greetingMessages();
    var goodAfternoon = afternoon.greetingMessages();
    var goodEvening = evening.greetingMessages();
    var getGreetingText = document.querySelector("#greetingText");
    if (hour >= 4 && hour <= 10) {
        getGreetingText.innerHTML = goodMorning;
    }
    else if (hour >= 11 && hour <= 17) {
        getGreetingText.innerHTML = goodAfternoon;
    }
    else if (hour >= 18 || hour <= 3) {
        getGreetingText.innerHTML = goodEvening;
    }
    // セレクトボックス内のメニュー
    var MENU_LIST = ["選択", "投稿", "予定", "検索", "通知", "連絡"];
    var getOption = document.querySelectorAll("option");
    var optionList = Object(getOption).length;
    var explanationList = document.querySelector("#explanationList");
    for (var i = 0; i < optionList; i++) {
        Object(getOption[i]).innerHTML = MENU_LIST[i];
    }
    // 画像URL
    var SELECT_IMAGES = {
        "default": "/assets/tekito.png",
        timeline: "/assets/screen2.png",
        schedule: "/assets/sky.jpg",
        search: "/assets/screen.png",
        notification: "/assets/screen2.png",
        contact: "/assets/loading.jpg"
    };
    // 分割代入で画像URLを扱う。
    var DEFAULT = SELECT_IMAGES["default"], TIMELINE = SELECT_IMAGES.timeline, SCHEDULE = SELECT_IMAGES.schedule, SEARCH = SELECT_IMAGES.search, NOTIFICATION = SELECT_IMAGES.notification, CONTACT = SELECT_IMAGES.contact;
    // セレクトボックスの値によって画像を切り替える。
    var changeImage = document.querySelector("#changeImage");
    explanationList === null || explanationList === void 0 ? void 0 : explanationList.addEventListener("change", function () {
        Object(explanationList).firstElementChild.innerHTML = "基本";
        switch (Object(explanationList).value) {
            case "selectTimeline":
                changeImage.setAttribute("src", TIMELINE);
                break;
            case "selectSchedule":
                changeImage.setAttribute("src", SCHEDULE);
                break;
            case "selectSearch":
                changeImage.setAttribute("src", SEARCH);
                break;
            case "selectNotification":
                changeImage.setAttribute("src", NOTIFICATION);
                break;
            case "selectContact":
                changeImage.setAttribute("src", CONTACT);
                break;
            default:
                changeImage.setAttribute("src", DEFAULT);
                break;
        }
    });
    // 画像プレビュー表示用の処理。(セレクトボックスの色も変わる)
    try {
        changeImage === null || changeImage === void 0 ? void 0 : changeImage.addEventListener("click", function () {
            setTimeout(function () {
                changeImage.setAttribute("style", "-webkit-transform:scale(1.4) rotate(360deg)");
                explanationList.setAttribute("style", "background-color: goldenrod; color: white;");
            }, 100);
            addEventListener("click", function () {
                changeImage.setAttribute("style", "-webkit-transform:scale(1) rotate(-360deg)");
                explanationList.setAttribute("style", "background-color: white; color: black;");
            });
        });
    }
    catch (e) {
        alert("ページを再読み込みしてください。");
    }
    //ページ遷移(URLと)
    var NAVIGATIONN_LIST = [];
    var pageNavigation = document.querySelector("#footer");
    var pageNavigationChildren = Object(pageNavigation).children;
    for (var i = 0; i < pageNavigationChildren.length; i++) {
        Object(NAVIGATIONN_LIST).push(pageNavigationChildren[i]);
    }
    var PAGE_URL = [
        "/timeline.html",
        "/schedule.html",
        "/search.html",
        "/notification.html",
        "/contact.html",
    ];
    var _loop_1 = function (i) {
        Object(NAVIGATIONN_LIST[i]).addEventListener("click", function () {
            setTimeout(function () {
                location.href = PAGE_URL[i];
            }, 280);
        });
    };
    for (var i = 0; i < PAGE_URL.length; i++) {
        _loop_1(i);
    }
});

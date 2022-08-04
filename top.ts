addEventListener("load", () => {
  // 時間によって挨拶の種類を変更する処理。

  class Greeting {
    readonly greeting: string;

    public constructor(message: string) {
      this.greeting = message;
    }

    public greetingMessages() {
      return this.greeting;
    }
  }

  const now = new Date();
  const hour: number = now.getHours();
  const morning: Greeting = new Greeting("おはよう");
  const afternoon: Greeting = new Greeting("こんにちは");
  const evening: Greeting = new Greeting("こんばんは");
  const goodMorning = morning.greetingMessages();
  const goodAfternoon = afternoon.greetingMessages();
  const goodEvening = evening.greetingMessages();
  const getGreetingText = document.querySelector("#greetingText");

  if (hour >= 4 && hour <= 10) {
    getGreetingText!.innerHTML = goodMorning;
  } else if (hour >= 11 && hour <= 17) {
    getGreetingText!.innerHTML = goodAfternoon;
  } else if (hour >= 18 || hour <= 3) {
    getGreetingText!.innerHTML = goodEvening;
  }

  // セレクトボックス内のメニュー

  const MENU_LIST: string[] = ["選択", "投稿", "予定", "検索", "通知", "連絡"];
  const getOption = document.querySelectorAll("option");
  const optionList = Object(getOption).length;
  const explanationList = document.querySelector("#explanationList");

  for (let i = 0; i < optionList; i++) {
    Object(getOption[i]).innerHTML = MENU_LIST[i];
  }
  // 画像URL

  const SELECT_IMAGES: { [key: string]: string } = {
    default: "/assets/tekito.png",
    timeline: "/assets/screen2.png",
    schedule: "/assets/sky.jpg",
    search: "/assets/screen.png",
    notification: "/assets/screen2.png",
    contact: "/assets/loading.jpg",
  };

  // 分割代入で画像URLを扱う。

  const {
    default: DEFAULT,
    timeline: TIMELINE,
    schedule: SCHEDULE,
    search: SEARCH,
    notification: NOTIFICATION,
    contact: CONTACT,
  } = SELECT_IMAGES;

  // セレクトボックスの値によって画像を切り替える。
  const changeImage = document.querySelector("#changeImage");

  explanationList?.addEventListener("change", () => {
    Object(explanationList).firstElementChild.innerHTML = "基本";

    switch (Object(explanationList).value) {
      case "selectTimeline":
        changeImage!.setAttribute("src", TIMELINE);
        break;
      case "selectSchedule":
        changeImage!.setAttribute("src", SCHEDULE);
        break;
      case "selectSearch":
        changeImage!.setAttribute("src", SEARCH);
        break;
      case "selectNotification":
        changeImage!.setAttribute("src", NOTIFICATION);
        break;
      case "selectContact":
        changeImage!.setAttribute("src", CONTACT);
        break;
      default:
        changeImage!.setAttribute("src", DEFAULT);
        break;
    }
  });

  // 画像プレビュー表示用の処理。(セレクトボックスの色も変わる)
  try {
    changeImage?.addEventListener("click", () => {
      setTimeout(() => {
        changeImage!.setAttribute(
          "style",
          "-webkit-transform:scale(1.4) rotate(360deg)"
        );
        explanationList!.setAttribute(
          "style",
          "background-color: goldenrod; color: white;"
        );
      }, 100);
      addEventListener("click", () => {
        changeImage!.setAttribute(
          "style",
          "-webkit-transform:scale(1) rotate(-360deg)"
        );
        explanationList!.setAttribute(
          "style",
          "background-color: white; color: black;"
        );
      });
    });
  } catch (e) {
    alert("ページを再読み込みしてください。");
  }
  //ページ遷移(URLとfooterメニューを紐付ける)
  let NAVIGATIONN_LIST: never[] = [];
  const pageNavigation = document.querySelector("#footer");
  const pageNavigationChildren = Object(pageNavigation).children;
  for (let i = 0; i < pageNavigationChildren.length; i++) {
    Object(NAVIGATIONN_LIST).push(pageNavigationChildren[i]);
  }

  const PAGE_URL: string[] = [
    "/timeline.html",
    "/schedule.html",
    "/search.html",
    "/notification.html",
    "/contact.html",
  ];
  for (let i = 0; i < PAGE_URL.length; i++) {
    Object(NAVIGATIONN_LIST[i]).addEventListener("click", () => {
      setTimeout(() => {
        location.href = PAGE_URL[i];
      }, 280);
    });
  }
});

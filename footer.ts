addEventListener("load", () => {
  //ページ遷移(URLとfooterメニューを紐付ける)
  let NAVIGATIONN_LIST: never[] = [];
  const pageNavigation = document.querySelector("#footer");
  const pageNavigationChildren = Object(pageNavigation).children;
  for (let i = 0; i < pageNavigationChildren.length; i++) {
    Object(NAVIGATIONN_LIST).push(pageNavigationChildren[i]);
  }

  const PAGE_URL: readonly string[] = [
    "/timeline.html",
    "/schedule.html",
    "/search.html",
    "/notification.html",
    "/contact.html",
  ];
  const PAGE_URL_LIST = PAGE_URL.length;
  for (let i = 0; i < PAGE_URL_LIST; i++) {
    Object(NAVIGATIONN_LIST[i]).addEventListener("click", () => {
      setTimeout(() => {
        location.href = PAGE_URL[i];
      }, 280);
    });
  }
});
